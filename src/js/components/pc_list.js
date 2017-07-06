import React from 'react';
import PCNewsBlock from './pc_news_block';
export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      topicId: ''
    };
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.topicId === this.props.match.params.topicId) {
      return
    }
    this.setState({topicId: nextProps.match.params.topicId});
  };
  componentDidMount() {
    this.setState({topicId: this.props.match.params.topicId});
  };
  render() {
    return (
      <div>
        <PCNewsBlock
          bodyStyle={{
          width: "100%",
          paddingRight: "20px"
        }}
          count={21}
          type={this.state.topicId}
          bordered="false"/>
      </div>
    )
  }
}
