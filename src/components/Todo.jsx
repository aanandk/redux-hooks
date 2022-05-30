import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completedTodo, deleteTodo, editTodo } from "../redux/actions";

const Todo = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [task, setTask] = useState('');
    // const [taskList, setTaskList] = useState([]);

    const inputRef = useRef(true);

    const changeFocus = () => {
        console.log('ref', inputRef.current)
        inputRef.current.disabled = false;
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if (task !== '') {
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                todo: task,
                isCompleted: false
            }
            // setTaskList([...taskList, { 'taskList': taskDetails }])
            dispatch(addTodo(taskDetails))
            setTask('')
        }
    }

    const editTask = (id, value, e) => {
        // console.log(e.target.value);
        if (e.which === 13) {
            dispatch(editTodo({ id, todo: value }))
            inputRef.current.disabled = true;
        }
    }

    const deleteTask = id => {
        // console.log('del-id', id)
        dispatch(deleteTodo(id))
    }
    const completedTask = (id) => {
        // dispatch(completedTask(id))
        dispatch(completedTodo(id))
    }
    // console.log('taskList', taskList)
    console.log('todos', todos)
    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" name="todo" id="todo" placeholder="enter task"
                onChange={(e) => handleChange(e)}
                value={task} />
            <button onClick={addTask}>Add</button>

            {todos.length > 0 ?
                (<ul>
                    {todos.map(todo =>
                    (<li key={todo.id}>
                        {/* {todo.todo} */}
                        <textarea ref={inputRef}
                            disabled={inputRef}
                            defaultValue={todo.todo}
                            onKeyPress={e => editTask(todo.id, inputRef.current.value, e)} />
                        <button onClick={changeFocus}>Edit</button>
                        <button onClick={() => completedTask(todo.id)}>Complete</button>
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                    </li>)
                    )}
                </ul>) : null}

        </div>
    )
}

export default Todo;