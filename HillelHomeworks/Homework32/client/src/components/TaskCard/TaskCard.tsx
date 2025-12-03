import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './TaskCard.css';
import { Card, Button } from 'antd';

interface TaskCardProps {
	id: string;
	title: string;
	description: string;
	priority: string;
	onDelete: (id: string) => void;
}

export default function TaskCard({
	id,
	title,
	description,
	priority,
	onDelete,
}: TaskCardProps) {
	return (
		<Card
			hoverable
			style={{ width: '100%' }}
			title={<strong>{title}</strong>}
			actions={[
				<Button danger onClick={() => onDelete(id)}>
					Delete
				</Button>,
			]}
		>
			<PriorityLabel priority={priority} />
			<p>{description}</p>
		</Card>
	);
}
