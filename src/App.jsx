import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
import LoggedIn from './components/LoggedIn'
import facade from "./apiFacade";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }

  const login = (user, pass) => {
    facade.login(user,pass)
      .then(() => setLoggedIn(true))
      .catch((err) => {
        if (err.status) {
            err.fullError.then((e) => setError(e));
        } else {
            console.log("Fatal error", err);
        }
    });
  }

  return (
    <div>
      {!loggedIn ? (<div>
        <LogIn login={login}/>
        {error && (<p>{error.message}</p>)}
        </div>) :
        (<div>
          {error && setError(null)}
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}
export default App;