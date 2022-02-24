import React, { createRef, useEffect } from "react";
import "./App.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function ChartJsLine() {
  const canvasRef = createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != null) {
      const ctx = canvas.getContext("2d");
      if (ctx != null) {
        // eslint-disable-next-line no-new
        new Chart(ctx, {
          type: "line",
          data: {
            //Bring in data
            labels: ["Jan", "Feb", "March"],
            datasets: [
              {
                label: "Sales",
                data: [86, 67, 91],
              },
            ],
          },
          options: {
            //Customize chart options
          },
        });
      }
    }
  });

  return (
    <div>
      <canvas ref={canvasRef} id="myChart" />
    </div>
  );
}

export default ChartJsLine;
