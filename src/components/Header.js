import React from 'react'
import Logo from "./Logo";

function Header() {
    return (
        <header>
            <div className="logo-container">
                <Logo /> Flight API
            </div>
        </header>
    )
}

export default Header
