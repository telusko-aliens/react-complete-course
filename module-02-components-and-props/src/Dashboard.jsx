import Profile from "./Profile";

function Dashboard({ user }) {
    return (
        <>
            <Profile user={user} />
        </>
    );
}

export default Dashboard;
