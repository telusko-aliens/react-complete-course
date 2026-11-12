import styles from "./Badge.module.css";

function Badge({ level }) {
    const levelClass =
        level === "Beginner"
            ? styles.beginner
            : styles.intermediate;

    return (
        <span className={`${styles.badge} ${levelClass}`}>
            {level}
        </span>
    );
}

export default Badge;