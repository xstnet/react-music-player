/**
 * Created by Administrator on 2018/4/5.
 */
import React, {Component} from 'react';
import '../style/ListItem.css';

class ListItem extends Component {
	deleteHandler(item, event) {
		event.stopPropagation();
		// PubSub.publish('DEL_MUSIC', item);
	};
	playMusic(item, e) {
		// PubSub.publish('PLAY_MUSIC', item);
	};
	render() {
		let item = this.props.item;
		return (
			<li className={`row components-listitem ${this.props.focus ? 'focus' : ''}`} onClick={this.props.onClick}>
				<p><span className="bold">{item.title}</span>  -  {item.artist}</p>
				<p className="-col-auto delete" onClick={(e)=>{e.stopPropagation();this.props.deleteMusic();}}></p>
			</li>
		);
	}
}

export default ListItem;