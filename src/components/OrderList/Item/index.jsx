import React from 'react'

import './style.css'

class ListItem extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      commentState: 2 // commentState  0-未评价 1-评价中 2-已评价
    }
  }

  componentDidMount () {
    // 将状态维护到 state 中
    this.setState({
      commentState: +this.props.data.commentState
    })
  }
  showComment () {
    // 显示输入框
    this.setState({
      commentState: 1
    })
  }
  submitComment () {
    // 获取操作函数
    const submitComment = this.props.submitComment
    // 获取id
    const id = this.props.data.id
    // 获取评价内容
    const commentText = this.refs.commentText
    const value = commentText.value.trim()
    if (!value) {
      return
    }

    // 执行数据提交
    submitComment(id, value, this.commentOk)
  }
  commentOk () {
    // 已经评价，修改状态
    this.setState({
      commentState: 2
    })
  }
  hideComment () {
    // 隐藏输入框
    this.setState({
      commentState: 0
    })
  }
  render () {
    const data = this.props.data

    return (
      <div className='order-item-container'>
        <div className='clear-fix'>
          <div className='order-item-img float-left'>
            <img alt={data.title} src={data.img} />
          </div>
          <div className='order-item-comment float-right'>
            {this.state.commentState === 0
              ? <button className='btn' onClick={this.showComment.bind(this)}>
                  评价
                </button>
              : this.state.commentState === 1
                  ? ''
                  : <button className='btn unseleted-btn'>已评价</button>}
          </div>
          <div className='order-item-content'>
            <span>商户：{data.title}</span>
            <span>数量：{data.count}</span>
            <span>价格：￥{data.price}</span>
          </div>
        </div>
        {// “评价中”才会显示输入框
        this.state.commentState === 1
          ? <div className='comment-text-container'>
            <textarea
              style={{ width: '100%', height: '80px' }}
              className='comment-text'
              ref='commentText'
              />
            <button className='btn' onClick={this.submitComment.bind(this)}>
                提交
              </button>
              &nbsp;
            <button
              className='btn unseleted-btn'
              onClick={this.hideComment.bind(this)}
              >
                取消
              </button>
          </div>
          : ''}
      </div>
    )
  }
}

export default ListItem
