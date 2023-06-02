import React, { useContext } from 'react';
import { TodosContext } from '../../Context/TodosContext';
import useTodoStore from '../../stores/TodoStore'; 

function TodoFilters() {
    const { filter, setFilter } = useContext(TodosContext);
    const todosFiltered = useTodoStore(state => state.todosFiltered);

    return (
        <div>
            <button
                onClick={() => {
                    setFilter('all');
                    todosFiltered();
                }}
                className={`button filter-button ${
                    filter === 'all' ? 'filter-button-active' : ''
                }`}
            >
                All
            </button>
            <button
                onClick={() => {
                    setFilter('active');
                    todosFiltered();
                }}
                className={`button filter-button ${
                    filter === 'active' ? 'filter-button-active' : ''
                }`}
            >
                Active
            </button>
            <button
                onClick={() => {
                    setFilter('completed');
                    todosFiltered();
                }}
                className={`button filter-button ${
                    filter === 'completed' ? 'filter-button-active' : ''
                }`}
            >
                Completed
            </button>
        </div>
    );
}

export default TodoFilters;