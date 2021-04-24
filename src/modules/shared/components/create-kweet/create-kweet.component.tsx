import React from 'react';
import { Button, Divider, Grid, LinearProgress, TextField } from "@material-ui/core";
import useStyles from "./create-kweet.styles";
import InsertPhotoSharpIcon from '@material-ui/icons/InsertPhotoSharp';
import VideocamSharpIcon from '@material-ui/icons/VideocamSharp';
import ImagePreview from "../image-preview/image-preview.component";

const CreateKweet: React.FC = () => {

    const classes = useStyles();

    const [kweetText, setKweetText] = React.useState<string>('');
    const [media, setMedia] = React.useState<File[]>([]);

    const handleKweetTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setKweetText(event.target.value);
    }

    const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newFiles = Array.from(event.target.files as FileList);
        const nonDuplicateNewFiles = newFiles.filter(file => media.find(f => f.name === file.name) === undefined);
        setMedia([...media, ...nonDuplicateNewFiles]);
    }

    const removeMedia = (mediaToRemove: File): void => {
        const newMedia = media.filter(image => image.name !== mediaToRemove.name);
        setMedia(newMedia);
    }

    const postKweet = (): void => {
        console.log('kweet', {
            content: kweetText,
            files: media,
        });
    }

    return (
        <Grid container direction='column'>
            <Grid container direction='row'>

                {/* The users avatar. */}
                <Grid container direction='column' xs={2}>
                    <img
                        className={classes.profileImage}
                        src='https://cdn5.vectorstock.com/i/thumb-large/17/59/default-placeholder-businessman-half-length-portr-vector-21181759.jpg'
                        alt='profile picture'
                    />
                </Grid>

                <Grid container direction='column' xs={10}>

                    {/* The what's happening text field. */}
                    <TextField
                        className={classes.kweetTextBox}
                        onChange={handleKweetTextChange}
                        value={kweetText}
                        placeholder="What's happening?"
                        multiline
                        InputProps={{ disableUnderline: true }}
                    />

                    {/* File uploads */}
                    {
                        media.length > 0 && (
                            <Grid className={classes.previewContainer} container direction='column'>
                                {
                                    media.map(media => <ImagePreview image={media} onRemove={removeMedia} />)
                                }
                            </Grid>
                        )
                    }

                    <Divider className={classes.divider} />

                    {/* The media upload buttons and the post button. */}
                    <Grid className={classes.actionContainer} container direction='row' alignItems='center'>
                        <Grid item xs={1}>
                            <Button component='label' startIcon={<InsertPhotoSharpIcon className={classes.imageUploadButton} color='primary' fontSize="default" />}>
                                <input
                                    accept='image/*'
                                    type='file'
                                    onChange={handleMediaUpload}
                                    hidden
                                    multiple
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button component='label' startIcon={<VideocamSharpIcon color='primary' fontSize="default" />}>
                                <input
                                    accept='video/*'
                                    type='file'
                                    onChange={handleMediaUpload}
                                    hidden
                                    multiple
                                />
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={6}>
                            <LinearProgress variant="determinate" value={kweetText.length / 140 * 100} />
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <Button onClick={postKweet} variant='contained' color="primary" className={classes.kweetButton}>Kweet</Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* The little space between the create kweet box and the feed. */}
                <Grid className={classes.kweetTextBoxEndContainer} container direction='column' xs={12} />
            </Grid>
        </Grid>
    )
}

export default CreateKweet;
