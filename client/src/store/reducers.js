import { UPDATE_SLOT_RESULT } from './actions'
export const  slotResults = (state = 20, action) => {
    const { type, payload } = action;

    switch(type) {
        case UPDATE_SLOT_RESULT: {
            const { number } = payload;
            return state+=number;
        }
        default: {
            return state;
        }
    }
}