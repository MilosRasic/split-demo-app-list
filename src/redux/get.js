import axios from 'axios';

export default function({url, params, requestAction, successAction, errorAction}) {
	return dispatch => {
		if (requestAction) {
			dispatch(requestAction(params));
		}

		return axios.get(url, {
			params,
			headers: {
				'X-Tutti-Source': 'web',
				'X-Tutti-Hash': '9d7c4bc7-6d1e-4c55-9c60-2bd51b72c4f4',
			},
		}).then(response => {
			if (successAction) {
				dispatch(successAction(response.data));
			}
		}).catch(error => {
			if (errorAction) {
				if (error.response) {
					dispatch(errorAction(typeof error.response.data === 'string' ? error.response.data : error.response.data.message.message, error.response.status));
				}
				else {
					dispatch(errorAction('Network failure'));
				}
			}
		});
	};
}