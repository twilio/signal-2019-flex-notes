import styled from 'react-emotion';

export const NotesStyles = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-left: solid 1px #50508b;

    .card {
        margin: 10px;
        height: 100%;
        width: 100%;
        border: solid 1px #50508b;
        border-radius: 0px;
        overflow-y: scroll;
        background: ${props => props.theme.MainContainer.backgroundColor};
    }
    .textarea {
        margin: 10px;
        background: transparent;
        resize: none;
        border: 0 none;
        width: 100%;
        max-width: 97%;
        outline: none;
        height: 100%;
        font-size: 18px;
        font-family: Open Sans;
        color: ${props => props.theme.AgentDesktopView.Panel2.color};
    }
`;
