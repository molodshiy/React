import React, { Component } from 'react';

class ComponentB extends Component {
    render() {
        return (
            <div className="CompB">
                {this.props.children}
                <div>{this.props.value}</div>
                <h3>Title</h3>
            </div>
        );
    }
}


export default ComponentB;
