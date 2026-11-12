function OnSale({ isOnSale }) {
    if (!isOnSale) {
        return null;
    } else {
        return (
            <>
                <h4>Special offer</h4>
            </>
        );
    }
}

export default OnSale;
