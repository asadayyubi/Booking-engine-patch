import { useEffect, useRef, useState } from "react";
// import { DateRange } from "react-date-range";
// import format from "date-fns/format";
import { format } from "date-fns";
// import { addDays, startOfDay } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import { DateRangePicker as DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Calender.css";
import { updateCalender } from "../../Redux/UserData/action";
import { useDispatch, useSelector } from "react-redux";


const Calendar = () => {
  // date state
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().valueOf() + 1000 * 3600 * 24),
    key: "selection",
  });

  // open close
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const store = useSelector((store) => store.reducerUserData)


  // get the target element to toggle
  const refOne = useRef(null);
 useEffect(() => {
  console.log(range,"from effect");
  dispatch(updateCalender(range))
  console.log(store);
 },[range])
  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);

    return () => {
      document.removeEventListener("keydown", hideOnEscape, true);
      document.removeEventListener("click", hideOnClickOutside, true);
    };
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  const handleChange = (date) => {

    setRange(date.selection);
    
  };

  return (
    <div className="calendarWrap">
      <div>
        <p>Choose Dates</p>
      </div>
      <div
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
        style={{ cursor: "pointer" }}
      >
        {`${format(range.startDate, "EEE d MMM")} - ${format(
          range.endDate,
          "EEE d MMM"
        )}`}
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            ranges={[range]}
            onChange={handleChange}
            minDate={new Date()}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>

      {/* <DateRange
            onChange={(item) => handleChange(item)}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          /> */}
    </div>
  );
};

export default Calendar;
