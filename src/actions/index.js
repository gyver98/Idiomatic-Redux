import { v4 } from 'node-uuid';

export const receiveTodos = (response) => ({
    type: 'RECEIVE_TODOS',
    respose,
});

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text,
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});
