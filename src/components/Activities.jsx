import ellipsisIcon from "../assets/images/icon-ellipsis.svg"
import data from '../../data.json'
// import { useState } from "react"
// const [activities, setActivities] = useState(data)

function Activity(props) {
    const { title, timeframe, timeframes } = props
    const { current, previous } = timeframes[timeframe]

    function editHour (hour) {
        const suffix = (hour > 1) ? 'hrs' : 'hr'
        let editedHour = hour + suffix

        return editedHour
    }

    let previousText;
    switch (timeframe) {
        case 'daily':
            previousText ='Yesterday'
            break;
        case 'weekly':
            previousText = 'Last Week'
            break;
        case 'monthly':
            previousText = 'Last Month'
            break;
        default:
            break;
    }

    return (<div className="activity-container">
                <div className="activity">
                    <div className="space-between">
                        <h4>{title}</h4>
                        <img src={ellipsisIcon} alt="" />
                    </div> 
                    <div className="activity-details">
                        {
                        }
                        <h3>{editHour(current)}</h3>
                        <p>
                        {previousText} - {editHour(previous)}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default function Activities(props) {
    const { timeframe } = props
    // const {current, previous} = 

    console.log(timeframe)
    return (<div className="activities-container">
            {data.map(datum => <Activity key={datum.id} 
                {...datum}
                timeframe={timeframe}
                />)}

                {/* <Activity /> */}
            </div>
    )
}