import { Route, Routes } from 'react-router';
import './Content.css';
import AuthForm from '../AuthForm/AuthForm.tsx';
import { menuItems } from '../../common/menu';

import { useContext } from 'react';
import { UserContext } from '../../contexts/Context';

interface ProtectedProps {
	children: React.ReactNode;
}

function Protected({ children }: ProtectedProps) {
	const user = useContext(UserContext);

	if (!user.value) {
		return <div style={{ padding: '20px' }}>Please sign in first</div>;
	}

	return children;
}

export default function Content() {
	return (
		<Routes>
			<Route path='/auth' element={<AuthForm />} />
			{menuItems.map(({ path, Component }) => (
				<Route
					key={path}
					path={path}
					element={
						path === '/projects' || path === '/tasks' ? (
							<Protected>
								<Component />
							</Protected>
						) : (
							<Component />
						)
					}
				/>
			))}
		</Routes>
	);
}
