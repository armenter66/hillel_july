import { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  componentDidMount() {
    console.log('TodoList component has just been mounted')
  }

  componentDidUpdate() {
    console.log('TodoList has just been updated');
  }

  componentWillUnmount() {
    console.log('TodoList gonna be removed');
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h3>Todos</h3>
        {list.length === 0 && <span>No items added yet</span>}
        {list.length > 0 && (
          <ul>
            {list.map(item => <TodoItem data={item.text} key={item.id} />)}
          </ul>
        )}
      </div>
    );
  }
}