import axios from 'axios';

const dummyApi = axios.create({
	baseURL: 'https://dummyapi.io/data/v1/',
	timeout: 1000,
	headers: {
		'app-id': '63d28f80f952c8860fbb5e9a',
	},
});

export default dummyApi;
