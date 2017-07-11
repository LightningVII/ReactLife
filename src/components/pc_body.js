import React from 'react';
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom'
import PCNewsDetails from './pc_news_details';
import PCNewsLists from './pc_news_lists';
import PCNewsContainer from './pc_newscontainer';
export default class PCBody extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <div>
                        <Route exact path="/" component={PCNewsContainer}></Route>
                        <Route path="/lists/:uniquekey" component={PCNewsLists}></Route>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
                    </div>
                </Router>
            </div>
        );
    };
}
