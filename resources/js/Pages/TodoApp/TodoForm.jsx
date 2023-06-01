import React, { useContext, useState } from 'react';
import { TodosContext } from '../../Context/TodosContext';

function TodoForm() {
    const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);

    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function addTodo(event) {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        setTodos([
            ...todos,
            {
                id: idForTodo,
                title: todoInput,
                isComplete: false,
                isEditing: false,
            },
        ]);

        setIdForTodo(prevIdForTodo => prevIdForTodo + 1);

        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={addTodo}>
            <input
                type="text"
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
    );
}

export default TodoForm;



/*import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {
    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        props.addTodo(todoInput);

        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
    );
}

export default TodoForm;

 */
