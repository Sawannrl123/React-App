import React from 'react';

var todos = JSON.parse(localStorage.getItem('todos')) || [];

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
      this.state = {Todos: [], id: parseInt(1), error: "", activeClick: false, completedClick: false, editing: false}
	}



   postNewTask(newTask) {
      if(newTask != "") {
         var task = {'id': this.state.id , 'work': newTask.trim(), 'completed': false};
         this.state.Todos.push(task);
         this.setState({Todos: this.state.Todos});
         this.setState({id: this.state.id + 1});

      }
      else {
         this.setState({error: "Please enter some text"});
      }
   }

   handleChange(todo, index) {
      todo.completed = !todo.completed;
      this.state.Todos[index].completed = todo.completed;
      this.setState({Todos: this.state.Todos});
   }

   handleError() {
      this.setState({error: ""});
   }

   removeTodo(todo) {
      this.state.Todos.splice(todo, 1);
      this.setState({Todos: this.state.Todos});
   }

   toggleAll(e) {
      console.log();
      if(e.target.checked) {
         this.state.Todos.map(function(todo){
            todo.completed = true;
         });
      }
      else {
         this.state.Todos.map(function(todo){
            todo.completed = false;
         });
      }
      this.setState({Todos: this.state.Todos});
   }

   removeCompleted() {
      var temp=[];
      this.state.Todos.map(function(todo){
         if(!todo.completed) {
            temp.push(todo);
         }
      })
      this.setState({Todos: temp});
   }

   editList(todo, index) {
      console.log(todo);
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
      this.state.Todos.map(function(todo){
         if(todo.completed == false) {
            remaining++;
         }
         else {
            active++;
         }
      })
      return (
      	<div className="todo-wrapper">
            <form onSubmit={evt => {
               evt.preventDefault();
               this.postNewTask(evt.target.taskName.value);
               evt.target.taskName.value = "";
              }
             }>
              <div className="todo-form form-group">
              <label htmlFor="exampleInputEmail1">Add New To-Do</label>
              <input name="taskName" className="form-control" placeholder="Enter new task" onKeyDown={this.handleError.bind(this)} />
              </div>
            </form>
            <p>{this.state.error}</p>
            {
               this.state.Todos.length > 0 
               ?<div>
               <div className="custom-checkbox">
                  <input type="checkbox" id="toggleAll" onChange={this.toggleAll.bind(this)} />
                  <label htmlFor="toggleAll">Toggle All Task</label>
                  <div className="checked"></div>
               </div>
               <div className="todo-body">
                  <h3>Your Pending Tasks</h3> 
                  <ul>
                     
                     {
                        this.state.Todos.map(function(Todo, i){
                           if(this.state.activeClick && !Todo.completed) {

                              return(
                                 <li key={Todo.id}>
                                    <div className="custom-checkbox">
                                       <input type="checkbox" onChange={this.handleChange.bind(this, Todo, i)} defaultChecked={Todo.completed} checked={Todo.completed} id={Todo.id} />
                                       <label htmlFor={Todo.id} className={Todo.completed ? 'line-through' : ''}>{Todo.work}</label>
                                       <div className="checked"></div>
                                    </div>
                                    <span className="icon-close" onClick={this.removeTodo.bind(this, i)}></span>
                                 </li>
                              )
                           }
                           else if(this.state.completedClick && Todo.completed){
                              return(
                                 <li key={Todo.id}>
                                    <div className="custom-checkbox">
                                       <input type="checkbox" onChange={this.handleChange.bind(this, Todo, i)} defaultChecked={Todo.completed} checked={Todo.completed} id={Todo.id} />
                                       <label htmlFor={Todo.id} className={Todo.completed ? 'line-through' : ''}>{Todo.work}</label>
                                       <div className="checked"></div>
                                    </div>
                                    <span className="icon-close" onClick={this.removeTodo.bind(this, i)}></span>
                                 </li>
                              )
                           }
                           else if(!this.state.completedClick && !this.state.activeClick) {
                              return(
                                 <li key={Todo.id}>
                                    <div className="custom-checkbox">
                                       <input type="checkbox" onChange={this.handleChange.bind(this, Todo, i)} defaultChecked={Todo.completed} checked={Todo.completed} id={Todo.id} />
                                       <label htmlFor={Todo.id} className={Todo.completed ? 'line-through' : ''}>{Todo.work}</label>
                                       <div className="checked"></div>
                                    </div>
                                    <span className="icon-close" onClick={this.removeTodo.bind(this, i)}></span>
                                 </li>
                              )
                           }
                        }, this)
                     }
                  </ul>
               </div>
               <div>
                  {
                     (remaining != 0)
                     ?<p>{remaining} {remaining > 1 ? 'items' : 'item'} left</p>
                     :<p></p>
                  }
                  
                  <div className="button-group">
                     <span onClick={this.allList.bind(this)} className={this.state.activeClick==false && this.state.completedClick==false ? 'active-btn' : ''}>All</span>
                     <span onClick={this.activeList.bind(this)} className={this.state.activeClick==true && this.state.completedClick==false ? 'active-btn' : ''}>Active</span>
                     <span onClick={this.completedList.bind(this)} className={this.state.activeClick==false && this.state.completedClick==true ? 'active-btn' : ''}>Completed</span>
                     {
                        (active != 0)
                        ?<span onClick={this.removeCompleted.bind(this)}>Clear Completed</span>
                        :''
                     }
                  </div>
                  
               </div>
               </div>
               :<h3>Enter Some Text</h3>
            }
            
            
      	</div>
      );
   }
}

export default TodoApp;