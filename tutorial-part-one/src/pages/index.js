import React from "react"
import Link from "gatsby-link"

export default () =>
    <div style={{ color: 'blue' }}>
        <h1>Hello gatsby!</h1>
        <p>What a world.</p>
        <img
            src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
            alt="" height="200px" width="400px"/>
        <br/>
        <div>
            <Link to="/page-2/">Link</Link>
        </div>
        <div>
            <Link to="/counter/">Counter</Link>
        </div>
    </div>