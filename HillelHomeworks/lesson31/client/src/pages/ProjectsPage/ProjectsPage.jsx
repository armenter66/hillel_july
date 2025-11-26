import { useNavigate } from 'react-router';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './ProjectsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProjectsAsync, deleteProjectAsync } from '../../store/features/projects';
import { Row, Col } from 'antd';
import { urls } from '../../common/menu';

export default function ProjectsPage() {
  const { data: projects } = useSelector(state => state.projects);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);

  const handleClick = projectId => {
    navigate(`/tasks/${projectId}`);
  }

  const handleDelete = (id) => {
    dispatch(deleteProjectAsync(id));
  };

  return (
    <div className='ProjectsPage'>
      <button type='button' onClick={() => navigate(urls.NEW_PROJECT_URL)}>Add Project</button>
      <div className='Projects'>
        {projects.length === 0 && <span>No projects available</span>}
        <Row gutter={[8, 8]} align="middle" justify="center">
          {projects.map(project => (
            // <div key={project.id} className="ProjectItem">
              
            // </div>
            <Col key={project.id} span={8}>
              <ProjectCard {...project} onClick={handleClick} />
              <button onClick={() => handleDelete(project.id)}>Delete</button>
            </Col>
          ))}
        </Row>

      </div>
    </div>
  )
}