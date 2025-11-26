import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './TasksPage.css';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useEffect, useState } from 'react';
import { getTasksAsync, deleteTaskAsync, createTaskAsync } from '../../store/features/tasks';
import { getProjectsAsync } from "../../store/features/projects";
import { Row, Col } from 'antd';


export default function TasksPage() {
  const { data: tasks } = useSelector(state => state.tasks);
  const { data: projects } = useSelector(state => state.projects);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTaskAsync(id));
  };

  const [newTask, setNewTask] = useState({
  title: '',
  description: '',
  priority: 'low',
  projectId: '',
});

const handleCreate = () => {
  dispatch(createTaskAsync(newTask));
};

  useEffect(() => {
    dispatch(getTasksAsync(projectId));
  }, [dispatch, projectId]);

  

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);


  return (

    <div className='TasksPage'>
      <select
            value={projectId || ""}
            onChange={(e) => {
              const newId = e.target.value;
              window.location.href = `/tasks/${newId}`;
            }}
          >
            <option value="">Select project</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>

      <div className="NewTaskForm">
          <h3>Create new task</h3>
  
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />

          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />

          <select
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>

          <select
            value={newTask.projectId}
            onChange={(e) =>
              setNewTask({ ...newTask, projectId: e.target.value })
            }
          >
            <option value="">Select project</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>

          <button onClick={handleCreate}>Create task</button>
      </div>

      {tasks.length === 0 && <span>No tasks available</span>}
      {/* {tasks.map(task => (
        <TaskCard key={task.id} {...task} onDelete={handleDelete}/>
      ))} */}

      <Row gutter={[24, 24]} align="middle" justify="center">
        {tasks.map(task => (
          <Col key={task.id} xs={24} sm={12} md={8} lg={6}>
            <TaskCard {...task} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </div>
  )
}