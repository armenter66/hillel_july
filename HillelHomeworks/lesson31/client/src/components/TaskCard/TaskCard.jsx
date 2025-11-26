import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './TaskCard.css';
import { Card, Button } from 'antd';

export default function TaskCard({ id, title, description, priority, onDelete }) {
  return (
    // <div className='TaskCard'>
    //   <h3>{title}</h3>
    //   <PriorityLabel priority={priority} />
    //   <p>
    //     {description.slice(0, 100)}
    //   </p>
    //   <button onClick={() => onDelete(id)}>Delete</button>
    // </div>

    <Card
      hoverable
      style={{ width: '100%' }}
      title={<strong>{title}</strong>}
      actions={[
        <Button danger onClick={() => onDelete(id)}>Delete</Button>,
      ]}
    >
      <PriorityLabel priority={priority} />
      <p>{description}</p>
    </Card>
  )
}