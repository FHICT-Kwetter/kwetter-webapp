import React from 'react';
import { CircularProgress, Grid } from "@material-ui/core";

const ModalSpinner: React.FC = () => {

    return (
        <Grid container direction='column' justify='center' alignContent='center' alignItems='center'>
            <CircularProgress color='primary' size={60} style={{ marginTop: '160px' }} />
        </Grid>

    )
}

export default ModalSpinner;
