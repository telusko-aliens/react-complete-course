import { useNavigate } from "react-router";
function Home() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate("/about");
    }
    function handleBack() {
        navigate(-1);
    }
    return (
        <>
            <h2>Welcome to the website.</h2>
            <h2>This is a home page</h2>
            <button onClick={handleLogin}>Login</button>{" "}
            <button onClick={handleBack}>Go back</button>
        </>
    );
}

export default Home;
