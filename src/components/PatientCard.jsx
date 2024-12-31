import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';


const PatientCard = ({ patientName, patientAddress, patientEmail, patientAge }) => (
    <Card sx={{ mb: 2 }}>
        <CardContent>
            <Typography variant="h6">{patientName}</Typography>
            <Typography variant="body1">Address: {patientAddress}</Typography>
            <Typography variant="body1">Email: {patientEmail}</Typography>
            <Typography variant="body1">Age: {patientAge}</Typography>

        </CardContent>
    </Card>
);

PatientCard.propTypes = {
    patientName: PropTypes.string.isRequired,
    patientAddress: PropTypes.string.isRequired,
    patientEmail: PropTypes.string.isRequired,
    patientAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default PatientCard;
