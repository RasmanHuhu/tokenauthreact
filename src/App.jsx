import { useState } from 'react'
import './App.css'
import LogIn from './components/login'
import LoggedIn from './components/LoggedIn'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout()
setLoggedIn(false)
  }

  const login = (user, pass) => {
    facade.login(user,pass)
.then(res =>setLoggedIn(true));
  }

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}
export default App;