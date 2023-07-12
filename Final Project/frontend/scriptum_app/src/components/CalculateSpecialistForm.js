import React, {useState, useEffect} from "react";
import axios from "axios";
// import ChartComponent from './S_Chart'
// import {Chart} from 'chart.js';
// import 'smart-webcomponents-react/source/styles/smart.default.css';
// import '@smart-webcomponents-react/chart/styles/smart.default.css';
import {
      Bar,
      LinearScale,
      CategoryScale,
      Title
} from "react-chartjs-2";


const Form = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [specialistsInDepartment, setSpecialistsInDepartment] = useState([]);
  const [workedHours, setWorkedHours] = useState(0);
  const [workedAmount, setWorkedAmount] = useState(0);
  const [allData, setAllData] = useState({});

//~~~~~~FOR CHART~~~~~~
  const [hourlyRate, setHourlyRate] = useState(0);
  const [chartData, setChartData] = useState(null);
//~~~~~~FOR CHART~~~~~~


  useEffect(() => {
    axios
      .get("/api/getAllData")
      .then((response) => {
        setAllData(response.data);
        setDepartments(response.data.departments);
      })
      .catch((error) => {
        console.log("Error getting data:", error);
      });
  }, []);

  const handleDepartmentChange = (e) => {
    const selectedDepartmentId = e.target.value;
    setSelectedDepartment(selectedDepartmentId);

    const specialists = allData.specialists.filter((specialist) => {
        return specialist.department_id == selectedDepartmentId && specialist.status === 'active'
      });
    setSpecialistsInDepartment(specialists);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleCalculate = () => {
    // console.log('=======');
    const selectedSpecialist = specialistsInDepartment[0];
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    const filteredWorks = allData.works.filter((work) =>
        work.specialist_id === selectedSpecialist.specialist_id &&
        // work.specialist_id === selectedSpecialist.id &&
        new Date(work.date_complete) >= startDateObj &&
        new Date(work.date_complete) <= endDateObj
    );

    // console.log(allData.works[0].specialist_id === selectedSpecialist.id)
    // console.log(new Date(allData.works[0].date_complete) >= startDateObj)
    // console.log(new Date(allData.works[0].date_complete) <= endDateObj) 

    // console.log(allData.works[0].specialist_id)
    // console.log(selectedSpecialist.id)
    // console.log(specialistsInDepartment)

    // console.log('$$$', filteredWorks);
    // console.log('%%%%%%%%%%%%%%%%%%%%%%%', allData.works);

    const totalWorkedHours = filteredWorks.reduce(
      (total, work) => total + work.hours,
      0
    );
    
    const hourlyRate = allData.grades.find(
      (grade) => {return grade.grade_id === selectedSpecialist.grade_id}
    )
    // console.log('*******', allData.grades);
    // console.log(specialistsInDepartment);
    // console.log(specialistsInDepartment[0])  
    // console.log('!!!!!!!', hourlyRate?.cost, totalWorkedHours);

    const totalAmount = totalWorkedHours * hourlyRate?.cost;

    setWorkedHours(totalWorkedHours);
    setWorkedAmount(totalAmount);

    setHourlyRate(hourlyRate?.cost);

//~~~~~FOR CHART
    const newChartData = {
      labels: ["Норма", "Отработано", "Остаток", "Переработка"],
      datasets: [
        {
          label: "Часы работы",
          data: [
            45,
            totalWorkedHours,
            Math.max(0, 45 - totalWorkedHours),
            Math.max(0, totalWorkedHours - 45),
          ],
          backgroundColor: [
            "rgba(54, 162, 235, 0.2)", // norm
            "rgba(75, 192, 192, 0.2)", // worked
            "rgba(255, 206, 86, 0.2)", // amount
            "rgba(255, 99, 132, 0.2)", // overworking
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    setChartData(newChartData);
  
  //~~~FOR CHART

    





  };

  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// VER 3
// const ctx = document.getElementById("chart").getContext("2d");
//     new Chart(ctx, {
//       type: "bar",
//       data: {
//         labels: [
//           "Worked Hours",
//           "Remaining Hours",
//           "Overtime",
//           "Norm Hours",
//         ],
//         datasets: [
//           {
//             label: "Hours",
//             data: [
//               totalWorkedHours,
//               45 - totalWorkedHours,
//               Math.max(totalWorkedHours - 45, 0),
//               45,
//             ],
//             backgroundColor: [
//               "green",
//               "lightblue",
//               totalWorkedHours > 45 ? "red" : "lightgreen",
//               "gray",
//             ],
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             max: 60,
//             ticks: {
//               stepSize: 10,
//             },
//           },
//         },
//       },
//     });
  





  return (
    <div>
      <div>
        <label>Start Date:</label>
        <input type = "date"
                value = {startDate}
                onChange = {handleStartDateChange} />
      </div>
      <div>
        <label>End Date:</label>
        <input type = "date"
                value = {endDate}
                onChange = {handleEndDateChange} />
      </div>
      <div>
        <label>Department:</label>
        <select value = {selectedDepartment}
                onChange = {handleDepartmentChange}>
          <option value = "">Please select Department</option>
          {departments.map((department, index) => (
            <option key = {index} value = {department.department_id}>
              {department.d_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Specialist:</label>
        <select>
            <option value = "">Please select Specialist</option>
          {specialistsInDepartment.map((specialist, index) => (
            <option key = {index} value = {specialist.id}>
              {specialist.f_name} {specialist.l_name}
            </option>
          ))}
        </select>
      </div>
      <button onClick = {handleCalculate}>Calculate</button>
      <div>
        <label>Worked Hours: </label>
        <span>{workedHours}</span>
      </div>
      <div>
        <label>Worked Amount: </label>
        <span>{workedAmount}</span>
      </div>
      <div>
        {/* VER 1 */}
        {/* <ChartComponent workedHours = {workedHours}
                        hourlyRate = {hourlyRate}
                        totalHours={45} /> */}
      </div>
      <div>
        {/* VER 2 */}
        {/* <ChartComponent/> */}
      </div>
      <div>
        {/* VER 3 */}
        {/* <canvas id="chart"></canvas> */}
      </div>
      <div>
        {/* VER 4 */}
        {/* <Bar
            data={{
              labels: [
                "Worked Hours",
                "Remaining Hours",
                "Overtime",
                "Norm Hours",
              ],
              datasets: [
                {
                  label: "Hours",
                  data: [
                    workedHours,
                    45 - workedHours,
                    Math.max(workedHours - 45, 0),
                    45,
                  ],
                  backgroundColor: [
                    "green",
                    "lightblue",
                    workedHours > 45 ? "red" : "lightgreen",
                    "gray",
                  ],
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  max: 60,
                  ticks: {
                    stepSize: 10,
                  },
                },
              },
            }}
          /> */}
      </div>
      <div>
        {chartData && (
          <div>
            <h3>Chart</h3>
            <Bar
              data={chartData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 60,
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;