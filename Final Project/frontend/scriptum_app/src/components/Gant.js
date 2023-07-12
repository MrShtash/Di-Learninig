import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom/client';
import axios from "axios";
import {GanttChart} from 'smart-webcomponents-react/ganttchart';

const GantComponent = () => {
    const treeSize = '30%';
	const durationUnit = 'hour';

	const taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '60%'
	},
	{
		label: 'Duration (hours)',
		value: 'duration',
		formatFunction: (date) => parseInt(date)
	}
	];

    const [ganttData, setGanttData] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState("");
    const [selectedProject, setSelectedProject] = useState("");
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [filteredSprints, setFilteredSprints] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get("/api/getAllData");
            setGanttData(response.data);
        } catch (error) {
            console.error("Error getting data:", error);
        }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCompany && ganttData.projects) {
        const projects = ganttData.projects.filter(
            (project) => project.company_id === Number(selectedCompany)
        );
        setFilteredProjects(projects);
        setSelectedProject("");
        }
    }, [selectedCompany, ganttData.projects]);

    useEffect(() => {
        if (selectedProject && ganttData.sprints) {
        const sprints = ganttData.sprints.filter(
            (sprint) => sprint.project_id === Number(selectedProject)
        );
        setFilteredSprints(sprints);
        }
    }, [selectedProject, ganttData.sprints]);

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleProjectChange = (e) => {
        setSelectedProject(e.target.value);
    };

    // const dataSource = filteredProjects.length > 0
    //                 && filteredSprints.length > 0
    //                 && ganttData
    //                 && ganttData.works
    //   ? [
    //       {
    //         label: 'Projects',
    //         type: 'project',
    //         children: filteredProjects.map((project) => {
    //             const sprints = filteredSprints.filter(
    //                 (sprint) => sprint.project_id === project.project_id
    //             );
    //             return {
    //                 label: project.name,
    //                 dateStart: project.s_date,
    //                 dateEnd: project.e_date,
    //                 class: 'project-team',
    //                 type: 'task',
    //                 children: sprints.map((sprint) => {
    //                     const works = ganttData.works.filter(
    //                         (work) => work.sprint === sprint.sprint_id
    //                     );
    //                     return {
    //                         label: sprint.title,
    //                         dateStart: sprint.date_start,
    //                         dateEnd: sprint.date_end,
    //                         class: 'sprint-team',
    //                         type: 'task',
    //                         children: works.map((work) => ({
    //                             label: work.title,
    //                             dateStart: work.date_creation,
    //                             dateEnd: work.date_complete,
    //                             class: 'work-team',
    //                             type: 'task',
    //                 })),
    //               };
    //             }),
    //           };
    //         }),
    //       },
    // ]: [];

    // const dataSource = filteredSprints.length > 0
    //                     && ganttData.works
    // ? filteredSprints.map((sprint) => {
    //     const works = ganttData.works.filter(
    //         (work) => work.sprint === sprint.sprint_id);
    //     return {
    //         label: sprint.title,
    //         dateStart: sprint.date_start,
    //         dateEnd: sprint.date_end,
    //         class: 'sprint-team',
    //         // expanded: true,
    //         type: 'project',
    //         tasks: [
    //             works.map((work) => ({
    //             label: work.title,
    //             dateStart: work.date_creation,
    //             dateEnd: work.date_complete,
    //             class: 'work-team',
    //             type: 'task',
    //         }))


    //         // {
    //         //     type: 'task',
    //         //     label: 'title',
    //         //     dateStart: '2020-6-1',
    //         //     dateEnd: '2020-6-1'
    //         //     // class: 'work-team',
    //         // }

            
    //     ]
    //         // children: works.map((work) => ({
    //         //     label: work.title,
    //         //     dateStart: work.date_creation,
    //         //     dateEnd: work.date_complete,
    //         //     class: 'work-team',
    //         //     type: 'task',
    //         // })),
    //     };
    // }): [];



    const dataSource = filteredSprints.length > 0
                        && ganttData.works
    ? filteredSprints.map((sprint) => {
      const works = ganttData.works.filter(
                    (work) => work.sprint === sprint.sprint_id);
      const sprintItem = {
        label: sprint.title,
        dateStart: sprint.date_start,
        dateEnd: sprint.date_end,
        class: 'sprint-team',
        type: 'task',
        tasks: works.map((work) => ({
          label: work.title,
          dateStart: work.date_creation,
          dateEnd: work.date_complete,
          class: 'work-team',
          type: 'task',
        })),
      };
      return sprintItem;
    })
  : [];


    console.log(dataSource);
    // console.log(dataSource.projects);
    // console.log(dataSource[0]?.children);
    // console.log(dataSource.project);
    // console.log(dataSource[0]);
    // console.log(dataSource.sprint);
    // console.log(dataSource[0]?.children[0]);
    // console.log(dataSource.work);
    // console.log(dataSource[0].children[0]?.children);
    // console.log(dataSource.works);
    
	return (
		<div>
            <div>
                <label>Select Company:</label>
                    <select id = "company"
                            value = {selectedCompany}
                            onChange = {handleCompanyChange}>
                    <option value = "">--Please select Company--</option>
                    {ganttData.companies && ganttData.companies.map((company) => (
                        <option key = {company.company_id}
                                value = {company.company_id}>
                        {company.name}
                        </option>
                    ))}
                    </select>
            </div>
            <div>
                <label>Select Project:</label>
                    <select id = "project"
                            value = {selectedProject}
                            onChange = {handleProjectChange}>
                <option value = "">--Please select Project--</option>
                {filteredProjects.map((project) => (
                    <option key = {project.project_id}
                            value = {project.project_id}>
                    {project.name}
                    </option>
                ))}
                </select>
            </div>
            <div>
                <GanttChart dataSource = {dataSource}
                            taskColumns = {taskColumns}
                            treeSize = {treeSize}
                            durationUnit = {durationUnit} 
                            id = "gantt">
                </GanttChart>
            </div>
		</div>
	);
}

export default GantComponent;