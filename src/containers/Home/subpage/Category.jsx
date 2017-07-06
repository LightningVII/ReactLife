import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Category from '../../../components/Category'

class Brands extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }

  async contributePost() {
      try {
          const result = await fetch("/api/ad");
          const data = await result.json()
          this.setState({"data": data.result})
      } catch (err) {
          console.error('ES7 Async/products >>>', err);
      }
  }
  componentDidMount() {
    this.contributePost();
  }
  render() {
    return (
      <div>
        {/*Category {this.state.data.length}*/}
        <Category data={this.state.data}></Category>
      </div>
    )
  }
}

export default Brands