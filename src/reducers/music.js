/**
 * Created by Administrator on 2018/4/13.
 */
import {MUSIC_LIST} from '../config/MusicList';
import { playNext, playPrev, playMusic, play } from './musicContro'

let currentMusicIndex = 0;
let isPlay = false; // 初始化是否播放

let playMode = [
	'cycle','random', 'once', // 列表循环，随机播放，单曲循环
]

const music = (state = [], action) => {
	switch (action.type) {
		case 'PALY_MUSIC':
			playMusic(state.currentMusicItem, false);
			return {
				...state,
			}
		case 'PALY':
			play(!state.isPlay);
			return {
				...state,
				isPlay: !state.isPlay
			}
		case 'PALY_NEXT':
			currentMusicIndex = playNext(state.musicList, state.currentMusicIndex, state.playMode, action.callType);
			return {
				...state,
				currentMusicItem: state.musicList[ currentMusicIndex ],
				currentMusicIndex: currentMusicIndex,
				isPlay: true,
			}
		case 'PALY_PREV':
			currentMusicIndex = playPrev(state.musicList, state.currentMusicIndex, state.playMode);
			return {
				...state,
				currentMusicItem: state.musicList[ currentMusicIndex ],
				currentMusicIndex: currentMusicIndex,
				isPlay: true,
			}
		case 'CHOSE_MUSIC':
			currentMusicIndex = state.musicList.findIndex(item => item.id === action.id)
			playMusic(state.musicList[ currentMusicIndex ]);
			return {
				...state,
				currentMusicItem: state.musicList[ currentMusicIndex ],
				currentMusicIndex: currentMusicIndex,
				isPlay: true,
			}
		case 'DELETE_MUSIC':
			let newMusicList = state.musicList.filter((item, index) => item.id !== action.id);
			if (state.currentMusicItem.id === action.id) {
				// 已经删除了一首歌曲，最大长度应 减 1
				currentMusicIndex = playNext(newMusicList, -- state.currentMusicIndex);
			}
			return {
				...state,
				musicList: newMusicList,
				currentMusicItem: newMusicList[ currentMusicIndex ],
				currentMusicIndex: currentMusicIndex,
				isPlay: true,
			}
		case 'CHANGE_MODE':
			let modelIndex = playMode.findIndex(item => item === state.playMode)
			modelIndex = (modelIndex + 1) % playMode.length;

			return {
				...state,
				playMode: playMode[ modelIndex ],
			}
		default:
			return {
				musicList: MUSIC_LIST,
				currentMusicItem: MUSIC_LIST[ currentMusicIndex ],
				currentMusicIndex: currentMusicIndex,
				isPlay: isPlay,
				playMode: playMode[0] ,
			}
	}
}

export default music;