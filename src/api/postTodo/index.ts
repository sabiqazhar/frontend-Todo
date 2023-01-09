import Axios from "axios";

import { TodoBody } from "types/todos.type";

export const postTodo =async (data:TodoBody):Promise<void> => {
    try {
        await Axios({
            method: 'POST',
            url: 'http://localhost:8000/app/todo',
            data
        })
    } catch (error) {
        throw new Error(error)
    }
}