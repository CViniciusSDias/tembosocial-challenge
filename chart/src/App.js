import React, { Component } from 'react';
import './App.css';
import { ChartLine } from './ChartLine/ChartLine';
import { ChartIndicators } from './ChartIndicators/ChartIndicators';

class App extends Component {
  constructor() {
    super();
    
    this.data = [
      {
        prompt: "My issue was resolved in a timely manner",
        data: [ 1, 14, 24, 3, 4 ]
      },
      {
        prompt: "The representative understood me",
        data: [ 0, 3, 23, 15, 10 ]
      },
      {
        prompt: "I would recommend the service to others",
        data: [ 8, 7, 8, 9, 5 ]
      }
     ];
  }

  render() {
    return (
      <div className="App">
        <ChartIndicators />
        {this.data.map(line => 
          <div className="line">
            <div className="data-prompt">
                {line.prompt}
            </div>

            <ChartLine line={line} ref={this.chartLine} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
