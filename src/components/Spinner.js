import React from 'react';

export default class Spinner extends React.Component {
    render () {
        return (
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p className="placeholder-loading"></p>
            </div>
        )
    }
}