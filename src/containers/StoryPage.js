import React from 'react';
import Spinner from './../components/Spinner';
import Story from './../components/Story';
import PropTypes from 'prop-types';
import * as actions from './../actions/StoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StoryPage extends React.Component {

    showStory() {
        let story = this.props.data;

        if (this.props.fetched && !this.props.fetching && story) 
            return <Story story={story}/>; 
        else if (!this.props.fetched && !this.props.fetching && this.props.error == null)
            this.props.actions.fetchStory(this.props.match.params.id);
        else if (!this.props.fetched && this.props.fetching)
            return <Spinner />;
        else if (!this.props.fetched && !this.props.fetching && this.props.error != null)
            alert(this.props.error)
        else
            console.log("I dont even know what is going on anymore...")
    }
    
    render() {
        return (
            <div className="row">
                {this.showStory()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.story)
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
