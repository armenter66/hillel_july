import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content.tsx';
import Header from './components/Header/Header.tsx';
import { UserContext } from './contexts/Context.tsx';
import type { IUser } from './contexts/Context.tsx';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState<IUser | null>(() => {
		const saved = localStorage.getItem('user');
		return saved ? (JSON.parse(saved) as IUser) : null;
	});

	return (
		<>
			<UserContext.Provider value={{ value: user, change: setUser }}>
				<BrowserRouter>
					<Header />
					<Content />
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
