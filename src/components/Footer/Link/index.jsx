import React from 'react'

export default class Link extends React.Component {
  constructor (props) {
    super(props)
    this.clickHandle = this.clickHandle.bind(this)
  }

  clickHandle (e) {
    this.props.onClick(e)
  }
  render () {
    const active = this.props.active
    const children = this.props.children
    if (active) {
      return <span>{children}</span>
    }
    return <a onClick={this.clickHandle}>{children}</a>
  }
}
