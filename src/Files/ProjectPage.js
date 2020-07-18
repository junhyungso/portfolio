import NavBar from './NavBar.js';
import Projects, {handleProjectFilter} from './Projects.js';



export default function ProjectPage(project) {
    project.page = "project";
    document.querySelector(".container").innerHTML = `
    ${NavBar(project.page)}
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


