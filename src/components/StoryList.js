import React from 'react';
import StoryListItem from './StoryListItem';

export default class StoryList extends React.Component {

    render() {
        return (
            <ol>
                {this.props.stories.map((story) => 
                    <StoryListItem 
                        key={story.id}  
                        story={story}
                        />)}
            </ol>
        )
    }
}