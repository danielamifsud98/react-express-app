export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    tupe: CREATE_TODO,
    payload: {text},
})

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
})

export const UPDATE_SLOT_RESULT = 'UPDATE_SLOT_RESULT';
export const updateSlotResult = number => ({
    type: UPDATE_SLOT_RESULT,
    payload: { number },
})