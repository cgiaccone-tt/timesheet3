import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../../Context/TodosContext';

function TodoItemsRemaining() {
    const { todos } = useContext(TodosContext);

    function remainingCalculation() {
        // console.log('calculating remaining todos. This is slow.');
        // for (let index = 0; index < 2000000000; index++) {}
        return todos.filter(todo => !todo.isComplete).length;
    }

    const remaining = useMemo(remainingCalculation, [todos]);

    return <span>{remaining} items remaining</span>;
}

export default TodoItemsRemaining;



/*
import React from 'react';

import PropTypes from 'prop-types';

TodoItemsRemaining.propTypes = {
  remaining: PropTypes.number.isRequired,
};

function TodoItemsRemaining(props) {
  return <span>{props.remaining} items remaining</span>;
}

export default TodoItemsRemaining;

 */
