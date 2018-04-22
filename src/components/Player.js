import React, {Component} from 'react';
import Progress from '../components/Progress';
import '../style/player.css';
import $ from 'jquery';
import  'jplayer';
import { Link} from 'react-keeper';


let duration = null;

class Player extends Component{
	constructor (props) {
		super(props);
		this.state = {
			progress: 0,
			volume: 0,
			totalTime: "--",
			currentTime: "---",
		}
	}

	componentDidMount () {
		$("#player").jPlayer({
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		//加载第一首歌曲
		this.props.playMusic();

		$("#player").bind($.jPlayer.event.timeupdate, (e)=>{
			duration = e.jPlayer.status.duration;
			let currentTime = e.jPlayer.status.currentTime;
			this.setState({
				progress: e.jPlayer.status.currentPercentAbsolute, //当前进度百分比
				currentTime: $.jPlayer.convertTime(currentTime),
				totalTime: $.jPlayer.convertTime(duration),
				volume: e.jPlayer.options.volume * 100,
			});
		});
		$("#player").bind($.jPlayer.event.ended , (e)=>{
			this.props.playNext('auto');
		});
	};

	//暂停和播放控制
	play() {
		if (this.state.isPlay) {
			$("#player").jPlayer('pause');
		} else {
			$("#player").jPlayer('play');
		}
	}
	// 跳转进度控制
	changeProgressHandler(progress) {
		// 当前是正在播放状态，跳转到对应的进度继续播放
		if (this.props.isPlay) {
			$("#player").jPlayer('play', duration * progress);
		} else {
			//当前是暂停状态，跳转到对应的进度继续暂停
			$("#player").jPlayer('pause', duration * progress);
		}
	};
	changeVolumeHandler(progress) {
		$("#player").jPlayer('volume', progress);
		//暂停状态下控制音量起作用
		this.setState({volume: progress * 100});
	};
	componentWillUnmount() {
		$("#player").unbind($.jPlayer.event.timeupdate);
		$("#player").unbind($.jPlayer.event.ended);
	};
	render() {
		return (
			<div className="player-page">
				<h1 className="caption"><Link to={`/list`}>我的私人音乐坊 &gt;</Link></h1>
				<div className="mt20 row">
					<div className="controll-wrapper">
						<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
						<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
						<div className="row mt20">
							<div className="left-time -col-auto">{this.state.currentTime}</div>
							<div className="volume-container">
								<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
								<div className="volume-wrapper">
									<Progress
										progress={this.state.volume}
										onProgressChange={this.changeVolumeHandler.bind(this)}
										barColor='#aaa'
									>
									</Progress>
								</div>
							</div>
							<div className="left-time -col-auto">{this.state.totalTime}</div>
						</div>
						<div style={{height: 10, lineHeight: '10px'}}>
							<Progress
								progress={this.state.progress}
								onProgressChange={this.changeProgressHandler.bind(this)}
								barColor={this.props.barColor}
							>
							</Progress>
						</div>
						<div className="mt35 row">
							<div>
								<i className="icon prev" onClick={() => this.props.playPrev()}></i>
								<i className={`icon ml20 ${this.props.isPlay ? 'pause' : 'play'}`} onClick={() => this.props.play()}></i>
								<i className="icon next ml20" onClick={() => this.props.playNext()}></i>
							</div>
							<div className="-col-auto">
								<i className={`icon repeat-${this.props.playMode}`} onClick={() => this.props.changeMode()}></i>
							</div>
						</div>
					</div>
					<div className="-col-auto cover">
						<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
					</div>
				</div>
			</div>
		);
	}
};

export default Player;