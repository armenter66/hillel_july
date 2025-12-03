import { useEffect, useRef } from 'react';
import './NewProjectPage.css';
import { PRIORITIES } from '../../common/priorities';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { saveProjectAsync } from '../../store/features/projects.ts';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../common/menu';

export default function NewProjectPage() {
	const titleRef = useRef<HTMLInputElement | null>(null);
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
	const priorityRef = useRef<HTMLSelectElement | null>(null);
	const navigate = useNavigate();

	const { loaded: isProjectSaved } = useAppSelector((state) => state.projects);

	const dispatch = useAppDispatch();

	const handleSave = () => {
		if (!titleRef.current || !descriptionRef.current || !priorityRef.current) {
			return;
		}

		const title = titleRef.current.value;
		const description = descriptionRef.current.value;
		const priority = priorityRef.current.value;

		dispatch(saveProjectAsync({ title, description, priority }));
	};

	useEffect(() => {
		if (isProjectSaved) {
			navigate(urls.PROJECTS_URL);
		}
	}, [navigate, isProjectSaved]);

	return (
		<div className='NewProjectPage'>
			<h1 className='page-title'>Add new Project</h1>
			<form className='new-form'>
				<div className='form-row'>
					<input
						type='text'
						name='title'
						className='input'
						placeholder='Enter title'
						ref={titleRef}
					/>
				</div>
				<div className='form-row'>
					<textarea
						name='description'
						className='textarea'
						placeholder='Enter description'
						ref={descriptionRef}
					></textarea>
				</div>
				<div className='form-row'>
					<select name='priority' className='select' ref={priorityRef}>
						{Object.entries(PRIORITIES).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div>
					<button type='button' className='btn primary' onClick={handleSave}>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

{
	/* 
[
  [key, value],
  [key, value]
]
*/
}
