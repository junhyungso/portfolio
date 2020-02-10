import NavBar from './NavBar.js';
import About from './About.js';
import Skills from './skills.js';
import News, {handleNewsFilter} from './News.js';
import Projects, {handleProjectFilter} from './Projects.js';





export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
      ${NavBar(data.page)}
      ${About(data.about)}
      ${Skills(data.skills)}
      ${News(data.news)}
      ${Projects(data.projects)}
    `;  

    handleNewsFilter(data);
    handleProjectFilter(data);

    const queryString = window.location;
    console.log(queryString, `queryString`);

    if (queryString.search === "?page=about"){
      document.querySelector('.container').innerHTML = `
      ${NavBar(data.page)}
      ${About(data.about)} 
      `
    }

    if (queryString.search === "?page=skills"){
      document.querySelector('.container').innerHTML = `
      ${NavBar(data.page)}
      ${Skills(data.skills)} 
      `
    }
    
    if (queryString.search === "?page=news"){
      document.querySelector('.container').innerHTML = `
      ${NavBar(data.page)}
      ${News(data.news)} 
      `
      handleNewsFilter(data);
    }

    if (queryString.search === "?page=projects"){
      document.querySelector('.container').innerHTML = `
      ${NavBar(data.page)}
      ${Projects(data.projects)} 
        `
      handleProjectFilter(data);

    }


} 

