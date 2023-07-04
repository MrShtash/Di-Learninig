// import React, {useState, useEffect} from "react";
// import axios from "axios";

// const CompanyForm = () => {
//   const [data, setData] = useState({
//     cashs: [],
//     categories: [],
//     companies: [],
//     departments: [],
//     grades: [],
//     groups: [],
//     hours: [],
//     projects: [],
//     project_departments: [],
//     project_specialists: [],
//     specialists: [],
//     sprints: [],
//     sprint_specialists: [],
//     works: [],
//   });

//   const [selectedCompany, setSelectedCompany] = useState("");
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filteredSprints, setFilteredSprints] = useState([]);
//   const [selectedSprint, setSelectedSprint] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/getAllData");
//         setData(response.data);
//         console.log("from useeffect:", response.data.projects);
//         setSelectedProject(response.data.projects);
//       } catch (error) {
//         console.error("Error getting data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log("UseEffect on company=>", selectedCompany);
//     setFilteredProjects(
//       data.projects.filter((project) => project.company_id == selectedCompany)
//     );
//     setSelectedProject("");
//     setFilteredSprints([]);
//     setSelectedSprint("");
//   }, [data.projects, selectedCompany]);

//   useEffect(() => {
//     setFilteredSprints(
//       data.sprints.filter((sprint) => sprint.project_id == selectedProject)
//     );
//     setSelectedSprint('');
//   }, [data.sprints, selectedProject]);

//   const handleCalculate = () => {
//     const selectedWork = document.getElementById("work").value;
//     const work = data.works.find((work) => work.work_id == selectedWork);
//     if (work) {
//       console.log("Selected Work:", work);
//     }
//   };

//   console.log("Data:", data);
//   console.log("Filtered Projects:", filteredProjects);
//   console.log("Selected Project:", selectedProject);
//   console.log("Filtered Sprints:", filteredSprints);

//   return (
//     <div>
//       <label htmlFor="company">Select Company:</label>
//       <select
//         id="company"
//         value={selectedCompany}
//         onChange={(e) => setSelectedCompany(e.target.value)}
//       >
//         <option value="">--Please select Company--</option>
//         {data.companies.map((company) => (
//           <option key={company.company_id} value={company.company_id}>
//             {company.name}
//           </option>
//         ))}
//       </select>

//       <div>
//         <label htmlFor="project">Select Project:</label>
//         <select
//           id="project"
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//         >
//           <option value="">--Please select Project--</option>
//           {filteredProjects.map((project) => {
//             console.log("In render");
//             return (
//               <option key={project.project_id} value={project.project_id}>
//                 {project.name} (Rest of money: {project.deposit})
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="sprint">Select Sprint:</label>
//         <select
//           id="sprint"
//           value={selectedSprint}
//           onChange={(e) => setSelectedSprint(e.target.value)}
//         >
//           <option value="">--Please select Sprint--</option>
//           {filteredSprints.map((sprint) => (
//             <option key={sprint.sprint_id} value={sprint.sprint_id}>
//               {sprint.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="work">Select Work:</label>
//         <select id="work">
//           <option value="">--Please select Work--</option>
//           {data.works
//             .filter((work) => work.sprint_id === selectedSprint)
//             .map((work) => (
//               <option key={work.work_id} value={work.work_id}>
//                 {work.title}
//               </option>
//             ))}
//         </select>
//       </div>

//       <div>
//         <button onClick={handleCalculate}>Calculate</button>
//       </div>
//     </div>
//   );
// };

// export default CompanyForm;



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// import React, {useState, useEffect} from "react";
// import axios from "axios";

// const CompanyForm = () => {
//   const [data, setData] = useState({
//     cashs: [],
//     categories: [],
//     companies: [],
//     departments: [],
//     grades: [],
//     groups: [],
//     hours: [],
//     projects: [],
//     project_departments: [],
//     project_specialists: [],
//     specialists: [],
//     sprints: [],
//     sprint_specialists: [],
//     works: [],
//   });

//   const [selectedCompany, setSelectedCompany] = useState("");
//   const [filteredProjects, setFilteredProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState("");
//   const [filteredSprints, setFilteredSprints] = useState([]);
//   const [selectedSprint, setSelectedSprint] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/getAllData");
//         setData(response.data);
//         console.log("from useeffect:", response.data.projects);
//         // setSelectedProject(response.data.projects);
// // ~~~
//         setSelectedProject(response.data.projects[0]?.project_id);
// // ~~~
//       } catch (error) {
//         console.error("Error getting data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log("UseEffect on company=>", selectedCompany);
//     setFilteredProjects(
//       data.projects.filter((project) => project.company_id == selectedCompany)
//     );
//     setSelectedProject("");
//     setFilteredSprints([]);
//     setSelectedSprint("");
//   }, [data.projects, selectedCompany]);

//   useEffect(() => {
//     setFilteredSprints(
//       data.sprints.filter((sprint) => sprint.project_id == selectedProject)
//     );
//     setSelectedSprint('');
//   }, [data.sprints, selectedProject]);

//   const handleCalculate = () => {
//     const selectedWork = document.getElementById("work").value;
//     const work = data.works.find((work) => work.work_id == selectedWork);
//     if (work) {
//       console.log("Selected Work:", work);
//     }
//   };

//   console.log("Data:", data);
//   console.log("Filtered Projects:", filteredProjects);
//   console.log("Selected Project:", selectedProject);
//   console.log("Filtered Sprints:", filteredSprints);

//   return (
//     <div>
//       <label htmlFor="company">Select Company:</label>
//       <select
//         id="company"
//         value={selectedCompany}
//         onChange={(e) => setSelectedCompany(e.target.value)}
//       >
//         <option value="">--Please select Company--</option>
//         {data.companies.map((company) => (
//           <option key={company.company_id} value={company.company_id}>
//             {company.name}
//           </option>
//         ))}
//       </select>

//       <div>
//         <label htmlFor="project">Select Project:</label>
//         <select
//           id="project"
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//         >
//           <option value="">--Please select Project--</option>
//           {filteredProjects.map((project) => {
//             console.log("In render");
//             return (
//               <option key={project.project_id} value={project.project_id}>
//                 {project.name} (Rest of money: {project.deposit})
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="sprint">Select Sprint:</label>
//         <select
//           id="sprint"
//           value={selectedSprint}
//           onChange={(e) => setSelectedSprint(e.target.value)}
//         >
//           <option value="">--Please select Sprint--</option>
//           {filteredSprints.map((sprint) => (
//             <option key={sprint.sprint_id} value={sprint.sprint_id}>
//               {sprint.title}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="work">Select Work:</label>
//         <select id="work">
//           <option value="">--Please select Work--</option>
//           {data.works
//             .filter((work) => work.sprint_id == selectedSprint)
//             .map((work) => (
//               <option key={work.work_id} value={work.work_id}>
//                 {work.title}
//               </option>
//             ))}
//         </select>
//       </div>

//       <div>
//         <button onClick={handleCalculate}>Calculate</button>
//       </div>
//     </div>
//   );
// };

// export default CompanyForm;



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




import React, { useState, useEffect } from "react";
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
  });

  const [selectedCompany, setSelectedCompany] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [filteredSprints, setFilteredSprints] = useState([]);
  const [selectedSprint, setSelectedSprint] = useState("");
  const [selectedWork, setSelectedWork] = useState("");
  const [filteredWorks, setFilteredWorks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/getAllData");
        setData(response.data);
        setSelectedProject(response.data.projects[0]?.project_id);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      data.projects.filter((project) => project.company_id == selectedCompany)
    );
    setSelectedProject("");
    setFilteredSprints([]);
    setSelectedSprint("");
  }, [data.projects, selectedCompany]);

  useEffect(() => {
    setFilteredSprints(
      data.sprints.filter((sprint) => sprint.project_id == selectedProject)
    );
    setSelectedSprint('');
  }, [data.sprints, selectedProject]);

  
  useEffect(() => {
  const filteredWorks = data.works.filter((work) => work.sprint_id === selectedSprint.sprint_id
  );
    setFilteredWorks(filteredWorks);
    setSelectedWork(filteredWorks[0]?.work_id);
  }, [data.works, selectedSprint]);


  const handleCalculate = () => {
    console.log('==========');
    const work = filteredWorks.find((work) => work.work_id == selectedWork);
    if (work) {
      console.log("Selected Work:", work);
    }
  };

  console.log("Data:", data);
  console.log("Filtered Projects:", filteredProjects);
  console.log("Selected Project:", selectedProject);
  console.log("Filtered Sprints:", filteredSprints);
  console.log("Selected Work:", selectedWork);

  return (
    <div>
      <label htmlFor="company">Select Company:</label>
      <select
        id="company"
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
      >
        <option value="">--Please select Company--</option>
        {data.companies.map((company) => (
          <option key={company.company_id} value={company.company_id}>
            {company.name}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="project">Select Project:</label>
        <select
          id="project"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
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
        <select
          id="sprint"
          value={selectedSprint}
          onChange={(e) => setSelectedSprint(e.target.value)}
        >
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
        <select
          id="work"
          value={selectedWork}
          onChange={(e) => setSelectedWork(e.target.value)}
        >
          <option value="">--Please select Work--</option>
          {/* {filteredWorks.map((work) => (
            <option key={work.work_id} value={work.work_id}>
              {work.title}
            </option> */}

            {filteredWorks.length > 0 && filteredWorks.map((work) => (
      <option key={work.work_id} value={work.work_id}>
        {work.title}
      </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default CompanyForm;
