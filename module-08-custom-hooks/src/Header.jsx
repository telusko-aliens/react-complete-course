import { useWindowSize } from "./useWindowSize";

function Header() {
    const width = useWindowSize();

    return <h1>Header Width: {width}px</h1>;
}

export default Header;
