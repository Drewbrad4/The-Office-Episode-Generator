import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Season from './Pages/Season'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import emailjs from 'emailjs-com';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      episodes: [],
      episode: null,
      season: null,
      seasonEpisodes: [],
      seasonEpisode: null,
      seasonCheck: false
    }
  }

  componentDidMount() {
    this.fetchEpisodes()
  }

  fetchEpisodes = () => {
    fetch("/episodes")
      .then(response => {
        return response.json()
      })
      .then(episodeArr => {
        this.setState({
          episodes: episodeArr
        })
      })
      .catch(errors => {
        console.log("index errors: ", errors)
      })
  }

  getRandomEpisode = () => {
    let episode = this.state.episodes[Math.floor(Math.random() * this.state.episodes.length)];
    this.setState({ episode: episode })
  }

  getRandomSeasonEpisode = () => {
    this.setState({ seasonCheck: true })
  }

  onSubmit = (e) => {
    e.preventDefault()// Prevents default refresh by the browser
    emailjs.sendForm('gmail', 'default_template', e.target, 'user_ekwIbNldPEmKcGuU0ZHXX')
      .then(result => {
        alert('Message Sent!', result.text);
      },
        error => {
          alert('An error occured, Plese try again', error.text)
        })
  }

  render() {
    return (
      <Router>

        <Header />

        <Switch>

          <Route exact path="/" render={(props) => {
            return (
              <Home
                episode={this.state.episode}
                getRandomEpisode={this.getRandomEpisode}
              />
            )
          }} />

          <Route exact path="/season/:season" render={(props) => {
            let season = props.match.params.season
            let episodes = this.state.episodes.filter(episode => episode.season === Number(season))
            let episode = episodes[Math.floor(Math.random() * episodes.length)]
            console.log(season);
            return (
              <Season
                episode={episode}
                getRandomSeasonEpisode={this.getRandomSeasonEpisode}
                seasonCheck={this.state.seasonCheck}
              />
            )
          }} />

          <Route exact path="/contact" render={(props) => {
            return (
              <Contact
                onSubmit={this.onSubmit}
              />
            )
          }} />

        </Switch>

      </Router>
    );
  }
}

export default App
