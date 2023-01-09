import Axios from "axios";

import { getTodoById } from "api/getTodoId";

import { TodoBody } from "types/todos.type";
import { TodoStatus } from "enums/todos.enum";

export const putTodo =async (id:string):Promise<void> => {
    try {
        const getTodoRes = await getTodoById(id)

        if (getTodoRes.status === 200){
            const todo = getTodoRes.data.result
            const body: TodoBody = {
                title: todo.title
            }

            todo.status === TodoStatus.completed ?
             body.status = 'uncompleted' :
             body.status = 'completed'

            await Axios({
                method: 'PUT',
                url: `http://localhost:8000/app/todo/${id}`,
                data: body
            })
        }
    } catch (error) {
        throw new Error(error)
    }
}