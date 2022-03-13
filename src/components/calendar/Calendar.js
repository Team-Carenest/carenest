import './Calendar.css';

export default function Calendar() {
    const days = () => {
        let nums = [];
        for (let i = 1; i < 32; i++) {
            nums.push(<li>{i}</li>);
        }

        return nums;
    }
    
    return (
        <div className="calendar">
            <div class="month">
                <ul>
                    <li class="prev">&#10094;</li>
                    <li class="next">&#10095;</li>
                    <li>August 2021</li>
                </ul>
            </div>

            <ul class="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
            </ul>

            <ul class="days">
                {days()}
            </ul>
        </div>
    );
}