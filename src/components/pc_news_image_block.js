import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom'
export default class PCNewsImageBlock extends React.Component {
		constructor() {
				super();
				this.state = {
						news: ''
				};
		}
		componentWillMount() {
				fetch("http://wangyi.butterfly.mopaasapp.com/news/api?type=" + this.props.type + "&page=1&limit=" + this.props.count)
						.then(response => response.json())
						.then(json => this.setState({news: json.list}));
		};
		render() {
				const styleImage = {
						display: "block",
						width: this.props.imageWidth,
						height: "90px"
				};
				const styeH3 = {
						width: this.props.imageWidth,
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis"
				};
				const {news} = this.state;
				const newsList = news.length
						? news.map((newsItem, index) => (
								<div key={index} className="imageblock">
										<Link to={`/details/${newsItem.id}`}>
												<div className="custom-image">
														<img alt="" style={styleImage} src={newsItem.imgurl}/>
												</div>
												<div className="custom-card">
														<h3 style={styeH3}>{newsItem.title}</h3>
														<p>{newsItem.time}</p>
												</div>
										</Link>
								</div>
						))
						: '没有加载到任何新闻';
				return (
						<div className="topNewsList" style={{
								width: this.props.width
						}}>
								<Card title={this.props.cartTitle} bordered={true}>
										{newsList}
								</Card>
						</div>
				);
		};
}
