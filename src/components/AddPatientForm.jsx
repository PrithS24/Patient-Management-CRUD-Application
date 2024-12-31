import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const AddPatientForm = ({ onAddPatient }) => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientAddress: '',
        patientEmail: '',
        patientAge: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPatient(formData);
        setFormData({
            patientName: '',
            patientAddress: '',
            patientEmail: '',
            patientAge: '',
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 2 }}>
            <TextField
                label="Patient Name"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange} // Fixed typo here
                fullWidth
                margin="normal"
                required
                InputProps={{
                    style: { color: 'white' }
                }}
                InputLabelProps={{
                    style: {color: 'white'},
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Set border color to white
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Keep border color white on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', // Keep border color white on focus
                        },
                    },
                }}

            />
            <TextField
                label="Patient Address"
                name="patientAddress"
                value={formData.patientAddress}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                InputProps={{
                    style: { color: 'white' }
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Set border color to white
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Keep border color white on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', // Keep border color white on focus
                        },
                    },
                }}
            />
            <TextField
                label="Patient Email"
                name="patientEmail"
                value={formData.patientEmail}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="email"
                InputProps={{
                    style: { color: 'white' }
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Set border color to white
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Keep border color white on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', // Keep border color white on focus
                        },
                    },
                }}
            />
            <TextField
                label="Patient Age"
                name="patientAge"
                value={formData.patientAge}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
                InputProps={{
                    style: { color: 'white' }
                }}
                InputLabelProps={{
                    style: { color: 'white' },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Set border color to white
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Keep border color white on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white', // Keep border color white on focus
                        },
                    },
                }}
            />
            <Button type="submit" variant="contained" color="primary">
                Add Patient
            </Button>
        </Box>
    );
};

// Move propTypes outside the component
AddPatientForm.propTypes = {
    onAddPatient: PropTypes.func.isRequired,
};

export default AddPatientForm;
