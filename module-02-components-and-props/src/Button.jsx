// default export 
/* function Button() {
    return (
        <div>
            <button>Click me</button>
        </div>
    )
}
export default Button */



// named export 
function Button1() {
    return (
        <div>
            <button>Click me 1</button>
        </div>
    )
}

function Button2() {
    return (
        <div>
            <button>Click me 2</button>
        </div>
    )
}

export { Button1, Button2 }


