import React from 'react';

class Pagination extends React.Component{
    constructor(){
        super()
        this.state={
            page:1
        };
    }
    render(){
        return(
            <section className='buttonContainer'>
                {this.state.page===1 ? null: 
                    <button 
                        aria-label='button for previous page of users'
                        className='button' 
                        type='button' 
                        // onClick={()=>this.callApi(this.state.page-1)}
                        >Back
                    </button>}
                {this.state.page===1 ? null: 
                    <button 
                        aria-label='button for previous page of users'
                        className='button' 
                        type='button' 
                        // onClick={()=>this.callApi(this.state.page-1)}
                        >{this.state.page-1}
                    </button>}

                    <button 
                    aria-label='current page of users'
                        className='button' 
                        id='currentPage' 
                        type='button'>{this.state.page}
                    </button>
                {this.state.page===1 ? null: 
                    <button 
                        aria-label='button for next page of users'
                        className='button' 
                        type='button' 
                        // onClick={()=>this.callApi(this.state.page+1)}
                        >{this.state.page+1}
                    </button>}

                    <button 
                        aria-label='button for next page of users'
                        className='button' 
                        type='button' 
                        // onClick={()=>this.callApi(this.state.page+1)}
                        >Next
                    </button>
            </section>
        )
    }
}
export default Pagination;
