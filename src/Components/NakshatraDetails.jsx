import { data } from "../Data";

const NakshatraDetails = () => {
  const desc_data = [
    {
      heading: "Panchang",
      description: (
        <p>
          {" "}
          In Hindu Calendar, all five elements together are called{" "}
          <strong>Panchang</strong>. (In Sanskrit: Panchang = <em>Pancha</em>{" "}
          (five) + <em>Ang</em> (part)). Hence Hindu Calendar which shows all
          five elements for each day is called <strong>Panchang</strong>. In
          South India Panchang is known as <strong>Panchangam</strong>.
        </p>
      ),
    },
    {
      heading: "Indian Calendar",
      description: (
        <p>
          When Hindu Calendar includes Muslims, Sikh, Christian, Buddhist and
          Jain festivals, including national holidays, it is called as{" "}
          <strong>Indian Calendar</strong>.
        </p>
      ),
    },
  ];
  // Number of columns
  const columns = 4;

  // Function to split data into rows
  const splitDataIntoRows = (data, columns) => {
    const rows = [];
    for (let i = 0; i < data.length; i += columns) {
      rows.push(data.slice(i, i + columns));
    }
    return rows;
  };
  return (
    <div className=" nakshatra">
      <section className="hindu-calendar">
        <h3>Hindu Calendar</h3>
        <p>
          In Hindu Calendar, the day starts with local sunrise and ends with
          next day local sunrise. As sunrise time is different for all cities,{" "}
          <strong>Hindu Calendar</strong> made for one city is not valid for any
          other city. Hence it is important to use location based{" "}
          <strong>Hindu Calendar</strong>, like this website. Further, each
          Hindu day consists of five elements, which are called <em>angas</em>.
          These five elements are -
        </p>
        <ol>
          <li>Tithi</li>
          <li>Nakshatra</li>
          <li>Yoga</li>
          <li>Karana</li>
          <li>Var (name of seven days of a week)</li>
        </ol>
      </section>
      {desc_data.map((data) => {
        const { heading, description } = data;
        return (
          <section key={heading} className="panchang">
            <h3>{heading}</h3>
            <p>{description}</p>
          </section>
        );
      })}

      {Object.keys(data).map((vals) => {
        return (
          <section className="lunar-month" key={vals}>
            <h3>{vals}</h3>
            <table>
              {splitDataIntoRows(data[vals], columns).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((item, colIndex) => (
                    <td key={colIndex}>
                      {rowIndex * columns + colIndex + 1}. {item}
                    </td>
                  ))}
                </tr>
              ))}
            </table>
          </section>
        );
      })}
    </div>
  );
};
export default NakshatraDetails;
