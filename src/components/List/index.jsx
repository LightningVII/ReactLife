import React from 'react'

import Item from './Item'

class List extends React.Component {
  render () {
    const data = this.props.data
    return (
      <div id='home-list'>
        {data.map((item, index) => {
          return <Item key={index} data={item} />
        })}
      </div>
    )
  }
}

export default List
