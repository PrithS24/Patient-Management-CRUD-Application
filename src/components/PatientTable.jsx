
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button,
    Paper,
} from '@mui/material';
import PropTypes from 'prop-types';

const PatientTable = ({ patients, onEdit, onDelete }) => (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {patients.map((patient, index) => (
                    <TableRow key={index}>
                        <TableCell>{patient.patientName}</TableCell>
                        <TableCell>{patient.patientAddress}</TableCell>
                        <TableCell>{patient.patientEmail}</TableCell>
                        <TableCell>{patient.patientAge}</TableCell>
                        <TableCell>
                            <Button onClick={() => onEdit(index)} variant="contained" color="primary" sx={{ mr: 1 }}>
                                Edit
                            </Button>
                            <Button onClick={() => onDelete(index)} variant="contained" color="secondary"> Delete </Button>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>

);

PatientTable.propTypes = {
    patients: PropTypes.arrayOf(
        PropTypes.shape({
            patientName: PropTypes.string.isRequired,
            patientAddress: PropTypes.string.isRequired,
            patientEmail: PropTypes.string.isRequired,
            patientAge: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default PatientTable;