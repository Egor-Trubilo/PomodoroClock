import {LONG_BREAK, POMODORO, SHORT_BREAK} from "../constants";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    mode: SHORT_BREAK,
    round: 1,
    autoBreaks: false,
    autoPomodoro: false,
    longBreakInterval: 4,
    modes: {
        [POMODORO]: {
            id: POMODORO,
            label: 'Pomodoro',
            time: 25,
        },
        [SHORT_BREAK]: {
            id: SHORT_BREAK,
            label: "Short Break",
            time: 5,
        },
        [LONG_BREAK]: {
            id: LONG_BREAK,
            label: "Long Break",
            time: 15,
        },

    }

}

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
        incrementRound: (state) => {
            state.round += 1;
        },
        updateModeTime: (state, action) => {
            const {mode, time} = action.payload;
            state.modes[mode].time= time
        },
        toggleAutoPomodoro: (state) =>{
            state.autoPomodoro = !state.autoPomodoro;
        }


    }

})


export const {
    setMode,
    incrementRound,
    updateModeTime,
    toggleAutoBreaks,
    toggleAutoPomodoro,
    setLongBreakInterval,
    setAlarmSound,
    setAlarmVolume,
    setAlarmRepeat,
    setTickingSound,
    setTickingVolume,
} = timerSlice.actions;

export default timerSlice.reducer;