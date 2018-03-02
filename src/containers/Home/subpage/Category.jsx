import React from 'react'
import Category from '../../../components/Category'

class Brands extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      data: []
    }
  }

  async contributePost () {
    try {
      const result = await fetch('/api/ad')
      const data = await result.json()
      this.setState({ data: data.result })
    } catch (err) {
      console.error('ES7 Async/products >>>', err)
    }
  }
  componentDidMount () {
    this.contributePost()
  }
  render () {
    return (
      <div>
        {/* Category {this.state.data.length} */}
        <Category data={this.state.data} />
      </div>
    )
  }
}

export default Brands
