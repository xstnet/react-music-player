/**
 * Created by Administrator on 2018/4/13.
 */
import { combineReducers } from 'redux';
import progress from './progress';
import music from './music';

export default combineReducers({
	progress,
	music,
})
