import { useState } from "react"
import heroImage from "../assets/images/image-jeremy.png"

function TimeFrames(props) {
    const [active, setActive] = useState('weekly')

    let toBeStyled;

    const handleClick = (e) => {
        const value = e.target.getAttribute('value')
        setActive(value)
        props.handleTimeframe(value)
        console.log(value)
    }
    
    return (
        <ul className="flex space-between timeframes container">
            <li>
                <a href="#" onClick={handleClick} value='daily'>Daily</a>  
            </li>
            <li>
                <a href="#" onClick={handleClick} value='weekly'>Weekly</a>
            </li>
            <li>
                <a href="#" onClick={handleClick} value='monthly'>Monthly</a>
            </li>
        </ul>
    )
}
function Hero() {
    return (
        <div className="flex hero container">
            <img className="hero-image" src={heroImage} alt="Hero Image" />
            <div className="texts flex column">
                <p>Report for</p>
                <h2>Jeremy Robson</h2>
            </div>
        </div>
    )
}
export default function HeroContainer(props) {
    return (
        <div className="hero-container container">
            <Hero />
            <TimeFrames handleTimeframe={props.handleTimeframe} />
        </div>
    )
}