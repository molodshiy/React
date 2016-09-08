/**
 * Created by ivan.datsiv on 9/6/2016.
 */

var User = React.createClass({
    getInitialState: function () {
        return {};
    },
    componentDidMount: function () {
        var component = this;
        $.get("http://swapi.co/api/people/" + this.props.localCounter, function (data) {
            component.setState(data);
        });

        console.log("component: ", component.state.name);
    },

    componentWillReceiveProps: function (nextProps) {
        var component = this;
        $.get("http://swapi.co/api/people/" + nextProps.localCounter, function (data) {
            component.setState(data);

        });
    },

    render: function () {
        return (
            <div>
                <h3>{this.props.localCounter}</h3>

                <h3>{this.state.name}</h3>

                <h3>{this.state.height}</h3>

                <h3>{this.state.mass}</h3>

                <div><Film secondlocalCounter={this.props.localCounter} localFilms={this.state.films}/></div>
            </div>
        )
    }
});

var Film = React.createClass({
        getInitialState: function () {
            return {};
        },
        render: function () {
            if (this.props.localFilms) {
                var filmsName = [];

                console.log("1: ", this.props.localFilms);

                this.props.localFilms.forEach(function (e, i) {
                    $.get(e, function (data) {
                        filmsName.push(data.title);
                    });
                });
                console.log("2: ", filmsName);
            }
            console.log("3: ", filmsName);

            return (
                <div>
                    <div>Films: {filmsName}</div>
                    <div>{this.props.localFilms}</div>
                </div>
            )
        }
    })
    ;

var Button = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.increment);
    },
    render: function () {
        return (
            <button onClick={this.localHandleClick}>{this.props.localbuttonName}</button>
        )
    }
});

var Main = React.createClass({
    getInitialState: function () {
        return {counter: 1};
    },

    handleClick: function (increment) {
        console.log(increment);
        if ((this.state.counter > 1) && (increment === -1)) {
            this.setState({counter: this.state.counter + parseInt(increment)});
        } else if (increment === 1) {
            this.setState({counter: this.state.counter + parseInt(increment)});
        }
    },

    render: function () {
        return (
            <div>
                <User localCounter={this.state.counter}/>

                <Button localHandleClick={this.handleClick} increment={-1} localbuttonName={"Pre"}/>
                <Button localHandleClick={this.handleClick} increment={1} localbuttonName={"Next"}/>
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById("user"));