import React from 'react';
import StoryList from './../components/StoryList';
import PropTypes from 'prop-types';
import * as actions from './../actions/TopStoryActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from './../components/Spinner';

class TopStories extends React.Component {

    listStories() {
        let stories = this.props.data;

        if (stories && stories.length > 0) 
            return <StoryList stories={stories} />; 
        else if (!this.props.fetched && !this.props.fetching && this.props.error == null)
            this.props.actions.fetchTopStories();
        else if (!this.props.fetched && this.props.fetching)
            return <Spinner />;
        else if (!this.props.fetched && !this.props.fetching && this.props.error != null)
            alert(this.props.error)
        else if (stories && stories.length == 0)
            return (<p className="text-center">There are no more stories!</p>)
        else
            console.log("I dont even know what is going on anymore...")
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.listStories()}
                </div>
            </div>
        )
    }
}

TopStories.PropTypes = {
    data: PropTypes.array,
    page: PropTypes.number,
    fetchTopStories: PropTypes.func,
    fetched: PropTypes.bool,
    fetching: PropTypes.bool,
    error: PropTypes.any
}

const mapStateToProps = (state) => {
    return {
        data: state.topStories.data,
        page: state.topStories.page,
        fetching: state.topStories.fetching,
        fetched: state.topStories.fetched,
        error: state.topStories.error
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(TopStories);