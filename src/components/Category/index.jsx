import React from 'react'

import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom';

import '../../assets/fonts/style.css'
import './style.css'
class Gategory extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            index: 0
        }
    }
    componentDidMount() {}
    render() {
        const settings = {
            swipeOptions: {
                // auto: 2500,
                callback: function (index) {
                    // 更新当前轮播图的index
                    this.setState({index: index});
                }.bind(this)
            },
            key: this.props.data.length
        };
        return (
            <div id="home-category">
                <ReactSwipe {...settings}>
                    {this
                        .props
                        .data
                        .map((list, index) => {
                            return <div key={index} className="carousel-item">
                                <ul className="clear-fix">
                                    {list
                                        .items
                                        .map((item, i) => {
                                            return <Link key={i} to={item.link}>
                                                <li className="float-left">
                                                    <div className={"icon " + item.icon}></div>
                                                    {item.text}
                                                </li>
                                            </Link>
                                        })
                                    }
                                </ul>
                            </div>
                        })}
                </ReactSwipe>
            </div>
        )
    }
}
export default Gategory