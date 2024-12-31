import PropTypes from 'prop-types';
import { DialogActions, Button } from '@mui/material';

import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';



const EditPatientDialog = ({ open, patient, onClose, onSave }) => {
    const [formData, SetFormData] = useState(patient);

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetFormData((prev => ({ ...prev, [name]: value })));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Edit Patient
            </DialogTitle>
            <DialogContent>
                <TextField
                    label="Patient Name"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal" />
                <TextField
                    label="Patient Address"
                    name="patientAddress"
                    value={formData.patientAddress}
                    onChange={handleChange}
                    fullWidth
                    margin="normal" />
                <TextField
                    label="Patient Email"
                    name="patientEmail"
                    value={formData.patientEmail}
                    onChange={handleChange}
                    fullWidth
                    margin="normal" />
                <TextField
                    label="Patient Age"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleChange}
                    fullWidth
                    margin="normal" />
            </DialogContent>
            <DialogActions>
                <Button onclick={onClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary"></Button>

            </DialogActions>
        </Dialog>);
};
EditPatientDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    patient: PropTypes.shape({
        patientName: PropTypes.string,
        patientAddress: PropTypes.string,
        patientEmail: PropTypes.string,
        patientAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default EditPatientDialog;

