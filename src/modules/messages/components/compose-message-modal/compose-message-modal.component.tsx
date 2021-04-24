import React from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './compose-message-modal.styles';
import { Divider, Grid, Backdrop, Fade } from "@material-ui/core";
import SearchBar from "./components/search-bar/search-bar.component";
import ModalHeader from "./components/modal-header/modal-header.component";
import UserEntry from "./components/user-entry/user-entry.component";

interface ComposeMessageModalProps {
    open: boolean
    handleClose: () => void;
}

interface FakeUser {
    imageUrl: string;
    username: string;
    handle: string;
}

const fakeUsers: FakeUser[] = [
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_200x200.jpg',
        username: 'Joe Biden',
        handle: 'JoeBiden'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1356979711046475787/d2aQgm1q_normal.jpg',
        username: 'Carlos Sainz',
        handle: 'Carlossainz55'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1108379836911943680/SM27gr6A_200x200.jpg',
        username: 'Jean Todt',
        handle: 'JeanTodt'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/815358035505905664/snuVhCJS_200x200.jpg',
        username: 'António Guterres',
        handle: 'antonioguterres'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1157639919222820865/CBzdWZx7_200x200.jpg',
        username: 'The Cambridge Union',
        handle: 'cambridgeunion'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1157639919222820865/CBzdWZx7_200x200.jpg',
        username: 'The Cambridge Union',
        handle: 'cambridgeunion'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1157639919222820865/CBzdWZx7_200x200.jpg',
        username: 'The Cambridge Union',
        handle: 'cambridgeunion'
    },
    {
        imageUrl: 'https://pbs.twimg.com/profile_images/1157639919222820865/CBzdWZx7_200x200.jpg',
        username: 'The Cambridge Union',
        handle: 'cambridgeunion'
    },
]

const ComposeMessageModal: React.FC<ComposeMessageModalProps> = (props: ComposeMessageModalProps) => {

    const classes = useStyles();

    const [filterText, setFilterText] = React.useState('');

    const filteredList = fakeUsers.filter(fakeUser => {
        const username = fakeUser.username.toLowerCase();
        const handle = fakeUser.handle.toLowerCase();
        const filter = filterText.toLowerCase();

        return username.includes(filter) || handle.includes(filter);
    });

    return (
        <Modal
            aria-labelledby="Create a new conversation"
            aria-describedby="This popup is used to select a person to have a conversation with"
            className={classes.modal}
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Grid className={classes.container} container direction='column'>

                    <ModalHeader closeModal={props.handleClose} />

                    <SearchBar filterText={filterText} setFilterText={setFilterText} />

                    <Divider />

                    <Grid item direction='column' style={{ maxHeight: '390px', overflowX: 'hidden', overflowY: 'scroll' }}>
                        {
                            filteredList.map(user => <UserEntry user={user} />)
                        }
                    </Grid>

                </Grid>
            </Fade>
        </Modal>
    )
}

export default ComposeMessageModal;
