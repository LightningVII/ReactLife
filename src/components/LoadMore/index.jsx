import React from 'react'

import './style.css'

class LoadMore extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.loadMoreHandle = this.loadMoreHandle.bind(this)
  }

  loadMoreHandle () {
    this.props.loadMoreFn()
  }

  componentDidMount () {
    const loadMore = this.props.loadMoreFn
    const wrapper = this.refs.wrapper
    let timeoutId
    const callback = () => {
      const top = wrapper.getBoundingClientRect().top
      const windowHeight = window.screen.height
      if (top && top < windowHeight) {
        loadMore()
      }
    }
    window.addEventListener(
      'scroll',
      function () {
        if (this.props.isLoadingMore) {
          return
        }
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(callback, 50)
      }.bind(this),
      false
    )
  }

  render () {
    return (
      <div className='load-more' ref='wrapper'>
        {this.props.isLoadingMore
          ? <span>加载中...</span>
          : <span onClick={this.loadMoreHandle}>加载更多</span>}
      </div>
    )
  }
}

export default LoadMore
