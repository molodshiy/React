/**
 * Created by ivan.datsiv on 9/15/2016.
 */

import React, {Component} from "react";


class Button extends Component {

    onClick(e) {
        if (typeof this.props.onClick === 'function' && !this.props.readOnly) {
            this.props.onClick(e.target.value + 1);
            console.log("onClick");
        }
    }

    render() {
        return (<div>
            <input type="button" value={this.props.value} onChange={this.onClick.bind(this)}/>
        </div>);
    }
}

export default Button;