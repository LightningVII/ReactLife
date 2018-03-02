import React from 'react'

import FilterLink from '../../containers/FilterLink'
import './style.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        过滤条件：&nbsp;
        <FilterLink filter='SHOW_ALL'>ALL</FilterLink>&nbsp;&nbsp;
        <FilterLink filter='SHOW_COMPLETED'>COMPLETED</FilterLink>&nbsp;&nbsp;
        <FilterLink filter='SHOW_ACTIVE'>ACTIVE</FilterLink>
      </div>
    )
  }
}
