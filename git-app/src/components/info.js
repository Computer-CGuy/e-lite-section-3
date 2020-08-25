import React from 'react'
import ReactDOM from 'react-dom';


class Info extends React.Component {

    render() {
        let data = this.props.data

        if (data.errorm === 'Not Found') {
            return (
                <div className="err">
                    <h2>Request Data for the username cannot be found</h2>
                </div>
            )
        }
        else {
            return (
                <section className="profile">
                    <div className="profile-data">
                        <img src={data.avatar} alt={data.username} />
                        <h2>
                            <a 
                                href={data.userUrl}>
                                {data.username}
                            </a>
                        </h2>
                        <h3>
                            {data.location}
                        </h3>
                    </div>
                </section>
            )
        }
    }
}

export default Info