
export default function Projects(projects){
    return `
    <section id="projects">     
    <h1>Projects</h1>
    <div class="filter">
    <label>
      <input type="radio" name="filter" value="All">
      All
    </label>
    <label>
      <input type="radio" name="filter" value="C">
      C
    </label>
    <label>
      <input type="radio" name="filter" value="Shell">
      Shell
    </label>
    <label>
      <input type="radio" name="filter" value="Business">
      Business
    </label>
    <label>
      <input type="radio" name="filter" value="Memory">
      Memory
    </label>
    <label>
      <input type="radio" name="filter" value="Nails">
      Nails
    </label>
    </div>   
        <div class="project-list">
            ${ProjectItems(projects)}
        </div>
    </section>`;
}


export function ProjectItems(projects){
    return projects.map(d=>`
      <div class="row">
        <div class="col-6">
          <div class="topmargin">
            <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        <div>
          ${d.authors}<br>
        </div>
        <div>
          <span class="tag business">${d.tags[0]}</span>
          <span class="tag shell">${d.tags[1]}</span><br>

        </div>
          </div>
        </div>

        <div class="col-6">
          <img src="${d.teaser}" width="100%">
        </div>
      </div>

    `).join('');
}



export function handleProjectFilter(data){
   
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
    
      if(event.target.value ===  "All"){
        document.querySelector('.project-list').innerHTML = ProjectItems(data.projects);
      }
      else{
      const buttonfiltered = data.projects.filter(projects=>((projects.tags[0].toLowerCase()===(event.target.value.toLowerCase()) || (projects.tags[1].toLowerCase()===(event.target.value.toLowerCase())))));
      document.querySelector('.project-list').innerHTML = ProjectItems(buttonfiltered);
    }}))
  ;
    
    
  }