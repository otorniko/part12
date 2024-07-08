import { render, screen, fireEvent } from "@testing-library/react"
import SingleTodo from "../Todos/SingleTodo"
import { describe, expect, vi } from "vitest"

describe("SingleTodo", () => {
    const todo = {
        text: "text todo",
        done: false,
    }

    test("renders todo", () => {
        console.log('where')
        render(
            <SingleTodo
                todo={todo}
                deleteTodo={vi.fn()}
                completeTodo={vi.fn()}
            />
        )
        const todoElement = screen.getByText(todo.text)
        expect(todoElement).toBeInTheDocument()
    })
    test("calls deleteTodo when delete button is clicked", () => {
        const deleteTodoMock = vi.fn()
        render(
            <SingleTodo
                todo={todo}
                deleteTodo={deleteTodoMock}
                completeTodo={vi.fn()}
            />
        )
        const deleteButton = screen.getByRole("button", { name: /delete/i })
        fireEvent.click(deleteButton)
        expect(deleteTodoMock).toHaveBeenCalledTimes(1)
    })

    test("calls completeTodo when complete button is clicked", () => {
        const completeTodoMock = vi.fn()
        render(
            <SingleTodo
                todo={todo}
                deleteTodo={vi.fn()}
                completeTodo={completeTodoMock}
            />
        )
        const completeButton = screen.getByRole("button", { name: /Set as done/i })
        fireEvent.click(completeButton)
        expect(completeTodoMock).toHaveBeenCalledTimes(1)
    })

    test("renders todo as completed when done is true", () => {
        const completedTodo = {
            text: "completed todo",
            done: true,
        }
        render(
            <SingleTodo
                todo={completedTodo}
                deleteTodo={vi.fn()}
                completeTodo={vi.fn()}
            />
        )
        const todoElement = screen.getByText(completedTodo.text)
        expect(todoElement).toHaveStyle({ textDecoration: "line-through" })
    })
})
