import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        ></ChartBar>;
      })}
    </div>
  );
};
