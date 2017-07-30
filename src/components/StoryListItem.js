import React from 'react';

export default class StoryListItem extends React.Component {

    componentWillMount() {
        this.props = this.props.story;
    }

    getTitle() {
        if (this.props.url && this.props.url.length > 0)
            return (<a href={this.props.url}>{this.props.title}</a>);
        else
            return (this.props.title);
    }

    render() {
        
        return (
            <li>
                {this.getTitle()}
            </li>
        )
    }
}