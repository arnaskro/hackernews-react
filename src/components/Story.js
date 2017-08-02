import React from 'react';
import StoryDetails from './StoryDetails';

export default class Story extends React.Component {

    componentWillMount() {
        this.props = this.props.story
    }

    render() {
        return (
            <div className="story">
                <StoryDetails key={this.props.id} story={this.props} />
            </div>
        )
    }
}