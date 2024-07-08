import DoneInfo from "./DoneInfo"
import NotDoneInfo from "./NotDoneInfo"

const SingleTodo = ({ todo, deleteTodo, completeTodo }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "70%",
                margin: "auto",
            }}
        >
            {todo.done ? (
                <>
                    <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
                    <DoneInfo
                        deleteTodo={deleteTodo}
                        todo={todo}
                    />
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <NotDoneInfo
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
                        todo={todo}
                    />
                </>
            )}
        </div>
    )
}

export default SingleTodo
