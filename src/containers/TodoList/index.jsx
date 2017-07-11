import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AddTodo from './subpage/AddTodo'
import VisibleTodoList from './subpage/VisibleTodoList'
import Footer from '../../components/Footer'

class TodoList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <AddTodo></AddTodo>
                <VisibleTodoList></VisibleTodoList>
                <Footer></Footer>
            </div>
        )
    }
}

export default TodoList