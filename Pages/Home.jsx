import React from 'react';
import ScoreTable from '../Components/Table.jsx';
import Slider from '../Components/Slider.jsx';
import data from '../data'

class Home extends React.Component {
	constructor(props) {
		super(props);
		
	}

   render() {
      return (
      	<div>
      		<Slider></Slider>
      		<ScoreTable data = {data} columnNames = {[ "A", "B", "C" ]}></ScoreTable>
      	</div>
      );
   }
}

export default Home;