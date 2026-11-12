import "./App.css";
import Modal from "./Modal";

function App() {
  return (
    <>
      <Modal>
        <h2>Delete Account</h2>
        <p>Are you sure you want to delete the account?</p>
        <button>Delete Account</button>
      </Modal>

      <Modal>
        <h2>Logout Account</h2>
        <p>Are you sure you want to logout the account?</p>
        <button>cancel</button>
        <button>ok</button>
      </Modal>
    </>
  );
}

export default App;
