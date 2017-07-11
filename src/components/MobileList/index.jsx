import React from 'react';
import {Row, Col} from 'antd';
import {Link} from 'react-router-dom'
export default class MobileList extends React.Component {
		constructor() {
				super();
				this.state = {
						news: ''
				};
		}
		componentWillMount() {
				fetch("http://wangyi.butterfly.mopaasapp.com/news/api?type=sport&page=1&limit=24").then(response => {
						if (response.ok) {
								return response.json()
						}
				}).then(json => {
						console.log(json)
						this.setState({news: json.list})
				});
				// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
				// this.props.type + "&count=" + this.props.count, myFetchOptions).then(response
				// => response.json()).then(json => this.setState({news: json}));
		};
		render() {
				const {news} = this.state;
				const newsList = news.length
						? news.map((newsItem, index) => (
								<section key={index} className="m_article list-item special_section clearfix">
										<Link to={`details/${newsItem.id}`}>
												<div className="m_article_img">
														<img src={newsItem.imgurl} alt={newsItem.title}/>
												</div>
												<div className="m_article_info">
														<div className="m_article_title">
																<span>{newsItem.title}</span>
														</div>
														<div className="m_article_desc clearfix">
																<div className="m_article_desc_l">
																		<span className="m_article_channel">{newsItem.realtype}</span>
																		<span className="m_article_time">{newsItem.date}</span>
																</div>
														</div>
												</div>
										</Link>
								</section>
						))
						: '没有加载到任何新闻';
				return (
						<div>
								<Row>
										<Col span={24}>
												{newsList}
										</Col>
								</Row>
						</div>
				);
		};
}
