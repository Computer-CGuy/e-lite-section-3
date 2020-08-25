import React from 'react';
import ReactDOM from 'react-dom';

import RepoCard from './card.js'
class Repos extends React.Component {

    render() {
        let repo_list = this.props.data
        let errorm = this.props.errom
        console.log(errorm)
        if (errorm === 'NA' || repo_list == null) {
            return (
                <div className="repos">
                    <h2 style={{color:"red"}}>Error fetching repos</h2>
                    <p style={ { color:"#333333"}}>
                    The entered username's repos couldn't be fetched.
                    <br />
                    Please try again.</p>
                </div>
            )
        }
        else {
            return (
                <div className="repos">
                    {repo_list.map(repo => {
                        return  (
                            <RepoCard
                                key={repo.id}
                                data={repo}
                            />
                        )
                    })}
                    {console.log(repo_list)}
                </div>
            )
        }
    }
}

export default Repos