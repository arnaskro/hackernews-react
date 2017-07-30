import React from 'react';

export default class Story extends React.Component {

    componentWillMount() {
        this.props = this.props.story
    }

    render() {
        return (
            <div className="story">
                {this.props.title}
            </div>
        )
    }
}