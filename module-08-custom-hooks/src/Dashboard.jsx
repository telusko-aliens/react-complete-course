import { useWindowSize } from "./useWindowSize";

function Dashboard() {
    const width = useWindowSize();

    return <h1>Dashboard Width: {width}px</h1>;
}

export default Dashboard;
