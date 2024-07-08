/* eslint-disable react/jsx-key */
import SingleTodo from "./SingleTodo"

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <>
            {todos.map(todo => <SingleTodo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
                ).reduce((acc, cur) => [...acc, <hr />, cur], [])}
        </>
    )
}

export default TodoList
