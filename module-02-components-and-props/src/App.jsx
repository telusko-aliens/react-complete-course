import './App.css'
import UserProfile from './UserProfile'


function App() {


  return (
    <>
      <UserProfile name="Naman" role="Frontend Developer" age={23} skills={['HTML', 'CSS', 'JS', 'React']} address={{ country: 'India', city: 'Mumbai' }} experience='5yrs' />
    </>
  )
}

export default App
