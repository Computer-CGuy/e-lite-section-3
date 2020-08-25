import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css';
import './index.css'

import Repos from './components/Repos.js'
// import  from './components/card.js'
import Search from './components/search.js'
import Info from './components/info.js'

const API = "https://api.github.com/users";




class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "computer-cguy",
        name: "",
        avatar: "",
        location: "",
        repos: "",
        repo_list: [],
        userUrl: "",
        errorm: "",
      } 
    }

    getUserData(username) {
        let url = `${API}/${username}`;
        let repo_url = `${API}/${username}/repos`
        
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            username: res.login,
            name: res.name,
            avatar: res.avatar_url,
            location: res.location,
            repos: res.public_repos,
            userUrl: res.html_url,
            errorm: res.message,
          })
        })
        .catch((error) => console.log(error));

        fetch(repo_url)
        .then((res) => res.json())
        .then((data) => {
            if (data.message === 'Not Found') {
                this.setState({errorm: data.message, repo_list: null})
            } else {
                this.setState({errorm: data.message, repo_list: data})
            }
        })
        .catch((error) => console.log(error));
    }

    componentDidMount() {   
      this.getUserData(this.state.username);
    }

    render() {
      return (
        <React.Fragment>
            <section className="card">
                
                <Info data={this.state} />
                <Search getUserData={this.getUserData.bind(this)} />
            </section>
            
            <Repos error={this.state.errom} data={this.state.repo_list}/> 
        </React.Fragment>           
      )
    }
  }


export default Main;
