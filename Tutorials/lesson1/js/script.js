/**
 * Created by ivan.datsiv on 8/18/2016.
 */

var Button = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.increment);
    },
    render: function () {
        return (
            <button onClick={this.localHandleClick}>+{this.props.increment}</button>
        )
    }
});

var Result = React.createClass({
    render: function () {
        return (
            <div>{this.props.localCounter}</div>
        )
    }
})

var Main = React.createClass({
    getInitialState: function () {
        return {counter: 0};
    },
    handleClick: function (increment) {
        this.setState({counter: this.state.counter + increment});
    },
    render: function () {
        return (
            <div>
                <Button localHandleClick={this.handleClick} increment={1}/>
                <Button localHandleClick={this.handleClick} increment={5}/>
                <Button localHandleClick={this.handleClick} increment={10}/>
                <Button localHandleClick={this.handleClick} increment={100}/>
                <Result localCounter={this.state.counter}/>
            </div>
        )
    }
})

ReactDOM.render(<Main />, document.getElementById("root"));


/*
 var Button = React.createClass({
 getInitialState: function() {
 return {counter: 0};
 },
 handleClick: function() {
 this.setState({counter: this.state.counter+1});
 },

 render: function() {
 return (
 React.createElement("button", null, this.state.counter)
 )
 }
 });

 ReactDOM.render(React.createElement(Button, null), document.getElementById("root"));*/
