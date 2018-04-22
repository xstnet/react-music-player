import { connect } from 'react-redux'
import List from '../components/List'
import { choseMusic, deleteMusic } from '../actions'

const mapStateToProps = (state, ownProps) => ({
	musicList: state.music.musicList,
	currentMusicItem: state.music.currentMusicItem,
})


const mapDisPatchToProps = (dispatch, ownProps) => ({
	choseMusic: id => dispatch(choseMusic(id)),
	deleteMusic: id => dispatch(deleteMusic(id)),
})

export default connect(
	mapStateToProps,
	mapDisPatchToProps
)(List)