/**
 * Created by Administrator on 2018/4/20.
 */
import $ from 'jquery';
import  'jplayer';

export const playMusic = (musicItem, isPlay = true) => {
	$('#player').jPlayer('setMedia', {
		mp3: musicItem.file,
	})
	play(isPlay);
}

export const play = (isPlay) => {
	if (isPlay) {
		$('#player').jPlayer('play');
	} else {
		$('#player').jPlayer('pause');
	}
}

export const playNext = (musicList, index, mode, callType = 'manual') => {
	switch (mode) {
		//单曲循环
		case 'once':
			//当手动切换下一曲时，执行顺序播放模式，当为歌曲播放完成自动切换下一曲时，仍为当前歌曲
			index = callType === 'auto' ? index : (index + 1) % musicList.length;
			break;
		//随机播放
		case 'random':
			index = Math.floor((Math.random() * musicList.length));
			break;
		//默认，列表循环 cycle
		default:
			index = (index + 1) % musicList.length;
	}
	playMusic(musicList[ index ]);

	return index;
}

export const playPrev = (musicList, index, mode) => {
	switch (mode) {
		//随机播放
		case 'random':
			index = Math.floor((Math.random() * musicList.length));
			break;
		//默认，列表循环和单曲循环， 单曲循环时，点击上一曲，仍然按列表循环模式
		default:
			index = (index + musicList.length - 1) % musicList.length;
	}
	playMusic(musicList[ index ]);

	return index;
}

