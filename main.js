fetch('Files/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  const params = new URLSearchParams(window.location.search);
  console.log(params)

  if (params.get("project") === null) 
    renderMainPage(data);

  else {
    console.log("renderProjectPage");
    let id = params.get("project");
    let project = data.projects.find(function (project){
      return project.id === id;
    });//project => project.id === id);
    console.log("project", project);
    renderProjectPage(project);
  }
});

  function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
      ${renderNavBar(data.page)}
      ${renderAbout(data.about)}
      ${renderSkills(data.skills)}
      ${renderNews(data.news)}
      ${renderProjects(data.projects)}
        
    `;
    const queryString = window.location;
    console.log(queryString, `queryString`);

    if (queryString.search === "?page=about"){
      document.querySelector('.container').innerHTML = `
      ${renderNavBar(data.page)}
      ${renderAbout(data.about)} 
      `
    }

    if (queryString.search === "?page=skills"){
      document.querySelector('.container').innerHTML = `
      ${renderNavBar(data.page)}
      ${renderSkills(data.skills)} 
      `
    }
    if (queryString.search === "?page=news"){
      document.querySelector('.container').innerHTML = `
      ${renderNavBar(data.page)}
      ${renderNews(data.news)} 
      `
    }
    if (queryString.search === "?page=projects"){
      document.querySelector('.container').innerHTML = `
      ${renderNavBar(data.page)}
      ${renderProjects(data.projects)} 
        `
    }


} 

  function renderProjectPage(project) {
    project.page = "project";
    document.querySelector(".container").innerHTML = `
    ${renderNavBar(project.page)}
      <section>
            <h1>${project.id}</h1>
            <img src="${project.teaser}" width="100%">
            <div>
                <strong>${project.authors}</strong><br>
            </div>
            <div>
                ${project.date}
            </div>
            <div>
            
            </div>
            <div>
                <p>
                ${project.description}
                    </span>
                </p>
            </div>
            <div>

            </div>
        </section>`;     
}

  function renderNavBar(page){
    if (page === 'project'){
        return `
          <nav>
            <ul>
              <li>
                <a href=".">Go Back</a>
              </li>
            </ul>
          <nav>`
    }
    else{
      return`
      <nav>
        <ul>
          <li>
            <a href ="/">Home</a>
          </li>
          <li>
            <a href ="?page=about">About</a>
          </li>
          <li>
            <a href ="?page=skills">Skills</a>
          </li>
          <li>
            <a href="?page=news">News</a>
          </li>
          <li>
            <a href="?page=projects">Projects</a>
          </li>
        </ul>
      </nav>
    `};
  }
  function renderAbout(d){ 
    return `
    <section id = "about">
    <h1 class="animated heartBeat">${d.name}</h1>
      <div class="row">
        <div class="col-6">
            <img src="${d.photo}" class="center">
            <div class= "leftmargin">
                <strong> ${d.title}</strong><br>
                ${d.email}<br>
                 <a href="Files/Resume.pdf" target="_blank"><i class="far fa-file"></i> ${d.resume}</a> |
                 <a href="https://twitter.com/junhyungso" target="_blank"><i class="fab fa-twitter"></i>${d.twitter}</a> |
                 <a href="https://linkedin.com/in/junhyungso"target="_blank"><i class="fab fa-linkedin"></i> ${d.linkedin}</a> 
            </div>
        </div>
        <div class="col-6">
          <p>
                ${d.description}    
          </p>      
        </div>
      <div>
    </section>
    

    `;

   }


   function renderSkills(d){
    return `
      <section id = "skills">
        <h1>Skills</h1>
          <div class = "center">
            ${d.skills}
          </div>
      </section>`;
   }


  function renderNews(news){ 
    return ` 
    <section id = "news">
        <h1>News</h1>
          ${renderNewsItems(news)}
    </section>`;
   }


   function renderNewsItems(news){
    return news.map(d=>`
      <div class="row">
        <div class="col-8">
          <strong>${d.title}</strong>
        </div>
        <div class="col-4">
          ${d.date}
        </div><br>
        </div>
    
    `).join('');
   }



  function renderProjects(projects){
    return `
    <section id="projects">
        <h1>Projects</h1>
        <!-- we will add a filter interface here in the next lab -->
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
    </section>`;
}


function renderProjectItems(projects){
    return projects.map(d=>`
      <div class="row">
        <div class="col-6">
          <div class="topmargin">
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        <div>
          ${d.authors}<br>
        </div>
        <div>
          <span class="tag business">${d.tags}</span><br>
        </div>
          </div>
        </div>

        <div class="col-6">
          <img src="${d.teaser}" width="100%">
        </div>
      </div>

    `).join('');
}
