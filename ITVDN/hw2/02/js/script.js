/**
 * Created by ivan.datsiv on 11/28/2016.
 */

var Button = React.createClass({

    render: function () {
        return (
            <button onClick={this.props.localOnClick}>{this.props.children}</button>
        )
    }
});

var Timer = React.createClass({
    getInitialState: function () {
        return {
            activeButtonName: "Start",
            miliseconds: 0,
            seconds: 0,
            minutes: 0,
            timerId: 0,
            isPaused: false
        };
    },


    tick: function () {

        if (this.state.miliseconds > 999) {
            this.setState({
                seconds: this.state.seconds + 1,
                miliseconds: 0
            });
        };

        if (this.state.seconds > 59) {
            this.setState({
                minutes: this.state.minutes + 1,
                seconds: 0
            });
        };

        this.setState({miliseconds: this.state.miliseconds + 10});
    },

    handleOnClick: function () {
        if (!this.state.isPaused) {
            this.setState({timerId: setInterval(this.tick, 10)});
            this.state.isPaused = true;
            this.setState({activeButtonName: "Pause"});
        } else if (this.state.isPaused) {
            clearInterval(this.state.timerId);
            this.state.isPaused = false;
            this.setState({activeButtonName: "Start"});
        }
    },

    handleOnClickDelete: function () {
        this.state.isPaused = false;
        clearInterval(this.state.timerId);
        this.setState({
            miliseconds: 0,
            seconds: 0,
            minutes: 0
        });
    },

    render: function () {
        return (
            <div>
                <h4>{this.state.minutes}:{this.state.seconds}:{this.state.miliseconds} </h4>
                <Button localOnClick={this.handleOnClick}>{this.state.activeButtonName}</Button>
                <Button localOnClick={this.handleOnClickDelete}>Delete</Button>
            </div>
        );
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById('mount-point')
);