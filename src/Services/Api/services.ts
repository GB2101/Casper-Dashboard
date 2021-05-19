import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-casper-chatbot-maxq.cloudfunctions.net/api',

	// baseURL: 'http://localhost:5001/casper-chatbot-maxq/us-central1/api',
	timeout: 5000,
});

export default instance;
