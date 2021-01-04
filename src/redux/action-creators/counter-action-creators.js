/////// ======= Action Creators ======= /////////
// не зрозумів практичність цього, але кажуть шо так правильно писати!

import {DEC_COUNTER, INC_COUNTER, RESET_COUNTER} from "../action-types";

export const incCounter = () => ({type: INC_COUNTER});
export const decCounter = () => ({type: DEC_COUNTER});
export const resetCounter = () => ({type: RESET_COUNTER});