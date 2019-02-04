import React, { Component } from 'react';
import './ChartLine.css';

export class ChartLine extends Component {
    constructor(props) {
        super(props);

        this.total = this.props.line.data.reduce((previous, current) => {
            return previous + current;
        }, 0);
        this.colors = ['#c51b7d','#de73aa','#d1d1d1','#83b954','#4d9221'];
        this.inputs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];

        this.state = {
            left: 0
        };
    }

    componentDidMount() {
        const left = this.inputs[2].current.offsetWidth / 2 + this.inputs[3].current.offsetWidth + this.inputs[4].current.offsetWidth;
        this.setState({left});
    }

    render() {
        return (
            <div className="items">
                <div className="line-items" style={{left: this.state.left}}>
                    {this.props.line.data.map((stackItem, i) => {
                        return ( stackItem > 0
                            ? <div className="stackItem"
                                    key={i}
                                    ref={this.inputs[i]}
                                    style={{
                                        flexBasis: `${stackItem / this.total * 100}%`,
                                        backgroundColor: this.colors[i]
                                    }}>
                            </div>
                            : null
                        );
                    })}
                </div>
            </div>
        );
    }
}