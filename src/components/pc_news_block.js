import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom'
export default class PCNewsBlock extends React.Component {
		constructor() {
        super();
        this.state = {
            news: ''
        };
    };
    fetchData(type) {
        fetch("http://wangyi.butterfly.mopaasapp.com/news/api?type=" + type + "&page=1&limit=" + this.props.count).then(response => {
            if (response.ok)
                return response.json()
        }).then(json => {
            console.log(json)
            this.setState({ news: json.list })
        });
    };
    componentDidMount() {
        if (!this.props.type) 
            return
        this.fetchData(this.props.type)
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.type === this.props.type) 
            return
        this.fetchData(nextProps.type)
    };
		render() {
				const {news} = this.state;
				const newsList = news.length
						? news.map((newsItem, index) => (
								<li key={index}>
										<Link to={`/details/${newsItem.id}`}>
												{newsItem.title}
										</Link>
								</li>
						))
						: '没有加载到任何新闻';
				return (
						<div className="topNewsList" style={this.props.bodyStyle}>
								<Card>
										<ul>
												{newsList}
										</ul>
								</Card>
						</div>
				);
		};
}