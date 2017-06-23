import React from 'react';


class TodoItem extends React.Component {

   render() {
   		//console.log("First" + this.props.activeClick, !this.props.todo.completed + "Second" + this.props.completedClick, this.props.todo.completed + "Third" + this.props.completedClick, this.props.activeClick);
   		if(this.props.activeClick && !this.props.todo.completed) {
   			return (
   				<li key={this.props.todo.id}>
	                <input type="checkbox" onChange={this.props.hc} checked={this.props.todo.completed} id={this.props.todo.id} className={this.props.todo.completed ? 'line-through' : ''}/>
	                <label htmlFor={this.props.todo.id}>{this.props.todo.work}</label>
	                <button onClick={this.props.rtd}>Delete</button>
	             </li>
   			)
       	}
       	else if(this.props.completedClick && this.props.todo.completed){
   			return (
   				<li key={this.props.todo.id}>
	                <input type="checkbox" onChange={this.props.hc} checked={this.props.todo.completed} id={this.props.todo.id} className={this.props.todo.completed ? 'line-through' : ''}/>
	                <label htmlFor={this.props.todo.id}>{this.props.todo.work}</label>
	                <button onClick={this.props.rtd}>Delete</button>
	             </li>
   			)
       	}
       	else if(!this.props.completedClick && !this.props.activeClick){
   			return (
   				<li key={this.props.todo.id}>
	                <input type="checkbox" onChange={this.props.hc} checked={this.props.todo.completed} id={this.props.todo.id} className={this.props.todo.completed ? 'line-through' : ''}/>
	                <label htmlFor={this.props.todo.id}>{this.props.todo.work}</label>
	                <button onClick={this.props.rtd}>Delete</button>
	             </li>
   			)
       	}
   }
}

export default TodoItem;