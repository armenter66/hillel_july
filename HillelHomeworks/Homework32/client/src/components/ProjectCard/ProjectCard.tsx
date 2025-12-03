import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './ProjectCard.css';

interface ProjectCardProps {
	id: string;
	title: string;
	description: string;
	priority: string;
	onClick: (id: string) => void;
}

export default function ProjectCard({
	id,
	title,
	description,
	priority,
	onClick,
}: ProjectCardProps) {
	const handleClick = () => {
		onClick && onClick(id);
	};
	return (
		<div className='ProjectCard' onClick={handleClick}>
			<h3>{title}</h3>
			<PriorityLabel priority={priority} />
			<p>{description}</p>
		</div>
	);
}
