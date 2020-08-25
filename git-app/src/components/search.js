import React from 'react'
import ReactDOM from 'react-dom';

class Search extends React.Component {

    handleSearch(event) {
        event.preventDefault()
        let username = ReactDOM.findDOMNode(this.refs.username).value
        this.props.getUserData(username)
        ReactDOM.findDOMNode(this.refs.username).value = ""
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleSearch.bind(this)}>
                    <label>
                        <input
                        type="search"
                        placeholder="GitHub USERNAME"
                        ref="username"
                        />
                    </label>
                </form>
            </div>
        )
    }
}
export default Search