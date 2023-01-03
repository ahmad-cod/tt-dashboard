import heroImage from "../assets/images/image-jeremy.png"

function TimeFrames(props) {
    const handleClick = (e) => {
        const value = e.target.getAttribute('value')
        props.handleTimeframe(value)
        console.log(value)
    }
    return (
        <ul className="space-between">
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
        <div>
            <img src={heroImage} alt="Hero Image" />
            <div className="texts">
                <p>Report for</p>
                <h2>Jeremy Robson</h2>
            </div>
        </div>
    )
}
export default function HeroContainer(props) {
    return (
        <div>
            <Hero />
            <TimeFrames handleTimeframe={props.handleTimeframe} />
        </div>
    )
}