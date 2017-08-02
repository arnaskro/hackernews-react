import React from 'react';
import StoryDetails from './StoryDetails';
import Constants from '../constants';

export default class StoryList extends React.Component {

    render() {
        return (
            <ol start={this.props.page * Constants.PER_PAGE - Constants.PER_PAGE + 1}>
                {this.props.stories.map((story) => 
                    <li key={story.id} ><StoryDetails story={story} /></li>)}
            </ol>
        )
    }
}