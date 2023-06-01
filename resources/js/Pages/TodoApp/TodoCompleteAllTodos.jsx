import React, { useContext } from 'react';
import { TodosContext } from '../../Context/TodosContext';

function TodoCompleteAllTodos() {
    const { todos, setTodos, setFilter } = useContext(TodosContext);

    function completeAllTodos( complete = true ) {
        const updatedTodos = todos.map(todo => {
            todo.isComplete = complete;

            return todo;
        });

        setTodos(updatedTodos);
    }

    function atLeastOneTodoIsNotComplete() {
        return todos.some(todo => !todo.isComplete);
    }

    return (
        <div>
            {
                !atLeastOneTodoIsNotComplete() ? (
                    <div onClick={() => completeAllTodos(false)} className="button">
                        Uncheck All
                    </div>
                ) : (
                    <div onClick={() => completeAllTodos(true)} className="button">
                        Check All
                    </div>
                )}
        </div>
    );
}

export default TodoCompleteAllTodos;




/*
import React, { useContext } from 'react';
import { TodosContext } from '/resources/js/context/TodosContext';

function TodoCompleteAllTodos() {
  const { todos, setTodos, todosFiltered, filter, setFilter } = useContext(TodosContext);

    function completeAllTodos( complete = true ) {
        const updatedTodos = todos.map(todo => {
            todo.isComplete = complete;

            return todo;
        });

        setTodos(updatedTodos);
    }

  return (
    <div>
        {
            todosFiltered('active').length === 0 ? (
              <div onClick={() => completeAllTodos(false)} className="button">
                Uncheck All
              </div>
        ) : (
                <div onClick={() => completeAllTodos(true)} className="button">
                    Check All
                </div>
        )}
    </div>
  );
}


export default TodoCompleteAllTodos;
*/
