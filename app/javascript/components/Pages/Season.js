import React, { Component } from "react"
import { Button } from 'reactstrap'

export default class Season extends Component {
    render() {
        const { episode, seasonCheck } = this.props
        return (
            <div className="main-box">

                { episode &&
                    <h3 className="seasonTitle">Season: {episode.season}</h3>
                }

                <Button id="seasonButton" onClick={() => this.props.getRandomSeasonEpisode()}>Beer me an Episode</Button>

                { seasonCheck &&
                    <div className="season-episode-box">
                        <img src={episode.img_url} />
                        <div className="content">
                            <h3>{episode.title}</h3>

                            <p>{episode.description}</p>
                        </div>
                    </div>
                }


            </div>
        )
    }
}