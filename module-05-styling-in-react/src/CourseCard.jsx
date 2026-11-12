import "./CourseCard.css";
function CourseCard() {
    return (
        <div className="course-card">
            <h2 className="course-title"> React Complete Course</h2>
            <p className="course-description">
                Learn React from fundamentals to real-world application development.
            </p>
            <button className="enroll-button">Enroll Now</button>
        </div>
    );
}

export default CourseCard;
