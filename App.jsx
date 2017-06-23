import React from 'react';
import NavBar from './Components/NavBar.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		
	}

   render() {
      return (
      	<div className="react-app">
      		<NavBar></NavBar>
      		{this.props.children}
      	</div>
      );
   }
}

export default App;