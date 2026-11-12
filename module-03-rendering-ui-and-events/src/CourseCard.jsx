function CourseCard({ title, price, instructor }) {
    function handleClick(event) {
        event.preventDefault();
        console.log(event.target.textContent);
    }
    return (
        <>
            <h1>{title}</h1>
            <h1>{price}</h1>
            <h1>{instructor}</h1>
            <button>Enroll now</button>
            <a href="https://example.com" onClick={handleClick}>
                View Course
            </a>
        </>
    );
}

export default CourseCard;
