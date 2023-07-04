import React, {useState, useEffect} from "react";
import axios from "axios";

const CompanyForm = () => {
  const [data, setData] = useState({
      cashs: [],
      categories: [],
      companies: [],
      departments: [],
      grades: [],
      groups: [],
      hours: [],
      projects: [],
      project_departments: [],
      project_specialists: [],
      specialists: [],
      sprints: [],
      sprint_specialists: [],
      works: [],
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      start_date: "",
      end_date: "",
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    });

  const [selectedCompany, setSelectedCompany] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [filteredSprints, setFilteredSprints] = useState([]);
  const [selectedSprint, setSelectedSprint] = useState("");
  const [selectedWork, setSelectedWork] = useState("");
  const [filteredWorks, setFilteredWorks] = useState([]);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [remainingDeposit, setRemainingDeposit] = useState(0);
  const [sprintCost, setSprintCost] = useState(0);
  const [totalWorkCost, setTotalWorkCost] = useState(0);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getAllData");
        setData(response.data);
        setSelectedProject(response.data.projects[0]?.project_id);
        // const {start_date,
        //          end_date} = response.data;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        setSelectedStartDate(response.data.start_date);
        setSelectedEndDate(response.data.end_date);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      data.projects.filter((project) => project.company_id == selectedCompany
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                        // && project.start_date >= selectedStartDate &&
                                        // project.end_date <= selectedEndDate

                                        && new Date(project.start_date) >= new Date(selectedStartDate) &&
                                        new Date(project.end_date) <= new Date(selectedEndDate)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      )
    );
    setSelectedProject("");
    setFilteredSprints([]);
    setSelectedSprint("");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    setSelectedWork("");
    setFilteredWorks([]);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  }, [data.projects,
      selectedCompany,
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      selectedStartDate,
      selectedEndDate
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    ]);

  useEffect(() => {
    setFilteredSprints(
      data.sprints.filter((sprint) => sprint.project_id == selectedProject
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                      // && sprint.start_date >= selectedStartDate &&
                                      // sprint.end_date <= selectedEndDate

                                      && new Date(sprint.start_date) >= new Date(selectedStartDate) &&
                                      new Date(sprint.end_date) <= new Date(selectedEndDate)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      )
    );
    setSelectedSprint('');
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    setSelectedWork("");
    setFilteredWorks([]);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  }, [data.sprints,
      selectedProject,
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      selectedStartDate,
      selectedEndDate
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  ]);

  useEffect(() => {
    const filteredWorks = data.works.filter((work) => work.sprint_id === selectedSprint.sprint_id
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                                                      // && work.start_date >= selectedStartDate &&
                                                      // work.end_date <= selectedEndDate

                                                      && new Date(work.start_date) >= new Date(selectedStartDate) &&
                                                      new Date(work.end_date) <= new Date(selectedEndDate)

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    );
    setFilteredWorks(filteredWorks);
    // setSelectedWork(filteredWorks.work_id);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    setSelectedWork("");
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  }, [data.works,
      selectedSprint,
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      selectedStartDate,
      selectedEndDate,
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
]);

  const handleCalculate = () => {
    console.log('==========');
    const work = filteredWorks.find((work) => work.work_id == selectedWork);
    if (work) {
      console.log("Selected Work:", work);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      const project = data.projects.find(
        (project) => project.project_id == selectedProject
      );
      const sprint = data.sprints.find(
        (sprint) => sprint.sprint_id == selectedSprint
      );
      const company = data.companies.find(
        (company) => company.company_id == selectedCompany
      );

    console.log("Additional Information: ");
    console.log("Project: ", project);
    console.log("Sprint: ", sprint);
    console.log("Company: ", company);

    // Calculate remaining deposit on the project
      const remainingDeposit = project.deposit - work.hours * work.hourly_rate;

    // Calculate the total cost of the sprint
      const sprintCost = filteredWorks.reduce(
        (total, work) => total + work.hours * work.hourly_rate,
        0
      );

    // Calculate the total cost of all works
      const totalWorkCost = filteredWorks.reduce(
        (total, work) => total + work.hours * work.hourly_rate,
        0
      );

      setRemainingDeposit(remainingDeposit);
      setSprintCost(sprintCost);
      setTotalWorkCost(totalWorkCost);

      console.log("Remaining Deposit:", remainingDeposit);
      console.log("Sprint Cost:", sprintCost);
      console.log("Total Work Cost:", totalWorkCost);
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }
  };

  console.log("Data:", data);
  console.log("data.projects:", data.projects);
  console.log("data.sprints:", data.sprint);
  console.log("filteredWorks:", filteredWorks);
  console.log("Filtered Projects: ", filteredProjects);
  console.log("Selected Project: ", selectedProject);
  console.log("Filtered Sprints: ", filteredSprints);
  console.log("Selected Work: ", selectedWork);

  return (
    <div>
      <label htmlFor="company">Select Company:</label>
      <select id="company"
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}>
        <option value="">--Please select Company--</option>
        {data.companies.map((company) => (
          <option key={company.company_id} value={company.company_id}>
            {company.name}
          </option>
        ))}
      </select>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <label htmlFor="start_date">Start Date:</label>
        <input type="date"
                id="start_date"
                value={selectedStartDate}
                onChange={(e) => setSelectedStartDate(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="end_date">End Date:</label>
        <input type="date"
                id="end_date"
                value={selectedEndDate}
                onChange={(e) => setSelectedEndDate(e.target.value)}/>
      </div>
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
      <div>
        <label htmlFor="project">Select Project:</label>
        <select id="project"
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}>
          <option value="">--Please select Project--</option>
          {filteredProjects.map((project) => (
            <option key={project.project_id} value={project.project_id}>
              {project.name} (Rest of money: {project.deposit})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sprint">Select Sprint:</label>
        <select id="sprint"
                value={selectedSprint}
                onChange={(e) => setSelectedSprint(e.target.value)}>
          <option value="">--Please select Sprint--</option>
          {filteredSprints.map((sprint) => (
            <option key={sprint.sprint_id} value={sprint.sprint_id}>
              {sprint.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="work">Select Work:</label>
        <select id="work"
                value={selectedWork}
                onChange={(e) => setSelectedWork(e.target.value)}>
                disabled={!selectedSprint}
          <option value="">--Please select Work--</option>
          {selectedSprint &&
            filteredWorks.map((work) => (
              <option key={work.work_id} value={work.work_id}>
                {work.title}
              </option>
          ))} 
        </select>
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div>
        <label>Project Deposit: </label>
        <span>{remainingDeposit}</span>
      </div>
      <div>
        <label>Sprint Cost: </label>
        <span>{sprintCost}</span>
      </div>
      <div>
        <label>Total Work Cost: </label>
        <span>{totalWorkCost}</span>
      </div>
      
    </div>
  );
};

export default CompanyForm;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
