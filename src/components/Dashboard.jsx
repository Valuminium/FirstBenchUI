import React, { useEffect } from "react";
import uppIcon from "../assets/uppIcon.jpg";
import icon13 from "../assets/icon-1,3.png";
import icon2 from "../assets/icon-2.png";
import icon4 from "../assets/icon4.jpg";
import ruler from '../assets/ruler.png';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

  const Dashboard = () => {
 
  const barChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: [90, 50, 60, 70, 40, 80, 30],
        backgroundColor: "rgba(147, 51, 234, 0.6)",
        borderRadius: 10,
        barThickness: 12,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Slots", // Text for x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Accuracy", // Text for y-axis
        },
      },
    },
  };

  const horizontalBarData1 = {
    labels: ["10 sec"],
    datasets: [
      {
        label: "Pending",
        data: [100],
        backgroundColor: "red",
        borderRadius: 5,
        barThickness: 15,
      },
      {
        label: "Completed",
        data: [50], 
        backgroundColor:"rgba(34, 255, 0, 0.9)",
        borderRadius: 5,
        barThickness: 15,
      },
    ],
  };

  const horizontalBarData2 = {
    labels: ["10 sec"], 
    datasets: [
      {
        label: "Completed",
        data: [50], 
        backgroundColor: "rgba(34, 255, 0, 0.9)",
        borderRadius: {
          topLeft: 10,
          bottomLeft: 10,
          topRight: 0,
          bottomRight: 0,
        },
        barThickness: 15,
      },
      {
        label: "Pending",
        data: [50], 
        backgroundColor: "red",
        borderRadius: {
          topLeft: 0,
          bottomLeft: 0,
          topRight: 10,
          bottomRight: 10, 
        },
        barThickness: 15,
      },
    ],
  };

  const horizontalBarOptions1 = {
    indexAxis: "y", 
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        display:false,
        beginAtZero: true,
        max: undefined,
        ticks: {
          stepSize: 10,
        },
      },
      y: {
        display: false, 
      },
    },
  };

  const horizontalBarOptions = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide the legend
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        display:false, // Total percentage = 100
        stacked: true, // Stack the datasets
        ticks: {
          stepSize: 10,
          color: "black",
        },
      },
      y: {
        stacked: true, // Ensure stacking on Y-axis as well
        display: false, // Keep the Y-axis label visible
      },
    },
  };

  return (
    <div className="flex min-h-[110vh]">
      <div className="flex-1 overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white flex text-gray-500 font-medium rounded-lg shadow p-3 h-40">
            <img src={uppIcon} alt="icon" className="h-6 w-6 mr-2" />
            <span>Compare Accuracy</span>
          </div>
          <div className="bg-white flex text-gray-500 font-medium rounded-lg shadow p-3 h-40">
            <img src={uppIcon} alt="icon" className="h-6 w-6 mr-2" />
            <span>Compare Accuracy</span>
          </div>
          <div className="bg-white flex text-gray-500 font-medium rounded-lg shadow p-3 h-40">
            <img src={uppIcon} alt="icon" className="h-6 w-6 mr-2" />
            <span>Compare Accuracy</span>
          </div>
        </div>

        <div className="my-5"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-gray-500 font-medium">
            <div className="text-gray-700 flex text-sm mb-2">
              <img src={icon13} alt="icon" className="h-6 w-6 mr-2" />
              <span className=" text-gray-500 font-medium">Improvements</span>
            </div>
            <div className="font-bold text-black text-xs mb-2">
              Subject Understanding
            </div>
            <div className="flex flex-wrap gap-1">
              {[
                { subject: "Geography", color: "bg-teal-500" },
                { subject: "Politics", color: "bg-yellow-500" },
                { subject: "Current Affairs", color: "bg-teal-500" },
                { subject: "General Studies", color: "bg-red-600" },
                { subject: "Mathematics", color: "bg-teal-500" },
                { subject: "Social Studies", color: "bg-gray-400" },
                { subject: "English Literature", color: "bg-red-600" },
                { subject: "Economics", color: "bg-teal-500" },
                { subject: "Indian History", color: "bg-yellow-500" },
              ].map(({ subject, color }, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-full text-white text-[10px] ${color}`}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 text-gray-500 font-medium">
            <div className="text-sm flex text-gray-700 mb-2">
              <img src={icon2} alt="icon" className="h-6 w-6 mr-2" />
              <span className=" text-gray-500 font-medium">Response Time</span>
            </div>
            <div className="text-[10px] bg-purple-600 text-white px-2 py-1 rounded w-fit mb-2">
              Std Time - 2 min
            </div>
            <div className="bg-purple-200 flex items-center justify-between border-2 border-purple-300 border-dashed rounded-md p-1 mb-2">
              <div className="text-lg text-teal-500 font-bold">60%</div>
              <span className="text-[15px] text-gray-500">Ans took</span>
              <div className="flex items-center">
                <span className="text-red-500 text-lg mr-1">↑</span>
                <span className="text-purple-600 font-medium text-[12px]">
                  2min
                </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-400 my-2"></div>
            <div className="py-3 text-center text-black text-lg font-semibold">
              You are <span className="font-bold text-red-500">slow</span>!
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 text-gray-500 font-medium">
            <div className="text-sm flex text-gray-700 mb-2">
              <img src={icon13} alt="icon" className="h-6 w-6 mr-2" />
              <span className=" text-gray-500 font-medium">Approach Data</span>
            </div>
            {[
              { count: "25%", text: "Based on ", text1: "Facts" },
              { count: "32%", text: "Based on ", text1: "Analysis" },
              { count: "19%", text: "Based on ", text1: "Elimination" },
              { count: "24%", text: "Based on ", text1: "Guess" },
            ].map((data, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-md h-8 px-1 py-1 mb-2"
              >
                <span className="text-xs font-semibold text-purple-600 p-0.5 bg-purple-200">
                  {data.count}
                </span>
                <span className="text-[13px] text-left text-gray-700">
                  {data.text}
                  <span className="text-[13px] font-medium text-left text-purple-600">
                    {data.text1}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow p-4 text-gray-500 font-medium">
            <div className="text-sm flex text-gray-700 mb-2">
              <img src={icon4} alt="icon" className="h-6 w-6 mr-2" />
              <span className=" text-gray-500 font-medium">Suggestions</span>
            </div>
            <div className="text-xs flex justify-between mb-2">
              <span className=" bg-purple-600 text-white p-0.5 rounded">
                Q. 1-12
              </span>
              <span className="bg-purple-600 text-white p-0.5 rounded">
                Q. 12-32
              </span>
              <span className=" bg-purple-600 text-white p-0.5 rounded">
                Q. 32-40
              </span>
            </div>
            <div className="py-1.5"></div>
            <div className="text-xs flex justify-between">
              <span className="bg-purple-200 text-black text-[13px] border-2 border-dashed border-purple-300 font-bold p-1 py-3 rounded">
                40 sec
              </span>
              <span className="bg-purple-200 text-black text-[13px] border-2 border-dashed border-purple-300 font-bold p-1 py-3 rounded">
                1.5 min
              </span>
              <span className="bg-purple-200 text-black text-[13px] border-2 border-dashed border-purple-300 font-bold p-1 py-3 rounded">
                3 min
              </span>
            </div>
            <div className="py-2"></div>
            <div className="text-[13px] flex justify-center gap-8 mt-2">
              <span className="text-green-500">Easy</span>
              <span className="text-yellow-500">Medium</span>
              <span className="text-red-500">Hard</span>
            </div>
          </div>
        </div>

        <div className="my-5"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className=" text-gray-500 font-medium mb-4 flex items-center">
              <i className="fas fa-chart-line mr-2 text-custom"></i>
              Compare Accuracy
            </h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-gray-500 font-medium mb-4 flex items-center">
        <i className="fas fa-clock mr-2 text-custom"></i>
        Time Taken
      </h3>
      <div className="grid grid-rows-2 gap-4">
        {/* First Chart */}
        <div className="relative">
          <img src={ruler} alt="ruler" className="w-full" />
          <div className="absolute top-0 left-1.5  w-[150px] h-full">
            <Bar data={horizontalBarData1} options={horizontalBarOptions1} />
          </div>
          <p className="py-1 text-[12px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolorem eos vel!
          </p>
        </div>

        {/* Second Chart */}
        <div className="relative">
          <img src={ruler} alt="ruler" className="w-full" />
          <div className="absolute top-0 left-10 w-[220px] h-full">
            <Bar data={horizontalBarData2} options={horizontalBarOptions} />
          </div>
          <p className="py-1 text-[12px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dolorem eos vel!
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
