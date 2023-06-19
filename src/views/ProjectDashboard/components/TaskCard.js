import {useUpdateTask} from "@/hooks/useUpdateTask";
import {useState} from "react";
import styles from './TaskCard.module.css'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });


const TaskCard = ({ task, handleIsEditing, isEditing }) => {
  const { editTask, isLoading } = useUpdateTask();
  const [taskName, setTaskName] = useState(task?.name || '');
  const [taskDescription, setTaskDescription] = useState(task?.description || '');
  const [taskPriority, setTaskPriority] = useState(task?.priority || 0);
  const [taskComplexity, setTaskComplexity] = useState(task?.complexity || 0);
  const [taskDuration, setTaskDuration] = useState(task?.duration || 0);
  const [taskCost, setTaskCost] = useState(task?.cost || 0);
  const [taskCompleted, setTaskCompleted] = useState(task?.completed || false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editTask({
        id: task.id,
        name: taskName,
        description: taskDescription,
        priority: taskPriority,
        complexity: taskComplexity,
        duration: taskDuration,
        cost: taskCost,
        completed: taskCompleted
      });
      handleIsEditing(null);
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
   <div className={styles.taskCard}>
     {isEditing ? (
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
         className={styles.inputField}
         value={taskName}
         onChange={(e) => setTaskName(e.target.value)}
         required
        />
        <ReactQuill value={taskDescription} onChange={setTaskDescription} />
        <input
         type="number"
         value={taskPriority}
         onChange={(e) => setTaskPriority(Number(e.target.value))}
        />
        <input
         type="number"
         value={taskComplexity}
         onChange={(e) => setTaskComplexity(Number(e.target.value))}
        />
        <input
         type="number"
         value={taskDuration}
         onChange={(e) => setTaskDuration(Number(e.target.value))}
        />
        <input
         type="number"
         value={taskCost}
         onChange={(e) => setTaskCost(Number(e.target.value))}
        />
        <label>
          <input
           type="checkbox"
           checked={taskCompleted}
           onChange={(e) => setTaskCompleted(e.target.checked)}
          />
          Completed
        </label>
        <button className={styles.button} disabled={isLoading} type="submit">
          Update Task
        </button>
        <button className={styles.button} onClick={() => handleIsEditing()}>Cancel</button>
      </form>
     ) : (
      <div onClick={() => handleIsEditing()}>
        <h3>{task.name}</h3>
        <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      </div>
     )}
   </div>
  );
};

export default TaskCard;
