import  { useState } from 'react';
import { Switch, Typography, Box } from '@mui/material';
import AddPatientForm from './components/AddPatientForm';
import PatientTable from './components/PatientTable';
import PatientCard from './components/PatientCard';
import EditPatientDialog from './components/EditPatientDialog';
import SnackbarNotification from './components/SnackbarNotification';

const App = () => {
    const [patients, setPatients] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [isCardView, setIsCardView] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleAddPatient = (patient) => setPatients((prev) => [...prev, patient]);
    const handleEditPatient = (index) => setEditIndex(index);
    const handleDeletePatient = (index) => {
        setPatients((prev) => prev.filter((_, i) => i !== index));
        setSnackbarOpen(true);
    };
    const handleSavePatient = (updatedPatient) => {
        setPatients((prev) => prev.map((p, i) => (i === editIndex ? updatedPatient : p)));
        setEditIndex(null);
    };
    const toggleView = () => setIsCardView((prev) => !prev);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Patient Management
            </Typography>
            <AddPatientForm onAddPatient={handleAddPatient} />
            <Switch checked={isCardView} onChange={toggleView} />
            <Typography>{isCardView ? 'Card View' : 'Table View'}</Typography>
            {patients.length === 0 ? (
                <Typography variant="h6" sx={{ mt: 2 }}>
                    No patients found. Add a patient to get started!
                </Typography>
            ) : isCardView ? (
                patients.map((patient, index) => (
                    <PatientCard key={index} {...patient} />
                ))
            ) : (
                <PatientTable
                    patients={patients}
                    onEdit={handleEditPatient}
                    onDelete={handleDeletePatient}
                />
            )}
            {editIndex !== null && (
                <EditPatientDialog
                    open={editIndex !== null}
                    patient={patients[editIndex]}
                    onClose={() => setEditIndex(null)}
                    onSave={handleSavePatient}
                />
            )}
            <SnackbarNotification
                open={snackbarOpen}
                message="Patient deleted successfully!"
                onClose={() => setSnackbarOpen(false)}
            />
        </Box>
    );
};

export default App;
