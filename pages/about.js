import React from 'react'    
import Router,{ withRouter } from 'next/router'

const About= (props) => {
    return(
        <>
            <button onClick={()=>Router.push('/')} >Home</button>
            <div>About</div>
            <div>{props.router.query.id}</div>
        </>
    )
}

export default withRouter(About);