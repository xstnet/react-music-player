import { connect } from 'react-redux'
import Player from '../components/Player'
import {playNext, playPrev, playMusic, play, changeMode } from '../actions'

const mapStateToProps = (state, ownProps) => ({
	musicList: state.music.musicList,
	currentMusicItem: state.music.currentMusicItem,
	barColor: state.progress.barColor,
	isPlay: state.music.isPlay,
	playMode: state.music.playMode,
})


const mapDisPatchToProps = (dispatch, ownProps) => ({
	playNext: callType => dispatch(playNext(callType)),
	playPrev: () => dispatch(playPrev()),
	playMusic: () => dispatch(playMusic()),
	play: () => dispatch(play()),
	changeMode: () => dispatch(changeMode()),
})

export default connect(
	mapStateToProps,
	mapDisPatchToProps
)(Player)