import React from 'react';
import Moment from 'react-moment';

export default class Comment extends React.Component {
    render () {
        return (
            <div className="comment">
                <div className="content">
                    <a className="author">{this.props.by}</a>
                    <div className="metadata">
                        <span className="date"><Moment unix fromNow>{this.props.time}</Moment></span>
                    </div>
                    <div className="text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                </div>
            </div>
        )
    }
}