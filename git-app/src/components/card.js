import React from 'react'
import './card.css'


class RepoCard extends React.Component {
    render() {
        return (
            <div className="repo-whole">
                <a href={this.props.data.html_url}>
                    <div className="repo-card">
                        <hc>{this.props.data.name}</hc>
                        <p>{this.props.data.description}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default RepoCard
