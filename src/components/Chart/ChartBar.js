import "./ChartBar.css";

function ChartBar({ value, maxValue, label }) {
  const percent = maxValue !==0 ? value/maxValue*100 : 0;
  return (
    <div className="chart-bar">
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, #510674 , #510674 ${percent}%, #ddb3f8 ${percent}%, #ddb3f8 )`,
          width: "12px",
          height: "100px",
          borderRadius: "5px",
          // transition: "background-image 0.3s ease-out",
        }}
      ></div>
      <h4> {label} </h4>
    </div>
  );
}

export default ChartBar;
