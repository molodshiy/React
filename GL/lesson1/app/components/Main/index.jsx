import React, { Component } from 'react';
import styles from './styles.js';
import stylesGlobal from './styles.css';
import Button from './Button.jsx';

class Application extends Component {

    constructor() {
        super();

        this.state = {
            counter: 1
        };
    }

    onNameChange(newCounter) {
        this.setState({counter: newCounter || ''});
    }

    render() {
        return (
            <div>
                <div className="component" style={styles.primary}>Counter App = {this.state.counter}</div>
                <Button onClick={this.onNameChange.bind(this)} readOnly={false}></Button>
            </div>
        );
    }
}

export default Application;