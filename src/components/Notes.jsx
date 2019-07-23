import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { NotesStyles } from './Notes.Styles';
import axios from 'axios';

export default class Notes extends Component {
    constructor() {
        super();

        this.state = {
            notes: '',
        }
    }

    componentDidMount() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-FlexToken': this.props.manager.user.token,
            }
        };

        axios.get('http://localhost:3001/notes', config)
            .then((response) => {
                this.setState({ notes: response.data.notes });
            })
            .catch((error) => {
                this.setState({ notes: "Couldn't load notes..." });
            });
    }

    handleTextareaOnChange = (e) => {
        const notes = e.target.value;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'X-FlexToken': this.props.manager.user.token,
            }
        };


        axios.post('http://localhost:3001/notes', { notes }, config);
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
