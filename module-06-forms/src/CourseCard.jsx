import { useState } from "react";

function CourseCard() {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [level, setLevel] = useState("");

    return (
        <form>
            <p>{name}</p>
            <textarea
                value={name}
                onChange={() => setName(event.target.value)}
                className="border border-white mt-3 mb-5"
            />
            <br />
            <select
                value={course}
                onChange={(event) => setCourse(event.target.value)}
                className="mb-5"
            >
                <option value="">Select course</option>
                <option value="react">React</option>
                <option value="javascript">JavaScript</option>
                <option value="node">Node.js</option>
                <option value="css">CSS</option>
            </select>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                />
                React
            </label>
            <br /> <br />
            <label className="mr-5">
                <input
                    type="radio"
                    name="level"
                    value="beginner"
                    checked={level === "beginner"}
                    onChange={(event) => setLevel(event.target.value)}
                    className="mr-2"
                />
                Beginner
            </label>
            <label>
                <input
                    type="radio"
                    name="level"
                    value="advanced"
                    checked={level === "advanced"}
                    onChange={(event) => setLevel(event.target.value)}
                    className="mr-2"
                />
                Advanced
            </label>
        </form>
    );
}

export default CourseCard;
