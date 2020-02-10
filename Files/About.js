
  export default function About(d){ 
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