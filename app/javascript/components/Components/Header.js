import React, { useState } from "react"
import { Nav, NavItem, NavLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (

        <div id="header">

            <Link to="/"><h2 className="title">The Office Episode Generator</h2></Link>

            <Nav className="headerNav">
                <NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Check Me Out!
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><NavLink className="dropdown-link" href="https://www.linkedin.com/in/drewbrad4" target="_blank">LinkedIn</NavLink></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><NavLink className="dropdown-link" href="https://github.com/Drewbrad4" target="_blank">Github</NavLink></DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><NavLink className="dropdown-link" href="https://drewbrad4.github.io/" target="_blank">Portfolio</NavLink></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>

                <NavItem className="contact-me">
                    <Link to="/contact">Contact Me</Link>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Header;