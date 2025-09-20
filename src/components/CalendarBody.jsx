function CalendarBody({ days = [] }) {
    return (
        <div className="calendar-container ">
            {days?.map((day) => {
                return <div className={`calender-box ${day?.highlight ? "blink" : ""}`}>{day?.data}</div>;
            })}
        </div>
    );
}

export default CalendarBody;
