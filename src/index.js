import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
import { BrowserRouter} from 'react-keeper';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
	, document.getElementById('container')
);

registerServiceWorker();
