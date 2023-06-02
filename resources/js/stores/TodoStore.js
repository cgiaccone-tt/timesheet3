import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set, get) => ({
  todos: [
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
      isEditing: false,
    },
  ],
  idForTodo: 4,
  filter: 'all',
  addTodo: todoTitle =>
    set(state => ({
      todos: [
        ...state.todos,
        {
          id: state.idForTodo,
          title: todoTitle,
          isComplete: false,
          isEditing: false,
        },
      ],
      idForTodo: state.idForTodo + 1,
    })),
  deleteTodo: id =>
    set(state => ({
      todos: [...state.todos].filter(todo => todo.id !== id),
    })),
  completeTodo: id =>
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    })),
  markAsEditing: id =>
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.isEditing = true;
        }

        return todo;
      }),
    })),
  updateTodo: (event, id) =>
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          if (event.target.value.trim().length === 0) {
            todo.isEditing = false;
            return todo;
          }
          todo.title = event.target.value;
          todo.isEditing = false;
        }
        return todo;
      }),
    })),
  cancelEdit: (event, id) =>
    set(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.isEditing = false;
        }
        return todo;
      }),
    })),
  completeAllTodos: () =>
    set(state => ({
      todos: state.todos.map(todo => {
        todo.isComplete = true;
        return todo;
      }),
    })),
    todosFiltered: () => 
        set(state => {
            todos: state.todos.map(
                todo => {
                    if (state.filter === 'all') {
                        //return state.todos;
                        return todo;
                    } else if (state.filter === 'active' && !todo.isComplete) {
                        return todo
                    } else if (state.filter === 'completed' && todo.isComplete) {
                        return todo;
                    }
                }
            )
        }),  
  remaining: () => get().todos.filter(todo => !todo.isComplete).length,
});

store = devtools(store);
store = persist(store, { name: 'todos' });

const useTodoStore = create(store);

export default useTodoStore;
