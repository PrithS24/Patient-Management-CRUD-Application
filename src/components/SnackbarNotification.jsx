
import PropTypes from 'prop-types';
import { Snackbar, Alert } from '@mui/material';

const SnackbarNotification = ({ open, message, onClose }) => (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}> 
        <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}> 
            {message}
        </Alert>
    </Snackbar>
);


SnackbarNotification.propTypes = {
    open: PropTypes.bool.isRequired,          // 'open' must be a boolean and is required
    message: PropTypes.string.isRequired,    // 'message' must be a string and is required
    onClose: PropTypes.func.isRequired,      // 'onClose' must be a function and is required
};

export default SnackbarNotification;
