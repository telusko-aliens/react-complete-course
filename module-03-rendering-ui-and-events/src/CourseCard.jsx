function CourseCard({ title, price, instructor }) {
    function handleEnroll(event) {
        event.stopPropagation();
        alert("Enrolling in the course...");
    }
    return (
        <>
            <div onClick={() => alert("opening course details...")}>
                <h1>{title}</h1>
                <h1>{price}</h1>
                <h1>{instructor}</h1>
                <button onClick={handleEnroll}>Enroll now</button>
            </div>
        </>
    );
}

export default CourseCard;
