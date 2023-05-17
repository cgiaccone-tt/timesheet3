import React, { useContext } from 'react';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAllTodos from './TodoCompleteAllTodos';
import TodoFilters from './TodoFilters';
import useToggle from '/resources/js/hooks/useToggle';
import { TodosContext } from '/resources/js/context/TodosContext';


function TodoList() {
    const { todos, setTodos, todosFiltered } = useContext(TodosContext);
    const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle('isFeaturesOneVisible', true);
    const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle('isFeaturesTwoVisible', true);

    function deleteTodo(id) {
        setTodos([...todos].filter(todo => todo.id !== id));
    }

    function completeTodo(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function markAsEditing(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = true;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function updateTodo(event, id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                if (event.target.value.trim().length === 0) {
                    todo.isEditing = false;
                    return todo;
                }
                todo.title = event.target.value;
                todo.isEditing = false;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function cancelEdit(event, id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = false;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    return (
        <>
            <ul className="todo-list">
                {todosFiltered().map((todo, index) => (
                    <li key={todo.id} className="todo-item-container">
                        <div className="todo-item">
                            <input
                                type="checkbox"
                                onChange={() => completeTodo(todo.id)}
                                checked={todo.isComplete ? true : false}
                            />

                            {!todo.isEditing ? (
                                <span
                                    onDoubleClick={() => markAsEditing(todo.id)}
                                    className={`todo-item-label ${
                                        todo.isComplete ? 'line-through' : ''
                                    }`}
                                >
                  {todo.title}
                </span>
                            ) : (
                                <input
                                    type="text"
                                    onBlur={event => updateTodo(event, todo.id)}
                                    onKeyDown={event => {
                                        if (event.key === 'Enter') {
                                            updateTodo(event, todo.id);
                                        } else if (event.key === 'Escape') {
                                            cancelEdit(event, todo.id);
                                        }
                                    }}
                                    className="todo-item-input"
                                    defaultValue={todo.title}
                                    autoFocus
                                />
                            )}
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="x-button">
                            <svg
                                className="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="toggles-container">
                <button onClick={setFeaturesOneVisible} className="button">
                    Features One Toggle
                </button>
                <button onClick={setFeaturesTwoVisible} className="button">
                    Features Two Toggle
                </button>
            </div>

            {isFeaturesOneVisible && (
                <div className="check-all-container">
                    <TodoCompleteAllTodos />

                    <TodoItemsRemaining />
                </div>
            )}

            {isFeaturesTwoVisible && (
                <div className="other-buttons-container">
                    <TodoFilters />
                    <div>
                        <TodoClearCompleted />
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoList;


/*
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoCompleteAllTodos from './TodoCompleteAllTodos';
import TodoFilters from './TodoFilters';
import useToggle from '/resources/js/hooks/useToggle';

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    todosFiltered: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    remaining: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    completeAllTodos: PropTypes.func.isRequired,
};

function TodoList(props) {
    const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle('isFeaturesOneVisible', true, );
    const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle('isFeaturesTwoVisible', false);
    const [filter, setFilter] = useState('all');

    return (
        <>
            <ul className="todo-list">
                {props.todosFiltered(filter).map((todo, index) => (
                    <li key={todo.id} className="todo-item-container">
                        <div className="todo-item">
                            <input
                                type="checkbox"
                                onChange={() => props.completeTodo(todo.id)}
                                checked={todo.isComplete ? true : false}
                            />

                            {!todo.isEditing ? (
                                <span
                                    onDoubleClick={() => props.markAsEditing(todo.id)}
                                    className={`todo-item-label ${
                                        todo.isComplete ? 'line-through' : ''
                                    }`}
                                >
                  {todo.title}
                </span>
                            ) : (
                                <input
                                    type="text"
                                    onBlur={event => props.updateTodo(event, todo.id)}
                                    onKeyDown={event => {
                                        if (event.key === 'Enter') {
                                            props.updateTodo(event, todo.id);
                                        } else if (event.key === 'Escape') {
                                            props.cancelEdit(event, todo.id);
                                        }
                                    }}
                                    className="todo-item-input"
                                    defaultValue={todo.title}
                                    autoFocus
                                />
                            )}
                        </div>
                        <button
                            onClick={() => props.deleteTodo(todo.id)}
                            className="x-button"
                        >
                            <svg
                                className="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="toggles-container">
                <button onClick={setFeaturesOneVisible} className="button">
                    Features One Toggle
                </button>
                <button onClick={setFeaturesTwoVisible} className="button">
                    Features Two Toggle
                </button>
            </div>

            {isFeaturesOneVisible && (
                <div className="check-all-container">
                    <TodoCompleteAllTodos
                        completeAllTodos={props.completeAllTodos}
                        todosFiltered={props.todosFiltered}
                    />

                    <TodoItemsRemaining remaining={props.remaining} />
                </div>
            )}

            {isFeaturesTwoVisible && (
                <div className="other-buttons-container">
                    <TodoFilters
                        todosFiltered={props.todosFiltered}
                        filter={filter}
                        setFilter={setFilter}
                    />
                    <div>
                        <TodoClearCompleted clearCompleted={props.clearCompleted} />
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoList;

 */
