import React from 'react';
import StoryListItem from './StoryListItem';
import Constants from '../constants';

export default class StoryList extends React.Component {

    render() {
        return (
            <ol className="stories-list" start={this.props.page * Constants.PER_PAGE - Constants.PER_PAGE + 1}>
                {this.props.stories.map((story) => 
                    <StoryListItem 
                        key={story.id}  
                        story={story}
                        />)}
            </ol>
        )
    }
}