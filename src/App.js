import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
  An array with hardcoded todo values which are objects.
*/
var todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Brandon',
    todoDesription: 'my first todo description',
    todoPriority: 'low'
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Brandon',
    todoDesription: 'my second todo description',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Brandon',
    todoDesription: 'my third todo description',
    todoPriority: 'high'
  }
]
class App extends Component {
  /*
    Props is the object that contains the internal state of the component.
    As a general rule, the props parameter should be passed to the parent constructor
    which is done by calling super() with props as an argument.
  */
  constructor(props) {
    super(props);
    /*
      This is accessing the state object where we can load the todos array so it can be accessed within this state.
      Assigns an intial state.
    */
    this.state = {
      // this is the array with the todos that we want for out initial component state
      todos
    };
  }
  render() {
    return (
      /*
        -- This is displaying the elements in the todos array. This.state.todos is accessing the array.  The .length returns the number of elements in the array.  The className, badge in span, gives
       the element the appearance.
        -- I am using an unordered list (<ul>) to display each individual element.
        -- This.state.todos.map() takes in an arrow function with the todo object and the index of that object as parameters for the function.
        -- The key inside the li tag is {index} which refers to the object's index
        -- The h4 tag uses list-group-item-heading as the style and inside of the h4 tag, the {todo.todoTitle} is using the object in the todo array and then acessing the value associated with the todoTitle key
      */
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span> </h4>
        <ul className = "list_group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}  <small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"> {todo.todoResponsible}</span></p>

              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"> Delete</span></button>
            </li>
          )}
        </ul>
      </div>

    );
  }
}

export default App;
/*
 ---- Code for the original display ----
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Life Artificer</h1>
    <h2 className="App-subtitle">Design the life you want to live</h2><br/>
  </header>

</div>
*/
