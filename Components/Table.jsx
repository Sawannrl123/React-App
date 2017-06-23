import React from 'react';
import { Table, Button } from 'react-bootstrap';


class ScoreTable extends React.Component {
	constructor(props) {
		super(props);
	}


   getAverage(scores) {
    var total=0;
    for(var i=0; i < scores.length; i++) {
      total += scores[i];
    }

    return total / scores.length;
   }

   render() {
      var key = Object.keys(this.props.data);
      var mainTopic = key.map(function(item, j){
         var childTopics = this.props.data[item].childTopics;
         var a = [];
         var b = [];
         var c = [];
         childTopics.map(function(x){
            a.push(x.scores.A);
            b.push(x.scores.B);
            c.push(x.scores.C);
         })
         return(
               <tbody key = {j}>
                  <tr>
                     <td>{this.props.data[item].id}</td>
                     <td>{item}</td>
                     <td>{this.getAverage(a)}</td>
                     <td>{this.getAverage(b)}</td>
                     <td>{this.getAverage(c)}</td>
                  </tr>
                  {childTopics.map(function(childNode, k){
                     return(
                        <tr key = {k}>
                           <td>{childNode.id}</td>
                           <td>{childNode.name}</td>
                           <td>{childNode.scores.A}</td>
                           <td>{childNode.scores.B}</td>
                           <td>{childNode.scores.C}</td>
                        </tr>
                     );
                  }, this)}
               </tbody>
         );
         
         
      }, this)
      return (
         <div className="score-table">
         	<Table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     {this.props.columnNames.map(function(scoreColumn, l){
                        return(
                        <th key = {l}>{scoreColumn}</th>

                        );
                     })}
                  </tr>

               </thead>
               {mainTopic} 
            </Table>
            <Button className="btn-primary">Click Me</Button>
         </div>
      );
   }
}

export default ScoreTable;