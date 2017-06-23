import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import TodoApp from './Pages/TodoApp.jsx';
import './less/main.less';

ReactDOM.render((

   <BrowserRouter>
		<div>
			<Route path="/" component={App}/>
			<Route exact path="/" component={Home} />
			<Route path="/Home" component={Home} />
			<Route path="/Contact" component={Contact} />
			<Route path="/TodoApp" component={TodoApp} />
			<Route path="/About" component={About} />
		</div>
    </BrowserRouter>
	
), document.getElementById('app'))