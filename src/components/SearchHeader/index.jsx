import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from '../SearchInput'
import '../../assets/fonts/style.css'
import './style.css'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-brand21"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
                </div>
            </div>
        )
    }
    clickHandle() {
        this.props.history.push('/')
    }
    enterHandle(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchHeader