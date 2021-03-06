import React from 'react';
import {Row, Col, Tabs, Card, Carousel} from 'antd';
import logo from '../../logo.svg';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
import carousel_1 from '../../assets/images/carousel_1.jpg'
import carousel_2 from '../../assets/images/carousel_2.jpg'
import carousel_3 from '../../assets/images/carousel_3.jpg'
import carousel_4 from '../../assets/images/carousel_4.jpg'
import '../../App.css';
export default class PCNewsContainer extends React.Component {
		render() {
				const settings = {
						dots: true,
						infinite: true,
						speed: 500,
						slidesToShow: 1,
						autoplay: true
				};
				return (
						<div>
								<Row>
										<Col span={24}>
												<div className="App-header">
														<img src={logo} className="App-logo" alt="logo"/>
														<h2>Welcome to React</h2>
												</div>
										</Col>
								</Row>
								<Row>
										<Col span={2}></Col>
										<Col span={20} className="container">
												<div className="leftContainer">
														<div className="carousel">
																<Card>
																		<Carousel {...settings}>
																				<div><img src={carousel_1} alt="carousel_1"/></div>
																				<div><img src={carousel_2} alt="carousel_2"/></div>
																				<div><img src={carousel_3} alt="carousel_3"/></div>
																				<div><img src={carousel_4} alt="carousel_4"/></div>
																		</Carousel>
																</Card>
														</div>
														<PCNewsImageBlock
																count={6}
																type="war"
																width="400px"
																cartTitle="国际头条"
																imageWidth="112px"/>
												</div>
												<Tabs className="tabs_news">
														<TabPane tab="头条新闻" key="1">
																<PCNewsBlock count={21} type="travel" width="100%" bordered="false"/>
														</TabPane>
														<TabPane tab="国际" key="2">
																<PCNewsBlock count={20} type="sport" width="100%" bordered="false"/>
														</TabPane>
												</Tabs>
												<Tabs className="tabs_product">
														<TabPane tab="ReactNews 产品" key="1">
																<PCProduct/>
														</TabPane>
												</Tabs>
												<div>
														<PCNewsImageBlock
																count={8}
																type="money"
																width="100%"
																cartTitle="国内新闻"
																imageWidth="132px"/>
														<PCNewsImageBlock
																count={16}
																type="tech"
																width="100%"
																cartTitle="娱乐新闻"
																imageWidth="132px"/>
												</div>
										</Col>
										<Col span={2}></Col>
								</Row>
						</div>
				);
		};
}
