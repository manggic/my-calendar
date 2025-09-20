import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Weekday from "./components/Weekday";
import CalendarBody from "./components/CalendarBody";
import { months, weekdays } from "./constants";

function App() {
    const [monthToShow, setMonthToShow] = useState(null);
    const [yearToShow, setYearToShow] = useState(null);

    const [daysInMonth, setDaysInMonth] = useState(null);

    const [currentDay, setCurrentDay] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(null);
    const [currentYear, setCurrentYear] = useState(null);

    const [indexOfFirstDay, setIndexOfFirstDay] = useState(null);

    // pass month number without index
    // calc days in month
    function calDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    const handleBackArrow = () => {
        // let month = weekdays[setMonthToShow];

        if (monthToShow === 0) {
            setMonthToShow(11);
            setYearToShow(yearToShow - 1);
            setCalendarBody({ month: 11, year: yearToShow - 1 });
        } else {
            setMonthToShow(monthToShow - 1);
            setCalendarBody({ month: monthToShow - 1, year: yearToShow });
        }
    };

    const setCalendarBody = ({ month, year }) => {
        let daysInMonth = calDaysInMonth(month, year);

        // setIndexOfFirstDay({ year: yearToShow, month: monthToShow });
        setIndexOfFirstDay(calcIndexOfFirstDay({ year, month }));
        setDaysInMonth(daysInMonth);
    };

    const handleNextArrow = () => {
        if (monthToShow === 11) {
            setMonthToShow(0);
            setYearToShow(yearToShow + 1);
            setCalendarBody({ month: 0, year: yearToShow + 1 });
        } else {
            setMonthToShow(monthToShow + 1);
            setCalendarBody({ month: monthToShow + 1, year: yearToShow });
        }
    };

    // month must have index inclusive
    function calcIndexOfFirstDay({ year, month }) {
        let firstDateObj = new Date(year, month, 1); // date obj of 1st day, month must have index inclusive

        // week day of 1st date
        let weekDayInString = firstDateObj
            .toLocaleDateString(undefined, { weekday: "long" })
            .toLowerCase();

        return weekdays.indexOf(weekDayInString);
        // setindexOfFirstDay(weekdays.indexOf(weekDayInString));
    }

    // call for todays date
    useEffect(() => {
        let dateObj = new Date();
        let month = dateObj.getMonth(); // month number including index
        let year = dateObj.getFullYear(); // current year
        let daysInMonth = calDaysInMonth(month, year); // days in current month


        setIndexOfFirstDay(calcIndexOfFirstDay({ year, month }));

        setDaysInMonth(daysInMonth);
        setCurrentMonth(month);
        setCurrentYear(year);
        setCurrentDay(dateObj.getDate()); // current day in number
        setMonthToShow(month);
        setYearToShow(year);
    }, []);


    // useEffect(() => {}, [monthToShow, yearToShow]);
    // return;
    return (
        <>
            <div className="container">

                <div>
                    <Header
                        year={yearToShow}
                        handleNextArrow={handleNextArrow}
                        handleBackArrow={handleBackArrow}
                        monthInString={months[monthToShow]}
                    />
                    <Weekday />
                    <CalendarBody
                        days={[
                            ...(indexOfFirstDay
                                ? Array.from({ length: indexOfFirstDay }, () => ({
                                    data: null,
                                }))
                                : []),
                            ...Array.from({ length: daysInMonth }, (_, index) => ({
                                data: index + 1,
                                highlight:
                                    currentDay === index + 1 &&
                                    currentMonth === monthToShow &&
                                    currentYear === yearToShow,
                            })),
                        ]}
                    />
                </div>


            </div>
        </>
    );
}

export default App;

