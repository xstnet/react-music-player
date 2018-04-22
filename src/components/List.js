/**
 * Created by Administrator on 2018/4/5.
 */
import React, {Component} from 'react';
import ListItem from '../components/ListItem';

class List extends Component {
	render() {
		let Items = this.props.musicList.map((item) => {
			return (
				<ListItem
					key={item.id}
					item={item}
					focus={this.props.currentMusicItem.id === item.id}
					onClick={() => this.props.choseMusic(item.id)}
					deleteMusic={() => this.props.deleteMusic(item.id)}
				></ListItem>
			);
		});
		return (
			<ul>
				{ Items }
			</ul>
		);
	}
}

export default List;