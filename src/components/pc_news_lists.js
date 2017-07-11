import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCList from './pc_list';
import PCNewsImageBlock from './pc_news_image_block';
import {Route} from 'react-router-dom'
// import CommonComments from './common_comments';
export default class PCNewsDetails extends React.Component {
  render() {
    const match = this.props.match;
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={14}>
          <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
          )}/>
          <Route path={`${match.url}/:topicId`} component={PCList}/>
            
            {/*<hr/> */}
            {/*<CommonComments uniquekey={this.props.params.id}/>*/}
          </Col>
          <Col span={6}>
            <PCNewsImageBlock
              count={4}
              type="sport"
              width="100%"
              cardTitle="相关新闻"
              imageWidth="150px"/>
          </Col>
          <Col span={2}></Col>
        </Row>

        <BackTop/>
      </div>
    );
  };
}