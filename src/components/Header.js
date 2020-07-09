import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="headerArea">
                <h1>ReShop</h1>
                <p className="menuItem">Menu 1</p>
                <p className="menuItem">Menu 2</p>
                <p className="menuItem">Menu 3</p>
            </div>
        )
    }
}

export default Header
