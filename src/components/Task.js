import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
      // If this was an onClick then clicking on the
      // 'x' icon would also toggle the reminder styling.
      onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} 
        <FaTimes
          style={{
          color: 'red',
          cursor: 'pointer'}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

export default Task
