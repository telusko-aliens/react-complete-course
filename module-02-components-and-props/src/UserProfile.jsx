function UserProfile({ name = 'Rahul', role, age, skills, address, ...rest }) {
    return (
        <>
            <h1>Name: {name}</h1>
            <h2>Role: {role}</h2>
            <h2>Age: {age}</h2>
            <h2>Skills: {skills[2]}</h2>
            <h2>Address: {address.country}</h2>
            <h2>Experience: {rest.experience}</h2>
        </>
    )
}

export default UserProfile
