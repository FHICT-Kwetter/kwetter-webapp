import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./modal-header.styles";

interface ModalHeaderProps {
    closeModal: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = (props: ModalHeaderProps) => {

    const classes = useStyles();

    return (
        <Grid container direction='row'>
            <Grid item xs={1}>
                <CloseIcon className={classes.modalCloseButton} color='primary' onClick={props.closeModal}/>
            </Grid>
            <Grid item xs={11}>
                <Typography className={classes.modalTitle}>New Message</Typography>
            </Grid>
        </Grid>
    )
};

export default ModalHeader;
