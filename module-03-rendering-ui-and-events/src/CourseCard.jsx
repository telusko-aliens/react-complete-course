
function CourseCard({ title, price, instructor }) {
    function handleButton(title) {
        alert(`Enrolled Successfully ${title}`)
    }
    return (
        <>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{instructor}</h1>
            <button onClick={() => handleButton(title)}>Enroll now</button>
        </>
    )
}

export default CourseCard
