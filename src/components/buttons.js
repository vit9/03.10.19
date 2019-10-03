import React, { Component } from "react"

import { Link } from "react-router-dom"

class Authbuttons extends Component {
    render() {
        return (
            <div className="auth__button">
                <Link to="/login" >
                    <button className="buttonAuth">
                        Login
                    </button>
                </Link>
                <Link to="/registration" >
                    <button className="buttonAuth">
                        Sign up
                    </button>
                </Link>
            </div>
        )
    }
}

export default Authbuttons;