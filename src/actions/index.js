/**
 * Created by Administrator on 2018/4/13.
 */

export const playNext = (callType) => ({
	type: 'PALY_NEXT',
	callType: callType,//手动调用 or 自动调用，播放模式为单曲循环时用到
})

export const playPrev = () => ({
	type: 'PALY_PREV',
})

export const playMusic = () => ({
	type: 'PALY_MUSIC',
})

export const play = () => ({
	type: 'PALY',
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
});

export const choseMusic = id => ({
	type: 'CHOSE_MUSIC',
	id
})

export const deleteMusic = id => ({
	type: 'DELETE_MUSIC',
	id
})

export const changeMode = () => ({
	type: 'CHANGE_MODE',
})
