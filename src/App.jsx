import {useState, useEffect} from 'react'
import * as cognito from './cognito'
import {useNavigate} from 'react-router-dom'



export default function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState(cognito.getCurrentUser())

  useEffect(() => {

    },[]);

  const handleSignOut = async () => {
    try {
      await cognito.signOut()
      console.log("log out succeeded")
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Aligator App</h1>
      <h1>Welcome to the Homepage, {user.username}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}
