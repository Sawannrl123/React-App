import React from 'react';
import TodoForm from './TodoForm.jsx';
import TodoItem from './TodoItem.jsx';
import StatusButton from './StatusButton.jsx';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
      	this.state = {todos: this.props.todos, activeClick: false, completedClick: false, error: "", id: parseInt(0)}
	}

	postNewTask(event) {
		event.preventDefault();
		const e = event.nativeEvent;
		const newTask = e.target[0].value;
		if(newTask != "") {
			var todos = this.state.todos;
	         var task = {'id': this.state.id , 'work': newTask.trim(), 'completed': false};
	         todos.push(task);
	         localStorage.setItem('todos', JSON.stringify(todos));
	         this.setState({todos: todos});
	         this.setState({id: this.state.id + 1});
	      }
	      else {
	         this.setState({error: "Please enter some text"});
	      }
		e.target[0].value = "";
   }

   handleError() {
      this.setState({error: ""});
   }
	

	removeTodo(todo) {
       var todos = this.state.todos;
       todos.splice(todo, 1);
       localStorage.setItem('todos', JSON.stringify(todos));
       this.setState({todos: todos});
    }

    handleChange(todo, index) {
	  var todos = this.state.todos;
      todo.completed = !todo.completed;
      todos[index].completed = todo.completed;
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: todos});
    }


	toggleAll(e) {
	  var todos = this.state.todos;
      if(e.target.checked) {
         todos.map(function(todo){
            todo.completed = true;
         });
      }
      else {
         todos.map(function(todo){
            todo.completed = false;
         });
      }
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: todos});
   }

    removeTodo(todo) {
    	var todos = this.state.todos; 
       todos.splice(todo, 1);
       localStorage.setItem('todos', JSON.stringify(todos));
       this.setState({todos: todos});
    }

   removeCompleted() {
      var temp=[];
      var todos= this.state.todos;
      todos.map(function(todo){
         if(!todo.completed) {
            temp.push(todo);
         }
      })
      todos = temp;
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: todos});
   }


	allList() {
      this.setState({activeClick: false});
      this.setState({completedClick: false});
   }
   activeList() {
      this.setState({activeClick: true});
      this.setState({completedClick: false});
   }
   completedList() {
      this.setState({activeClick: false});
      this.setState({completedClick: true});
   }

   render() {
   	var remaining = parseInt(0);
      var active = parseInt(0);
      this.state.todos.map(function(todo){
         if(todo.completed == false) {
            remaining++;
         }
         else {
            active++;
         }
      })
      return (
         <div>
         	<TodoForm hre={this.handleError.bind(this)} err={this.state.error} frmsmt={this.postNewTask.bind(this)} />
         	{
         		this.state.todos.length > 0 
         		?<div>
	         		<div>
	                  <input type="checkbox" id="toggleAll" onChange={this.toggleAll.bind(this)} />
	                  <label htmlFor="toggleAll">Toggle All</label>
	               </div>
	               <div>
		                <h3>Your Pending Tasks</h3> 
		                <ul>
		                	{
		                		this.state.todos.map(function(todo, i) {
		                			return (
		                				<TodoItem key={i} todo={todo} index={i} activeClick={this.state.activeClick} completedClick={this.state.completedClick} hc={this.handleChange.bind(this, todo, i)} rtd={this.removeTodo.bind(this, i)} />
		                			)
		                		}, this)
		                	}
		                </ul>
		            </div>
		            {
	                    (remaining != 0)
	                    ?<p>{remaining} {remaining > 1 ? 'items' : 'item'} left</p>
	                    :''
	                }
	                <StatusButton all={this.allList.bind(this)} active={this.activeList.bind(this)} completed={this.completedList.bind(this)} deletecom={this.removeCompleted.bind(this)} pactive={active} />
		          
	            </div>
         		:<h3>Enter Some Text</h3>
         	}
         </div>
      )
   }
}

export default TodoList;