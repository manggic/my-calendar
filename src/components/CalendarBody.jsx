function CalendarBody({ days = [], handleModalOpen }) {
    return (
        <div className="calendar-container">
            {days?.map((day) => {
                return (
                    <div
                        onClick={() => handleModalOpen({ day: day?.data })}
                        className={`calender-box group relative ${
                            day?.highlight ? "blink" : ""
                        }`}
                    >
                        {day?.data}{" "}
                        {day?.event && (
                            <span className="w-[5px] h-[5px] rounded ml-1 bg-green-300"></span>
                        )}
                        {day?.event?.length ? (
                            <div className="absolute  hidden group-hover:block event-box rounded">
                                {day?.event?.map((event) => {
                                    return (
                                        <div className="py-2 text-sm">
                                            {event?.eventName}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default CalendarBody;
