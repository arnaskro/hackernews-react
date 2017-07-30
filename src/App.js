import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './reducers/';
import css from './App.scss';
import TopStories from './containers/TopStories';
import { BrowserRouter, Route, Link }  from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <br />
                    <div className="text-center">
                        <Link to={'/'} className="btn btn-link">Home</Link>
                    </div>
                    <div className="main-content">
                        <Route exact path="/" render={(props) => {
                            return (
                                <div>
                                    <TopStories />
                                </div>
                            )
                        }} />
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