// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteButton} = props
  const {id, title} = itemDetails

  const onDelete = () => {
    deleteButton(id)
  }

  return (
    <li className="items-container">
      <p className="item-heading">{title}</p>
      <button className="item-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
