import React, { useContext } from 'react';
import { TodosContext } from '../../Context/TodosContext';

function TodoFilters() {
    const { filter, setFilter, todosFiltered } = useContext(TodosContext);

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



/*import React from 'react';
import PropTypes from 'prop-types';

TodoFilters.propTypes = {
  todosFiltered: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

function TodoFilters(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setFilter('all');
          props.todosFiltered('all');
        }}
        className={`button filter-button ${
          props.filter === 'all' ? 'filter-button-active' : ''
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter('active');
          props.todosFiltered('active');
        }}
        className={`button filter-button ${
          props.filter === 'active' ? 'filter-button-active' : ''
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter('completed');
          props.todosFiltered('completed');
        }}
        className={`button filter-button ${
          props.filter === 'completed' ? 'filter-button-active' : ''
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;

 */
