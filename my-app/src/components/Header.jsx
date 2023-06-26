import React from "react"

const Header = () => {
    return (
        <header>
            <p className="header-text">Hello World!</p>
            <div className="header-menu">
                <a className="menu-text" href="/#">HTML</a>
                <a className="menu-text" href="/#">CSS</a>
                <a className="menu-text" href="/#">JavaScript</a>
            </div>
        </header>
    )
}

export default Header