import { useState, useRef } from "react"
import heroImage from "../assets/images/image-jeremy.png"

function TimeFrames(props) {
    const [activeTimeframe, setActiveTimeframe] = useState('weekly')
    const dailyRef = useRef(null)
    const weeklyRef = useRef(null)
    const monthlyRef = useRef(null)

    const handleClick = (e) => {
        const value = e.target.getAttribute('value')
        
        setActiveTimeframe(value)

        if(activeTimeframe == 'daily') {
            dailyRef.current.classList.add('active')
            weeklyRef.current.classList.remove('active')
            monthlyRef.current.classList.remove('active')
        }
        else if(activeTimeframe == 'weekly') {
            dailyRef.current.classList.remove('active')
            weeklyRef.current.classList.add('active')
            monthlyRef.current.classList.remove('active')
        }
        else {
            dailyRef.current.classList.remove('active')
            weeklyRef.current.classList.remove('active')
            monthlyRef.current.classList.add('active')
        }
        
        props.handleTimeframe(value)
    }
    
    return (
        <ul className="flex space-between timeframes container">
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
            <div className="hero-texts flex column">
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