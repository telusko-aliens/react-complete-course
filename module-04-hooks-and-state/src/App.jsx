import { useState } from "react";
import "./App.css";

function App() {
  // const [user, setUser] = useState(['Naman', 'Gaurav', 'Cyp']);  {/* to update user */}
  const [user, setUser] = useState([
    { id: 1, name: "Naman" },
    { id: 2, name: "Gaurav" },
  ]);

  // const handleUpdate = () => {

  //   const updatedUser = [...user]
  //   updatedUser[0] = 'Rahul'
  //   setUser(updatedUser)

  // }
  const handleAdd = () => {
    setUser((prevItems) => [
      ...prevItems,
      {
        id: 3,
        name: "cyp",
      },
    ]);
  };

  const handleDelete = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };
  return (
    <>
      {/* <p>{user[0]}</p> */} {/* updated user */}
      {/* <button onClick={handleUpdate}>Update user</button> <br /> */}
      {user.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <button onClick={handleAdd}>Add user</button> <br />
      <button onClick={() => handleDelete(2)}>Delete user</button>
    </>
  );
}

export default App;
