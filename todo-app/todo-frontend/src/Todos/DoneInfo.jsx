const DoneInfo = ({ todo, deleteTodo }) => {
    return (
        <>
            <span>This todo is done</span>
            <span>
                <button onClick={() => deleteTodo(todo)}> Delete </button>
            </span>
        </>
    )
}
export default DoneInfo
