import ChartBar from "./ChartBar";
import "./Chaart.css";

function Chaart({ dataPoints }) {
  const values = dataPoints.map((data) => data.value);
  const max = Math.max(...values);

  return (
    <div className="chaart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chaart;
