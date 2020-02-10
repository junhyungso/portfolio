
  export default function News(news){ 
    return `   
    <section id = "news">
    <h1>News</h1>
    <input type="search" name='news' placeholder="Search News...">
          <div class="search">
            <div class = "news-list">
              ${NewsItems(news)}
            </div>
          </div>

    </section>`;
   }


   export function NewsItems(news){
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
    // slice(0,5);
   }

   
export function handleNewsFilter(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input', (event) =>{
      const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
      document.querySelector('.news-list').innerHTML = NewsItems(filtered);
  
    })
    ;
    
    
    
  }