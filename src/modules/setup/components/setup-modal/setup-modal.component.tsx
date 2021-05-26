import React from 'react';
import { Backdrop, Button, Fade, Grid, Modal, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import useStyles from "./setup-modal.styles";
import SetupProfileImage from "../setup-profile-image/setup-profile-image.component";
import SetupBioText from "../setup-bio-text/setup-bio-text.component";
import SetupDisplayName from "../setup-display-name/setup-display-name.component";

interface SetupModalProps {
    open: boolean
    handleClose: () => void;
}

const getSteps = (): string[] => {
    return ['Upload profile image', 'Set bio text', 'Set display name'];
}

const getStepContent = (index: number): React.ReactElement => {
    switch (index) {
        case 0: return <SetupProfileImage />
        case 1: return <SetupBioText />
        case 2: return <SetupDisplayName />
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


                    {
                        activeStep !== 2 ? <Button onClick={handleNextStep}>Next</Button> : null
                    }

                    {
                        activeStep !== 0 ? <Button onClick={handlePrevStep}>Back</Button> : null
                    }

                    {
                        activeStep == 2 ? <Button onClick={props.handleClose}>Finish</Button> : null
                    }

                </Grid>
            </Fade>
        </Modal>
    )
};

export default SetupModal;
