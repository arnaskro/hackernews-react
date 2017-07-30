import React from 'react';

export default class StoryListItem extends React.Component {

    render() {
        return (
            <li>
                {this.props.title}
            </li>
        )
    }
}