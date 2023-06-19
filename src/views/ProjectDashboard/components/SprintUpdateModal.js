import React, { useState } from 'react';
import TaskCard from './TaskCard';
import styles from './SprintUpdateModal.module.css';
import {useTasks} from "@/hooks/useTasks";
import {useCreateTask} from "@/hooks/useCreateTask";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });


const SprintUpdateModal = ({ isOpen, onClose, sprint }) => {
  const { tasks, loading } = useTasks(sprint.id);
  const { newTask, isLoading } = useCreateTask();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState(0);
  const [taskComplexity, setTaskComplexity] = useState(0);
  const [taskDuration, setTaskDuration] = useState(0);
  const [taskCost, setTaskCost] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleIsEditing = ()=>{
    setIsEditing((!isEditing))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await newTask({
        name: taskName,
        description: taskDescription,
        priority: taskPriority,
        complexity: taskComplexity,
        duration: taskDuration,
        cost: taskCost,
        completed: taskCompleted
      });
      setTaskName('');
      setTaskDescription('');
      setTaskPriority(0);
      setTaskComplexity(0);
      setTaskDuration(0);
      setTaskCost(0);
      setTaskCompleted(false);
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
   <div className={isOpen ? styles.modal : ''}>
     {isOpen && (
      <div className={styles.modalContent}>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', marginBottom: '25px'}}>
          <h2 className={styles.title}>{sprint.name}</h2>
          {
           !isAddingTask ? (
            !isEditing && (
             <button className={styles.button} onClick={()=>setIsAddingTask(true)}>Add Task</button>
            )
           ):(
            <button className={styles.button} onClick={()=>setIsAddingTask(false)}>Go Back</button>
           )
          }
        </div>
        {isAddingTask ? (
         <form className={styles.form} onSubmit={handleSubmit}>
           <input
            className={styles.inputField}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task name"
            required
           />
           <ReactQuill value={taskDescription} onChange={setTaskDescription} />
           <input
            type="number"
            value={taskPriority}
            onChange={(e) => setTaskPriority(Number(e.target.value))}
            placeholder="Task priority"
           />
           <input
            type="number"
            value={taskComplexity}
            onChange={(e) => setTaskComplexity(Number(e.target.value))}
            placeholder="Task complexity"
           />
           <input
            type="number"
            value={taskDuration}
            onChange={(e) => setTaskDuration(Number(e.target.value))}
            placeholder="Task duration"
           />
           <input
            type="number"
            value={taskCost}
            onChange={(e) => setTaskCost(Number(e.target.value))}
            placeholder="Task cost"
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
             Save Task
           </button>
         </form>
        ): (
         loading ? (
            <div>Loading tasks...</div>
           ) : (
            tasks.map((task) => (
             <TaskCard
              key={task.id}
              task={task}
              handleIsEditing={() => setEditingTaskId(task.id)}
              isEditing={editingTaskId === task.id}
             />
            ))
           )
        )

        }

        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
     )}
   </div>
  );
};

export default SprintUpdateModal;
