import React, { useContext, useState } from 'react';
import useTodoStore from '../../stores/TodoStore';
import { TodosContext } from '../../Context/TodosContext';

function TodoForm() {
    const addTodo = useTodoStore(state => state.addTodo);

    const [todoInput, setTodoInput] = useState('');

    function handleInput(event) {
        setTodoInput(event.target.value);
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
