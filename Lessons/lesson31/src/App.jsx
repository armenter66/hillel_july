import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import Page404 from './pages/Page404'
import { useState } from 'react'
import ItemPage from './pages/ItemPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { LanguageContext, UserContext } from './contexts/contexts'
import AuthPage from './pages/AuthPage'
import RegisterPage from './pages/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MONEY, GET_MONEY } from './store/actions'
import TodoItems from './pages/TodoItems'

const defaultItems = [{ id: 1, title: 'Apple', price: 10 }, { id: 2, title: 'Banana', price: 15 }]

function App() {
  const [items, _setItems] = useState(defaultItems);
  const [user, setUser] = useState(null);

  const userBalance = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handlePayMoney = () => {
    dispatch({type: GET_MONEY, payload: { amount: 1000 } });
  }

  const handleAddMoney = () => {
    dispatch({type: ADD_MONEY, payload: { amount: 2000 }});
  } 


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

        {userBalance.money}
        <button type="button" onClick={handleAddMoney}>Add more money</button>
        <button type="button" onClick={handlePayMoney}>Pay money</button>


          <main className="site-main container">
            <Routes>

              {user ?
                <>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/list" element={<ListPage items={items} />} />
                  <Route path="/list/:id" element={<ItemPage items={items} />} />
                  <Route path="/todos" element={<TodoItems />} />
                </> :
                <>
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/signup" element={<RegisterPage />} />
                </>}
              {/* <Route path="/user" element={<UserPage />} /> */}

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
