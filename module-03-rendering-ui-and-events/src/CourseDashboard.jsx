function CourseDashboard({
    isLoading,
    isError,
    isAvailable,
    isEnrolled,
    isCompleted,
}) {
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Something went wrong: {isError}</h1>;
    }

    if (!isAvailable) {
        return <h1>Course is not available</h1>;
    }

    return (
        <>
            <h1>React course</h1>
            <p>Learn everything from basics to advance.</p>
            {!isEnrolled && <button>Enroll</button>}

            {isEnrolled && !isCompleted && <h2>Your current progress is 52%</h2>}
            {isCompleted && <h2>Congratulations</h2>}
        </>
    );
}

export default CourseDashboard;
