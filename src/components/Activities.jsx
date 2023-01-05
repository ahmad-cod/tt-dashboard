import ellipsisIcon from "../assets/images/icon-ellipsis.svg"
import data from '../../data.json'

function Activity(props) {
    const { title, timeframe, timeframes } = props
    const { current, previous } = timeframes[timeframe]
    let idName = title.toLowerCase()
    if(idName.includes(' ')) {
        idName = idName.replace(/\s/g, '-')
    }

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

    return (<div className="activity-container container" id={idName}>
                <div className="activity container">
                    <div className="flex space-between">
                        <h3>{title}</h3>
                        <img className="iconImg" src={ellipsisIcon} alt="" />
                    </div> 
                    <div className="activity-details flex space-between">
                        <h3 className="large-txt">{editHour(current)}</h3>
                        <p className="small-txt">
                        {previousText} - {editHour(previous)}
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default function Activities(props) {
    const { timeframe } = props

    return (<main role='main' className="activities-container">
            {data.map(datum => <Activity key={datum.id} 
                {...datum}
                timeframe={timeframe}
                />)}
            </main>
    )
}