import MainPage from './Files/MainPage.js';
import ProjectPage from './Files/ProjectPage.js';




fetch('Files/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  const params = new URLSearchParams(window.location.search);
  console.log(params)

  if (params.get("project") === null) 
    MainPage(data);

  else {
    console.log("ProjectPage");
    let id = params.get("project");
    let project = data.projects.find(function (project){
      return project.id === id;
    });
    ProjectPage(project);
  }
});

 
