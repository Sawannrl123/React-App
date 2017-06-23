import React from 'react';


class StatusButton extends React.Component {
   render() {
      return (
      	<div>
	        <button onClick={this.props.all}>All</button>
	        <button onClick={this.props.active}>Active</button>
	        <button onClick={this.props.completed}>Completed</button>
	        {
	            (this.props.pactive != 0)
	            ?<button onClick={this.props.deletecom}>Clear Completed</button>
	            :''
	        }
        </div>
      )
   }
}

export default StatusButton;