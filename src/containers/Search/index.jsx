import React from 'react'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends React.Component {
  render () {
    const params = this.props.match.params
    return (
      <div>
        <SearchHeader history={this.props.history} title='搜索页面' />
        <SearchList keyword={params.keyword} category={params.category} />
      </div>
    )
  }
}

export default Search
