/**
 * Created by ivan.datsiv on 9/6/2016.
 */
var User = React.createClass({
    getInitialState: function () {
        return {};
    },

    componentDidMount: function () {
        var component = this;

        if (this.state != null) {
            $.get("http://swapi.co/api/people/" + this.props.localCounter, function (data) {
                component.setState(data);
            });
        }
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
            var filmsName = [];
            console.log(this.props.localFilms);
            $.makeArray(this.props.localFilms).forEach(function (e, i) {
                console.log(e);

                $.get(e, function (data) {

                });
            });

            return (
                <div>
                    <div>Films: {filmsName}</div>
                    <div>{this.props.localFilms}</div>
                </div>
            )
        }
    })
    ;

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
        return {
            counter: 1
        };
    },

    handleClickPre: function () {
        if (this.state.counter > 1) {
            this.setState({counter: this.state.counter - 1});
        }
    },

    handleClickNext: function () {
        this.setState({counter: this.state.counter + 1});
    },

    render: function () {
        return (
            <div>
                <User localCounter={this.state.counter}/>

                <ButtonPre localHandleClickPre={this.handleClickPre}/>
                <ButtonNext localHandleClickNext={this.handleClickNext}/>
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById("user"));