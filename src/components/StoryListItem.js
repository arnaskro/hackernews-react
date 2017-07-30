import React from 'react';
import Moment from 'react-moment';
import { Link }  from 'react-router-dom';

export default class StoryListItem extends React.Component {

    componentWillMount() {
        this.props = this.props.story;
    }

    itemLink(text) {
        return <Link to={'/story/' + this.props.id}>{text}</Link>
    }

    getHost() {
        var host = (new URL(this.props.url)).hostname;
        return <a href={"//" + host}>{host.replace("www.", "")}</a>;
    }

    getTitle() {
        return !!this.props.url ? 
            <span><a href={this.props.url}>{this.props.title}</a> <span className="host">({this.getHost()})</span></span>
            : 
            this.props.title;
    }

    getMeta() {
        //71 points by kbp 4 hours ago | hide | 3 comments
        return (
            <div>
                <span className="score">{this.props.score}</span> points by <span className="author">{this.props.by}</span> <span className="time"><Moment unix fromNow>{this.props.time}</Moment></span> {this.getCommentsMeta()}
            </div>
        );
    }

    getCommentsMeta() {
         if (this.props.type == "story")
            if (this.props.descendants > 0)
                return  (
                    <span className="comments has-comments">{this.itemLink(this.props.descendants + " comments")}</span>
                );
            else 
                return  (
                    <span className="comments">{this.itemLink("discuss")}</span>
                );
    }

    render() {
        
        return (
            <li className="story-item">
                <div className="title">{this.getTitle()}</div>
                <div className="meta">{this.getMeta()}</div>
            </li>
        )
    }
}