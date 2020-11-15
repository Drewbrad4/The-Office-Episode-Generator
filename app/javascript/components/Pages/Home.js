import React, { Component } from "react"
import { Button } from 'reactstrap'
import { Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        const { episode } = this.props
        return (
            <div className="main-box">

                <Nav className="seasonList">

                    <NavItem>
                        <Link to="/season/1"><h5>| Season 1 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/2"><h5>Season 2 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/3"><h5>Season 3 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/4"><h5>Season 4 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/5"><h5>Season 5 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/6"><h5>Season 6 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/7"><h5>Season 7 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/8"><h5>Season 8 |</h5></Link>
                    </NavItem>

                    <NavItem>
                        <Link to="/season/9"><h5>Season 9 |</h5></Link>
                    </NavItem>

                </Nav>

                <Button id="button" onClick={() => this.props.getRandomEpisode()}>Beer me an Episode</Button>

                { episode &&
                    <div className="episode-box">
                        <img src={episode.img_url} />
                        <div className="content">
                            <h3>{episode.title}</h3>
                            <h4>Season: {episode.season}</h4>
                            <p>{episode.description}</p>
                        </div>
                    </div>
                }


            </div>
        )
    }
}