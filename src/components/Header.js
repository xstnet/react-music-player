import React, { Component } from 'react';
import '../style/logo.css';

class Header extends Component {
	render () {
		return (
			<div className='row components-logo'>
				<img src="/images/logo.png" width='40' className='-col-auto' alt=""/>
				<h1 className='caption'>Music Player Build By React</h1>
				<div id="player"></div>
			</div>
		);
	}
}

export default Header;