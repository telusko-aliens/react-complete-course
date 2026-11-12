import "./CourseCard.css";
function CourseCard() {
    const isAvailable = true;
    const cardStyle = {
        width: 320,
        height: 100,
        padding: 20,
        border: "1px solid gray",
        borderRadius: 20,
        margin: "50px auto 0",
    };
    return (
        <div style={cardStyle}>
            <h2 className="course-title"> React Complete Course</h2>
            <p className="course-description">
                Learn React from fundamentals to real-world application development.
            </p>
            <button style={{ backgroundColor: isAvailable ? "green" : "red" }}>
                {isAvailable ? "Enroll Now" : "Sold out"}
            </button>
        </div>
    );
}

export default CourseCard;
