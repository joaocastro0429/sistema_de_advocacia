import { appointment } from '../services/get.service';
export const GetAppointment = async (req, res) => {
    try {
        const lawyer = await appointment();
        return res.status(200).json(lawyer);
    }
    catch (error) {
        console.error('Error in get lawyers controller:', error.message);
        return res.status(500).json({ error: 'Error fetching lawyers', details: error.message });
    }
};
