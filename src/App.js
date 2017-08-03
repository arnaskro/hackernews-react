import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './reducers/';
import css from './App.scss';
import TopStories from './containers/TopStories';
import StoryPage from './containers/StoryPage';
import NoMatch from './containers/NoMatch';
import { BrowserRouter, Route, Link, Switch }  from 'react-router-dom';
import logo from './images/logo.png'

class App extends React.Component {
    render() {
        console.log(logo)
        return (
            <BrowserRouter>
                <div>
                    <br />
                    <div className="ui stackalbe container menu">
                        <div className="item">
                            <img src={"." + logo} />
                        </div>
                        <Link to={'/'} className="item active">Stories</Link>
                        {/* <a className="item">News</a>
                        <a className="item">Comments</a> */}
                    </div>
                    <div className="ui container main-content">
                        <Switch>
                            <Route exact path="/" component={TopStories} />
                            <Route exact path="/story/:id" component={StoryPage} />
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);