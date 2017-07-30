import React from 'react';
import Moment from 'react-moment';

export default class StoryListItem extends React.Component {

    componentWillMount() {
        this.props = this.props.story;
    }

    itemLink() {
        return "www.google.com";
    }

    getTitle() {
        if (this.props.url && this.props.url.length > 0)
            return (<a href={this.props.url}>{this.props.title}</a>);
        else
            return (this.props.title);
    }

    getMeta() {
        //71 points by kbp 4 hours ago | hide | 3 comments
        return (
            <div>
                <span>{this.props.score}</span> points by <span>{this.props.by}</span> <span><Moment unix fromNow>{this.props.time}</Moment></span> {this.getCommentsMeta()}
            </div>
        );
    }

    getCommentsMeta() {
         if (this.props.type == "story")
            if (this.props.descendants > 0)
                return  (
                    <span><a href={this.itemLink()}>{this.props.descendants} comments</a></span>
                );
            else 
                return  (
                    <span><a href={this.itemLink()}>discuss</a></span>
                );
    }

    render() {
        
        return (
            <li>
                {this.getTitle()}
                <br />
                {this.getMeta()}
            </li>
        )
    }
}