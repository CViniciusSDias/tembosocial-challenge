import React, { Component } from 'react';
import './ChartIndicators.css';

export class ChartIndicators extends Component {
    render() {
        return (
            <div className="indicators">
                <div className="bars" height={this.props.height}>
                    <div className="br"></div>
                    <div className="br"></div>
                    <div className="br"></div>
                    <div className="br"></div>
                    <div className="br"></div>
                </div>
                <div className="text">
                    <p>100%</p>
                    <p>50%</p>
                    <p>0%</p>
                    <p>50%</p>
                    <p>100%</p>
                </div>
            </div>
        );
    }
}
