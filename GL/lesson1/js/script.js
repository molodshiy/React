/**
 * Created by ivan.datsiv on 9/6/2016.
 */
var User = React.createClass({
    render: function () {
        return (
            <div>{this.props.localCounter}</div>
        )
    }
});

var ButtonPre = React.createClass({
    render: function () {
        return (
            <button onClick={this.props.localHandleClickPre}>Pre</button>
        )
    }
});

var ButtonNext = React.createClass({
    render: function () {
        return (
            <button onClick={this.props.localHandleClickNext}>Next</button>
        )
    }
});

var Main = React.createClass({
    getInitialState: function () {
        return {counter: 0};
    },

    handleClickPre: function () {
        this.setState({counter: this.state.counter - 1});
    },

    handleClickNext: function () {
        this.setState({counter: this.state.counter + 1});
    },

    render: function () {
        return (
            <div>
                <ButtonPre localHandleClickPre={this.handleClickPre} />
                <ButtonNext localHandleClickNext={this.handleClickNext} />

                <User localCounter={this.state.counter} />
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById("user"));