import React from 'react'
import { withRouter } from 'react-router-dom'

class NotFound extends React.Component {
    render() {
        return ( <
            div className = 'notFoundPage' >
            <
            h2 > 404 - Page not found < /h2> <
            p > Try going back to your previous page. < /p> <
            /div>
        )
    }
}
export default withRouter(NotFound)