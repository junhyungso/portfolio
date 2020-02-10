  export default function NavBar(page){
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
            <a href ="#about">About</a>
          </li>
          <li>
            <a href ="#skills">Skills</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    `};
  }