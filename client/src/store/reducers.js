import { UPDATE_SLOT_RESULT } from './actions'
export const  slotResults = (state = 20, action) => {
    const { type, payload } = action;

    switch(type) {
        // case CREATE_TODO: {
        //     const { text } = payload;
        //     const newTodo = {
        //         text,
        //         isCompleted: false
        //     }
        //     return state.concat(newTodo);
        // }
        // case REMOVE_TODO: {
        //     const { text } = payload;
        //     return state.filter(todo => todo.text !== text);
        // }
        case UPDATE_SLOT_RESULT: {
            const { number } = payload;
            return state+=number;
        }
        default: {
            return state;
        }
    }
}