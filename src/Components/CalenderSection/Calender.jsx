import { calender_data, panchangData } from "../../Data";
import NakshatraDetails from "../NakshatraDetails";
import GridCell from "./GridCell";
import GridDayCell from "./GridDayCell";

const Calendar = () => {
  return (
    <section className="container main-section">
      <div className=" calenderWrapper">
        <div className="calenderaside">
          <div className="calenderheader">
            <h2>Sunday, March 16, 2025</h2>
          </div>
          <div className="panchang-details">
            {panchangData.map((item) => (
              <div className="panchang-details__box" key={item.label}>
                <p>
                  <strong className="panchang-details__label">
                    {item.label}:
                  </strong>{" "}
                  <span className="panchang-details__value">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="calenderbox">
          <div className="calenderheader flex-between">
            <h2>❮</h2>
            <div className="calenderheader__date">
              <div className="calenderheader__date-engname">March 2025</div>
              <div className="calenderheader__date-hindiname">
                Phalguna 2081 - Chaitra 2082
              </div>
            </div>
            <h2>❯</h2>
          </div>
          <div className="calender-grid">
            {calender_data.map((data, index) => {
              const {
                sunrise,
                sunset,
                tithi,
                moon,
                nakshatra,
                hindi_num,
                date_num,
                weekday,
              } = data;
              if (nakshatra) {
                return (
                  <GridCell
                    key={index}
                    sunrise={sunrise}
                    sunset={sunset}
                    tithi={tithi}
                    moon={moon}
                    nakshatra={nakshatra}
                    hindi_num={hindi_num}
                    date_num={date_num}
                  />
                );
              }
              return (
                <GridDayCell key={index} index={index} weekday={weekday} />
              );
            })}
          </div>
          <NakshatraDetails />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
