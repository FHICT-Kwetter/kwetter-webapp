import React from 'react';
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

interface ErrorSnackbarProps {
    open: boolean;
    duration: number;
    onClose: () => void;
    text: string;
}

export const SuccessSnackbar: React.FC<ErrorSnackbarProps> = (props: ErrorSnackbarProps) => {

    const { open, duration, text, onClose } = props;

    return (
        <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
            <Alert severity='success' onClose={onClose}>{text}</Alert>
        </Snackbar>
    )
};

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = (props: ErrorSnackbarProps) => {

    const { open, duration, text, onClose } = props;

    return (
        <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
            <Alert severity='error' onClose={onClose}>{text}</Alert>
        </Snackbar>
    )
};

export default ErrorSnackbar;
