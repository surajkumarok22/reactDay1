import { createContext, useState } from 'react';
import ChildA from './components/ChildA';

// step1: create context
const UserContext = createContext();
// step2: wrap all the child inside a provider
// step3 : pass the value

import './App.css'
function App() {
  const [user, setUser] = useState({name: 'Suraj'})
  return (
   <>
    <UserContext.Provider value = {user}>
    <ChildA/>
    </UserContext.Provider>
   </>
  )
}

export default App
export {UserContext }
