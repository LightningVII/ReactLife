import React from 'react';
import {Card} from 'antd';
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: '',
      title: ''
    };
  };
  fetchData(uniquekey) {
    fetch("http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId=" + uniquekey)
      .then(response => response.json())
      .then(json => {
        this.setState({newsItem: json});
        document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
      });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.uniquekey === this.props.match.params.uniquekey) {
      return
    }
    this.fetchData(nextProps.match.params.uniquekey)
  };
  componentDidMount() {
    this.fetchData(this.props.match.params.uniquekey)
  };
  createMarkup() {
    return {__html: this.state.newsItem.content};
  };
  render() {
    return (
      <Card style={{
        marginRight: "20px"
      }}>
        <h2>{this.state.newsItem.title}</h2>
        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
      </Card>
    )
  }
}
