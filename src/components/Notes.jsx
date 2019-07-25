import { Notifications } from "@twilio/flex-ui";
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { NotesStyles } from './Notes.Styles';
import axios from 'axios';

const BACKUP_SERVER_URL = 'https://hidden-anchorage-65311.herokuapp.com/notes';

export default class Notes extends Component {
    constructor(props) {
        super(props);

        this.serverUrl = props.manager.serviceConfiguration.attributes.notes_server_url || BACKUP_SERVER_URL;
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

        axios.get(this.serverUrl, config)
            .then((response) => {
                this.setState({ notes: response.data.notes });
            })
            .catch((error) => {
                Notifications.showNotification("notesError", null);
                console.error("Notes could not be loaded");
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


        axios.post(this.serverUrl, { notes }, config);
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
