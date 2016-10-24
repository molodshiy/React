/**
 * Created by ivan.datsiv on 10/17/2016.
 */

var Input = React.createClass({
    render: function () {
        return (
            <input type="text" onChange={this.props.localOnChange}/>
        )
    }
});

var Action = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.localAction);
    },
    render: function () {
        return (
            <input type="button" onClick={this.localHandleClick} value={this.props.localAction}/>
        )
    }
});

var Main = React.createClass({
        getInitialState: function () {
            return {
                value: 0,
                action: "+",
                value1: 0,
                result: 0
            };
        },

        handleClickResult: function () {
            var res = 0;
            switch (this.state.action) {
                case "+":
                    res = parseInt(this.state.value) + parseInt(this.state.value1);
                    break;
                case "-":
                    res = this.state.value - this.state.value1;
                    break;
                case "/":
                    res = this.state.value / this.state.value1;
                    break;
                case "*":
                    res = this.state.value * this.state.value1;
                    break;
            }
            this.setState({
                result: res
            })
        },

        handleClick: function (localAction) {
            console.log(localAction);
            this.setState({action: localAction})
        },

        onChange: function (event) {
            this.setState({value: event.target.value})
        },

        onChange1: function (event) {
            this.setState({value1: event.target.value})
        },


        render: function () {
            return (
                <div>
                    <Input localOnChange={this.onChange}/>
                    <Action localHandleClick={this.handleClick} localAction={"+"}/>
                    <Action localHandleClick={this.handleClick} localAction={"-"}/>
                    <Action localHandleClick={this.handleClick} localAction={"/"}/>
                    <Action localHandleClick={this.handleClick} localAction={"*"}/>
                    <Input localOnChange={this.onChange1}/>
                    <Action localHandleClick={this.handleClickResult} localAction={"="}/>

                    <h3>{this.state.result}</h3>
                </div>
            )
        }
    })
    ;

ReactDOM.render(<Main />, document.getElementById("calc"));