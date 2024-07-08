const NotDoneInfo = ({ todo, deleteTodo, completeTodo }) => {
    return (
        <>
            <span>This todo is not done</span>
            <span>
                <button onClick={() => deleteTodo(todo)}> Delete </button>
                <button onClick={() => completeTodo(todo)}> Set as done </button>
            </span>
        </>
    )
}

export default NotDoneInfo
