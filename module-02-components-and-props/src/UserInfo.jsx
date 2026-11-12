function UserInfo({ user }) {
    return (
        <>
            <h1>name: {user.name}</h1>
            <h2>role: {user.role}</h2>
        </>
    );
}

export default UserInfo;
