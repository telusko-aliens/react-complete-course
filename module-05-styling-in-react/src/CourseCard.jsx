import styles from "./CourseCard.module.css";
function CourseCard() {
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
            <button className={styles.button}>Enroll Now</button>
        </div>
    );
}

export default CourseCard;
