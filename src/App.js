import React from 'react';
import propTypes from 'prop-types';

import { AppContainer } from '@split-demo/shared-components';

import './List.css';

import List from './components/Chat';
import Ad from './components/Ad';

const pageComponents = {
	Chat,
	Ad,
};

export default function App({ app, apps }) {
	//memoized
	const { pageRoutes } = generatePageRoutesAndNavItems(app, pageComponents);

	return (
		<AppContainer
			app={app}
			apps={apps}
			pageRoutes={pageRoutes}
			key={app.path}
		/>
	);
}

App.propTypes = {
	app: propTypes.object,
	apps: propTypes.arrayOf(propTypes.object),
};
