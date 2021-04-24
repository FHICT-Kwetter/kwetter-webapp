import React from 'react';
import useStyles from './messages-page.styles'

import { Button, Divider, Grid, Tooltip, Typography, Zoom } from "@material-ui/core";

import PostAddIcon from '@material-ui/icons/PostAdd';
import { useWindowSize } from "../../../shared/utils/use-window-size";
import ComposeMessageModal from "../../components/compose-message-modal/compose-message-modal.component";
import { getAmountOfTimeSinceDate } from "../../../shared/utils/time-util";
import SearchBar from "../../components/search-bar/search-bar.component";
import Menu from "../../../shared/components/menu/menu.component";

interface FakeMessage {
    messageId: number;
    message: string;
    time: Date;
    type: 'send' | 'received';
}

interface FakeConversation {
    conversationId: number;
    imageUrl: string;
    username: string;
    handle: string;
    messages: FakeMessage[],
}

const fakeConversations: FakeConversation[] = [
    // {
    //     conversationId: 1,
    //     imageUrl: 'https://pbs.twimg.com/profile_images/691196586018344960/Y3KfyJ8m_normal.jpg',
    //     username: 'Zeinab Mohamed',
    //     handle: 'Lady_AnGeL94',
    //     messages: [
    //         {
    //             messageId: 1,
    //             message: 'Hi',
    //             time: new Date('2021-03-11 14:17'),
    //             type: 'send'
    //         }
    //     ],
    // },
    // {
    //     conversationId: 1,
    //     imageUrl: 'https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_200x200.jpg',
    //     username: 'Joe Biden',
    //     handle: 'JoeBiden',
    //     messages: [
    //         {
    //             messageId: 1,
    //             message: 'Test',
    //             time: new Date('2021-03-11 14:17'),
    //             type: 'send'
    //         }
    //     ],
    // }
];


const MessagesPage: React.FC = () => {

    const [composeMessageOpen, setComposeMessageOpen] = React.useState(false);

    const classes = useStyles();
    const width = useWindowSize().width;

    return (
        <>
            <Menu activeItem='messages' />

            <Grid className={classes.container} container direction='column'>

                {/* The message header */}
                <Grid className={classes.headerContainer} container direction='row' alignItems='center' alignContent='flex-start'>
                    <Grid item direction='column' xs={11}>
                        <Typography className={classes.headerText}>Messages</Typography>
                    </Grid>
                    <Grid item direction='column' xs={1}>
                        <Tooltip title={'Create new conversation'} TransitionComponent={Zoom} enterDelay={50} leaveDelay={50} placeholder='bottom' arrow={true}>
                            <PostAddIcon className={classes.createConversationIcon} color='primary' fontSize='default' onClick={() => setComposeMessageOpen(true)} />
                        </Tooltip>
                    </Grid>
                </Grid>

                {/*  The filter search bar  */}
                <SearchBar />

                {/*  The content for users without any conversations  */}
                {
                    fakeConversations.length === 0 ? (
                        <Grid className={classes.tabPanelContainerNewUser} container direction='column'>
                            <Typography className={classes.emptyTitle} variant='h4'>Send a message, get a message</Typography>
                            <Typography className={classes.emptyDescription} variant='body2'>Direct Messages are private conversations between you and other people on Kwetter. Share Kweets, media, and more!</Typography>
                            <Button className={classes.startButton} variant='contained' color="primary" onClick={() => setComposeMessageOpen(true)}>Start a conversation</Button>
                        </Grid>
                    ) :
                    (
                        <Grid container direction='column'>
                            {
                                fakeConversations.map(conversation =>
                                    <>
                                        <Grid className={classes.userRowContainer} container direction='row'>
                                            <Grid item xs={1}>
                                                <img className={classes.userImage} src={conversation.imageUrl} alt='profile-image' />
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Typography className={classes.usernameText}>{conversation.username} <span className={classes.handleText}> @{conversation.handle}</span></Typography>
                                                <Typography className={classes.handleText}>{conversation.messages[conversation.messages.length - 1].message}</Typography>
                                            </Grid>
                                            <Grid item xs={2} />
                                            <Grid item xs={2}>
                                                <Typography className={classes.handleText}>{getAmountOfTimeSinceDate(conversation.messages[conversation.messages.length - 1].time)}</Typography>
                                            </Grid>
                                        </Grid>

                                        <Divider />
                                    </>
                                )
                            }
                        </Grid>
                    )
                }

            </Grid>

            {/*  The message view for users without any conversation selected  */}
            {
                width && width > 960 && (
                    <Grid container direction='column' justify='center'>
                        <Typography className={classes.emptyTitle} variant='h4'>You don’t have a message selected</Typography>
                        <Typography className={classes.emptyDescription} variant='body2'>Choose one from your existing messages, or start a new one.</Typography>
                        <Button
                            className={classes.startButton}
                            variant='contained'
                            color="primary"
                            onClick={() => setComposeMessageOpen(true)}
                        >
                            New message
                        </Button>
                    </Grid>
                )
            }

            {/*  The compose message modal  */}
            {
                composeMessageOpen && (<ComposeMessageModal open={composeMessageOpen} handleClose={() => setComposeMessageOpen(false)} />)
            }
        </>
    )
}

export default MessagesPage;
