import React from 'react';


class TodoForm extends React.Component {

   render() {
      return (
         <div>
         	<form onSubmit={this.props.frmsmt}>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Add New To-Do</label>
              <input name="taskName" placeholder="Enter new task" onKeyDown={this.props.hre} />
              </div>
              <button type="submit">Add</button>
            </form>
            <p>{this.props.err}</p>
        </div>
      )
   }
}

export default TodoForm;