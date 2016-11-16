/**
 * Created by ivan.datsiv on 11/15/2016.
 */

var Note = React.createClass({
    render: function () {
        var style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}> x </span>
                {this.props.children}
            </div>
        )
    }
});

var Color = React.createClass({

    render: function () {
        return (
            <div onClick={this.props.onClick}></div>
        )
    }
});


var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            color: '#d53eff'
        }
    },

    handleTextChange: function (event) {
        this.setState({text: event.target.value});
    },

    handleNoteColor1: function () {
        this.setState({color: '#d53eff'});
    },
    handleNoteColor2: function () {
        this.setState({color: '#347fff'});
    },
    handleNoteColor3: function () {
        this.setState({color: '#55ff58'});
    },
    handleNoteColor4: function () {
        this.setState({color: '#ff5891'});
    },
    handleNoteColor5: function () {
        this.setState({color: '#d69552'});
    },

    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({text: ''});
    },

    render: function () {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    row={5}
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}/>

                <div className="colors">
                    <Color onClick={this.handleNoteColor1}/>
                    <Color onClick={this.handleNoteColor2}/>
                    <Color onClick={this.handleNoteColor3}/>
                    <Color onClick={this.handleNoteColor4}/>
                    <Color onClick={this.handleNoteColor5}/>
                </div>
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        )
    }
});


var NotesGrid = React.createClass({
    componentDidMount: function () {
        var grid = this.refs.grid;
        this.msnry = new Masonry(grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate: function (prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render: function () {
        var onNoteDelete = this.props.onNoteDelete;
        return (
            <div className="notes-grid" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Note key={note.id}
                                  onDelete={onNoteDelete.bind(null, note)}
                                  color={note.color}>
                                {note.text}
                            </Note>
                        );
                    })
                }
            </div>
        )
    }
});

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: []
        }
    },
    componentDidMount: function () {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({notes: localNotes});
        }
    },

    componentDidUpdate: function () {
        this._updateLocalStorage();
    },

    handleNoteDelete: function (note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({notes: newNotes});
    },

    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },

    render: function () {
        return (
            <div className="notes-app">
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
        )
    },

    _updateLocalStorage: function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('mount-point')
)