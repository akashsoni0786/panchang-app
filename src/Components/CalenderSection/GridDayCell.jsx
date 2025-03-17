const GridDayCell = ({ index, weekday }) => {
  weekday = weekday.toUpperCase();
  
  const varDays = {
    SUN: "रवि",
    MON: "सोम",
    TUE: "मंगल",
    WED: "बुध",
    THU: "गुरु",
    FRI: "शुक्र",
    SAT: "शनि",
  };
  return (
    <div className="grid-daywise-cell">
      <div className="grid-daywise-cell__day">{weekday}</div>
      <div className="grid-daywise-cell__var">{varDays[weekday]}</div>
    </div>
  );
};
export default GridDayCell;
