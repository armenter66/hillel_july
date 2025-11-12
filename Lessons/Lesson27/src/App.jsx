import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import Page404 from './pages/Page404'
import Menu from './components/Menu'
import { useState } from 'react'
import ItemPage from './pages/ItemPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageContext, UserContext } from './contexts/contexts'
import UserPage from './pages/UserPage'

const defaultItems = [{ id: 1, title: 'Apple', price: 10 }, { id: 2, title: 'Banana', price: 15 }]
const defaultUser = { id: 1, name: 'Jack', role: 'admin' };

function App() {
  const [items, _setItems] = useState(defaultItems);
  const [user, setUser] = useState(defaultUser);

  const handleUserChange = (updatedUser) => {
    if (updatedUser.id) {
      setUser(updatedUser);
    }
  }

  const currentUserContextValue = { value: user, change: handleUserChange };

  return (
    <BrowserRouter>
      <LanguageContext.Provider value="EN">
        <UserContext.Provider value={currentUserContextValue}>
          <Header />
          <main className="site-main container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/list" element={<ListPage items={items} />} />
              <Route path="/list/:id" element={<ItemPage items={items} />} />
              <Route path="/user" element={<UserPage /> } />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </main>
          <Footer />
        </UserContext.Provider>
      </LanguageContext.Provider>

    </BrowserRouter>
  )
}

export default App
