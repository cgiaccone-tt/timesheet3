import { useEffect, useState, useRef } from 'react';
import useTodoStore from '../../stores/TodoStore'; 
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../../hooks/useLocalStorage';
import '../../../css/TodoReset.css';
import '../../../css/TodoApp.css';
import { TodosContext } from '../../Context/TodosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function TodoApp() {
    const todos = useTodoStore(state => state.todos);
    const setTodos = useTodoStore(state => state.setTodos);
    const idForTodo = useTodoStore(state => state.idForTodo);
    const setIdForTodo = useTodoStore(state => state.setIdForTodo);
    const todosFiltered = useTodoStore(state => state.todosFiltered);
    const [name, setName] = useLocalStorage('name', '');

    const nameInputEl = useRef(null);
    //const [todos, setTodos] = useLocalStorage('todos', []);

    //const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // console.log('use effect running');
        nameInputEl.current.focus();

        // setName(JSON.parse(localStorage.getItem('name')) ?? '');

        return function cleanup() {
            // console.log('cleaning up');
        };
    }, []);

    function handleNameInput(event) {
        setName(event.target.value);
        // localStorage.setItem('name', JSON.stringify(event.target.value));
    }

    return (
        <TodosContext.Provider
            value={{
                filter,
                setFilter,
            }}
        >
                <div className="todo-app">
                    <div className="name-container">
                        <h2>What is your name?</h2>
                        <form action="#">
                            <input
                                type="text"
                                ref={nameInputEl}
                                className="todo-input"
                                placeholder="What is your name"
                                value={name}
                                onChange={handleNameInput}
                            />
                        </form>

            <CSSTransition
              in={name.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
              <p className="name-label">Hello, {name}</p>
            </CSSTransition>
                    </div>
                    <h2>Todo App</h2>
                    <TodoForm />

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={todos.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
                    {todos.length > 0 ? <TodoList /> : <NoTodos />}
            </CSSTransition>
          </SwitchTransition>

          {/* <CSSTransition
            in={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <TodoList />
          </CSSTransition>

          <CSSTransition
            in={todos.length === 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
                    <NoTodos />
          </CSSTransition> */}
            </div>
    </TodosContext.Provider>
    );
}

export default TodoApp;
