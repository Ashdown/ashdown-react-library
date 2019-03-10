import React from 'react';
import App from './containers/App';

React.render(<App />, document.getElementById('root'));

// Export all the explicitly exported components, this file will contain our
// components when built by webpack and sent off to the world.
export * from './components';
