/**
 * Created by xstnet on 2018/4/5.
 */
import React, {Component} from 'react';
import Header from './Header';
import Player from '../containers/Player';
import List from '../containers/List';
import { Route, } from 'react-keeper';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Route cache path="/>" index miss component={ Player }></Route>
				<Route path="/list" component={ List }></Route>
			</div>
		);
	}
}

export default App;