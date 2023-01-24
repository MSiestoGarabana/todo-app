import { Todo } from "../interfaces/interfaces"

interface todoItemProps {
    todo: Todo
}

export const TodoItem = ({ todo }: todoItemProps) => {

    const handleDbClick = () => {
        console.log('handleClick:', todo.desc)
    }

  return (
    <li onDoubleClick={handleDbClick}>
        {todo.desc}
    </li>
  )
}
