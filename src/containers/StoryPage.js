import React from 'react';
import Spinner from './../components/Spinner';
import StoryDetails from './../components/StoryDetails';
import Comment from './../components/Comment';
import PropTypes from 'prop-types';
import * as actions from './../actions/StoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryPage extends React.Component {

    componentWillUnmount() {
        this.props.actions.clearStory();
    }

    showStory() {
        let story = this.props.data;

        if (this.props.fetched && !this.props.fetching) 
            return <StoryDetails key={story.id} story={story} />;
        else if (!this.props.fetched && !this.props.fetching)
            this.props.actions.fetchStory(this.props.match.params.id);
        else if (!this.props.fetched && this.props.fetching)
            return <Spinner />;
    }

    showComments() {
        if (this.props.data && this.props.data.comments)
            return this.props.data.comments.map((x, i) => <Comment key={i} by={x.by} time={x.time} text={x.text} />)
    }
    
    render() {
        return (
            <div>
                <div className="ui segment">
                    {this.showStory()}
                </div>
                <div className="ui comments">
                    <h3 className="ui dividing header">Comments</h3>
                    {this.showComments()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.story.comments,
        data: state.story.data,
        id: state.story.id,
        fetching: state.story.fetching,
        fetched: state.story.fetched,
        error: state.story.error
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(StoryPage);
