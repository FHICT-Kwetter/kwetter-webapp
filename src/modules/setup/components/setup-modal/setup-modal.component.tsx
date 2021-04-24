import React from 'react';
import { Backdrop, Button, Fade, Grid, Modal, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./setup-modal.styles";
import SetupProfileImage from "../setup-profile-image/setup-profile-image.component";

interface SetupModalProps {
    open: boolean
    handleClose: () => void;
}

const getSteps = (): string[] => {
    return ['Upload profile image', 'Set bio text'];
}

const getStepContent = (index: number): React.ReactElement => {
    switch (index) {
        case 0: return <SetupProfileImage />
        case 1: return <Typography>Hello 2</Typography>
        default: return <></>;
    }
}

const SetupModal: React.FC<SetupModalProps> = (props: SetupModalProps) => {

    const classes = useStyles();
    const steps = getSteps();

    const [activeStep, setActiveStep] = React.useState<number>(0);

    const handleNextStep = () => {
        setActiveStep((prevState => prevState + 1 < steps.length ? prevState + 1 : prevState));
    }

    const handlePrevStep = () => {
        setActiveStep((prevState => prevState > 0 ? prevState - 1 : 0));
    }

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            closeAfterTransition
            className={classes.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={props.open}>
                <Grid className={classes.container} container direction='column'>

                    <Stepper activeStep={activeStep} alternativeLabel>
                        {
                            steps.map(step => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>

                    {
                        getStepContent(activeStep)
                    }

                    <Button onClick={handlePrevStep}>Back</Button>
                    <Button onClick={handleNextStep}>Next</Button>

                </Grid>
            </Fade>
        </Modal>
    )
};

export default SetupModal;
