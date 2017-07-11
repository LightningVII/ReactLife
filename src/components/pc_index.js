import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Route} from 'react-router-dom'
import PCNewsDetails from './pc_news_details';
import PCNewsLists from './pc_news_lists';
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
		render() {
				return (
						<div>
								<PCHeader/>
								<div>
										<Route exact path="/" component={PCNewsContainer}></Route>
										<Route path="/lists" component={PCNewsLists}></Route>
										<Route path="/details" component={PCNewsDetails}></Route>
										{/*<Route exact path="/lists/:uniquekey" component={PCNewsLists}></Route>*/}
										{/*<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>*/}
								</div>
								<PCFooter/>
						</div>
				);
		};
}
