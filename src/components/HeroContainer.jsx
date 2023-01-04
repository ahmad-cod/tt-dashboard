import { useState, useRef } from "react"
import heroImage from "../assets/images/image-jeremy.png"

function TimeFrames(props) {
    const [active, setActive] = useState('weekly')
    const timeframeRef = useRef(null)
    const dailyRef = useRef(null)
    const weeklyRef = useRef(null)
    const monthlyRef = useRef(null)

    let toBeStyled;

    const handleClick = (e) => {
        const value = e.target.getAttribute('value')
        
        setActive(value)
        e.target.style.color = 'white'
        console.log(e.target.style)
        const myTimeframes = timeframeRef.current
        for (const child of myTimeframes.childNodes) {
            child.style.color = 'black'
            if(child.innerText.toLowerCase() == active) {
                child.style.color = 'white'
                // child.toggleAttribute('active')
            }
                console.log(active, child.innerText)
            
        }
        // (`${active}Ref`).current.style.color = 'white'
        // if(active == 'daily') {
        //     dailyRef.current.style.color = 'white'
        //     monthlyRef.current.style.color = 'black'
        //     weeklyRef.current.style.color = 'black'
        // }
        // else if(active == 'weekly') {
        //     weeklyRef.current.style.color = 'white'
        //     dailyRef.current.style.color = 'black'
        //     monthlyRef.current.style.color = 'black'
            
        // }
        // else {
        //     monthlyRef.current.style.color = 'white'
        //     weeklyRef.current.style.color = 'black'
        //     dailyRef.current.style.color = 'black'

        // }
        // console.log(timeframeRef.current, active)
        
        props.handleTimeframe(value)
    }
    
    return (
        <ul className="flex space-between timeframes container" ref={timeframeRef}>
            <li>
                <a href="#" onClick={handleClick} ref={dailyRef} value='daily'>Daily</a>  
            </li>
            <li>
                <a href="#" onClick={handleClick} ref={weeklyRef} value='weekly'>Weekly</a>
            </li>
            <li>
                <a href="#" onClick={handleClick} ref={monthlyRef} value='monthly'>Monthly</a>
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