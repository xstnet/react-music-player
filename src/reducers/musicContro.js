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
			index = callType === 'auto' ? index : index = (index + 1) % musicList.length;
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
		//单曲循环
		case 'once':
		//index = index; //当前歌曲，继续播放
		//随机播放
		case 'random':
			index = Math.floor((Math.random() * musicList.length));
		//默认，列表循环 cycle
		default:
			index = (index + musicList.length - 1) % musicList.length;
	}
	playMusic(musicList[ index ]);

	return index;
}

