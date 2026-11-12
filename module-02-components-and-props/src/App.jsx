import './App.css'
import UserProfile from './UserProfile'


function App() {

  function handleClick() {
    console.log("I was clicked from child component")
  }

  function onMessage(message) {
    console.log(message)
  }

  return (
    <>
      <UserProfile name="Naman" role="Frontend Developer" age={23} skills={['HTML', 'CSS', 'JS', 'React']} address={{ country: 'India', city: 'Mumbai' }} experience='5yrs' click={handleClick} onMessage={onMessage} />
    </>
  )
}

export default App
