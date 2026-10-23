import { useState } from "react";

export default function App() {
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [area, setArea] = useState('')
    const [perimeter, setPerimeter] = useState('')
    const [message, setMessage] = useState(null)


    const getArea = () => {
        setLength(parseFloat(length))
        setWidth(parseFloat(width))
        setArea(length * width)
        setMessage(`The area of the rectangle is ${area}`)
        return message
    }

    const getPerimeter = () => {
        const userLength = parseFloat(length)
        const userWidth = parseFloat(width)
        setPerimeter((userLength + userWidth) * 2)
        setMessage(`The perimeter of the rectangle is ${perimeter}`)
    }

    return (
        <div>
            <p>Rectangle Solver</p>
            <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
            />
            <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
            />
            <br />
            <button onClick={() => getArea()}>Get Area</button>
            <button onClick={() => getPerimeter()}>Get Perimeter</button>
            <p>{message}</p>
        </div>
    )
}