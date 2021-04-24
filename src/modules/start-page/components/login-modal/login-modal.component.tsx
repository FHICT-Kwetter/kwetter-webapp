import React from "react";
import useStyles from "../../../messages/components/compose-message-modal/compose-message-modal.styles";
import Modal from "@material-ui/core/Modal";
import { Backdrop, Fade, Grid } from "@material-ui/core";
import ModalHeader from "./components/modal-header/modal-header.component";
import ModalForm from "./components/modal-form/modal-form.component";


interface LoginModalModalProps {
    open: boolean
    handleClose: () => void;
}

const LoginModal: React.FC<LoginModalModalProps> = (props: LoginModalModalProps) => {

    const classes = useStyles();

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
                    <ModalForm />

                </Grid>
            </Fade>
        </Modal>
    )
}

export default LoginModal;
