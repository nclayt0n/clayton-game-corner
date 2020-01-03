import React from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../Context';

class Pagination extends React.Component{
    static contextType=Context;
    
    render(){
        return(
            <section className='buttonContainer'>
                {this.props.page<1 
                    ? null
                    :<button 
                        aria-label='button for previous page'
                        className='button' 
                        type='button' 
                        onClick={()=>this.props.setPage(this.props.page-1)}
                        >Back
                    </button>}

                <button 
                        aria-label='current page'
                        className='button' 
                        id='currentPage' 
                        type='button'>{this.props.page+1}
                    </button>
                {this.props.items.length <this.props.pageLimit
                    ?null
                    :<button 
                        aria-label='button for next page of users'
                        className='button' 
                        type='button' 
                        onClick={()=>this.props.setPage(this.props.page+1)}
                        >Next
                    </button>}
            </section>
        )
    }
}
export default withRouter(Pagination);
