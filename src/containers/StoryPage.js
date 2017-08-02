import React from 'react';
import Spinner from './../components/Spinner';
import StoryDetails from './../components/StoryDetails';
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
            return <StoryDetails key={story.id} story={story} />
        else if (!this.props.fetched && !this.props.fetching)
            this.props.actions.fetchStory(this.props.match.params.id);
        else if (!this.props.fetched && this.props.fetching)
            return <Spinner />;
    }
    
    render() {
        return (
            <div className="ui segment">
                {this.showStory()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
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
