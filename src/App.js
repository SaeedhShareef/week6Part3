import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from "./AddTodo"

class App extends Component{
        state ={
          todos: [
            {id: 1, content: 'finish Sololearn'},
            {id: 2, content: 'finish packing!'},
            {id: 3, content: 'cry.'},
            {id: 4, content: 'finish un-packing!'},

          ]
        }
  
          deleteTodos = (id) => {
            // console.log(id)
const newTodos = this.state.todos.filter( todo => {
  return todo.id !== id
})
      this.setState({
        todos : newTodos
      })
          }
        addTodo = (todo) => {
          // console.log(todo)
          todo.id = Math.random()
          let todos = [...this.state.todos, todo];

          this.setState({
            todos : todos
          })
        }
  
  render() {
    return (
<div className='todo-app container'>
      <h1 className='center blue-text'>Todos</h1>
      <Todos todos={this.state.todos} deleteTodos = {this.deleteTodos} />
      <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
