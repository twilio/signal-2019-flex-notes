import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { NotesStyles } from './Notes.Styles';

export default class Notes extends Component {
    constructor() {
        super();

        this.state = {
            notes: localStorage.getItem('agentNotes'),
        }
    }

    handleTextareaOnChange = (e) => {
        const notes = e.target.value;

        localStorage.setItem('agentNotes', notes);
        this.setState({ notes });
    }

    render() {
        return (
            <NotesStyles>
                <div className="header-container">
                    <div className="header">Agent Notes</div>
                </div>
                <Card className="card">
                    <textarea
                        className="textarea"
                        value={this.state.notes}
                        onChange={this.handleTextareaOnChange}
                    />
                </Card>
            </NotesStyles>
        );
    }
}
