import axios from 'axios';

const API_BASE_URL = 'https://queuerona.herokuapp.com/';

export const FETCH_AVAILABLE_CAPACITY = async bID => {
	const { data } = await axios.get(`${API_BASE_URL}/api/capacity/${bID}`);

	return data;
};

export const FETCH_AVAILABLE_TICKETS = async bID => {
	const { data } = await axios.get(`${API_BASE_URL}/api/available_tickets/${bID}`);

	return data;
};

export const RESERVE_AVAILABLE_TICKET = async (bID, slotID) => {
	const { data } = await axios.post(
		`${API_BASE_URL}/api/reserve_ticket/${bID}`,
		{
			reserve_ticket: slotID
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	return data;
};

export const ALERT_POSSIBLE_SUBMIT = async bID => {
	const { data } = await axios.post(
		`${API_BASE_URL}/api/warning/${bID}`,
		{
			warning: 1
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);

	return data;
};
