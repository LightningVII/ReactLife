import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class LoadMore extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadMoreHandle = this.loadMoreHandle.bind(this)
  }

  loadMoreHandle(){
    console.log(this.props)
    this.props.loadMoreFn()
  }

  componentDidMount() {
    window.addEventListener('scroll', function(){
      console.log(123)
    }.bind(this), false)
  }

  render() {
    console.log(this.props.isLoadingMore)
    return (
        <div className="load-more">
            {
              this.props.isLoadingMore 
              ? <span>加载中...</span>
              : <span onClick={this.loadMoreHandle}>加载更多</span>
            }
        </div>
    )
  }
}

export default LoadMore

