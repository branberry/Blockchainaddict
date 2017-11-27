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
  /*
    -- This is the function that is being called when the delete button is clicked.  This is acting as a event handler for the even onClick for button.
    -- It takes index in as a parameter and index is used to pick out the index that is trying to remove

    Documentation on filter:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  */
  handleRemoveTodo(index) {
    this.setState({
      // the function creates a new array and takes in a function as an argument.  The value i is the index it is currently at.
      todos: this.state.todos.filter(function(e, i) {
        // compares the index and returns only when the statement is true.  When true, it returns the index since those are not the ones we are trying to remove.  It does NOT remove the index that equals the one we want to remove
        return i !== index;
      })
    })
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
        -- The button tag contains the an event handler attribute called onClick which has the method named this.handleRemoveTodo.bind(this, index) to make this context available as the index
      */
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span> </h4>
        <ul className = "list_group">
          {this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle}<small><span className="label label-info">{todo.todoPriority}</span></small></h4>
              <p><span className="glyphicon glyphicon-user"> {todo.todoResponsible}</span></p>

              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash" onClick={this.handleRemoveTodo.bind(this, index)}> Delete</span></button>
            </li>
          )}
        </ul>
      </div>

    );
  }
}

/*
  This class will handle the information the user inputs.
  this.state will take in the values we want to modify in each todo object.
*/
class TodoInput extends Component {
    constructor(props){
      super(props);
      /*
        We want to take all values from each todo object so we can manipulate each one
      */
      this.state = {
        todoTitle: '',
        todoResponsible: '',
        todoDescription: '',
        todoPriority: 'Lowest'
      };
    }
    /*
      In this render function, we are creating the form to input the user information for todos.
      The todos will be handled when the onSubmit event is registered by calling the function handleSubmit which
      has not been created yet.
    */
    render(){
      return(
        <div>
          <h4>Add New Element</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTodoTitle" className="col-sm-2 control-label"></label>
            </div>
          </form>
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
