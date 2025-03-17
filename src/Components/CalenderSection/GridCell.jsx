const GridCell = ({ sunrise, sunset, tithi, moon, nakshatra, hindi_num, date_num }) => {
    return (
      <div className="grid-cell">
        <div className="tithi">{tithi}</div>
        <div className="eng-date">{date_num}</div>
        <div className="small-date">{hindi_num}</div>
        <div className="date-section flex-between">
          <div className="sunrise-timing flex-col-center">
            <img
              className="icon"
              src="https://www.drikpanchang.com/images/grid/sunrise.svg"
              alt="Sunrise"
            />
            <span>{sunrise}</span>
          </div>
  
          <div className="sunset-timing flex-col-center">
            <img
              className="icon"
              src="https://www.drikpanchang.com/images/grid/sunset.svg"
              alt="Sunset"
            />
            <span>{sunset}</span>
          </div>
        </div>
  
        <div className="moon-section">
          <div className="moon-timing flex-row-center">
            <img
              className="icon"
              src="https://www.drikpanchang.com/images/grid/moon.svg"
              alt="Moon"
            />
            {moon}
          </div>
          <div className="nakshatra_time flex-row-center">
            <img
              className="icon"
              src="https://www.drikpanchang.com/images/grid/star.svg"
              alt="Star"
            />
            {nakshatra}
          </div>
        </div>
      </div>
    );
  };

export default GridCell;
