/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Files/About.js":
/*!****************************!*\
  !*** ./src/Files/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });

  function About(d){ 
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

/***/ }),

/***/ "./src/Files/MainPage.js":
/*!*******************************!*\
  !*** ./src/Files/MainPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPage; });
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.js */ "./src/Files/NavBar.js");
/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.js */ "./src/Files/About.js");
/* harmony import */ var _skills_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills.js */ "./src/Files/skills.js");
/* harmony import */ var _News_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./News.js */ "./src/Files/News.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects.js */ "./src/Files/Projects.js");










function MainPage(data){
    document.querySelector('.container').innerHTML = `
      ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.page)}
      ${Object(_About_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.about)}
      ${Object(_skills_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.skills)}
      ${Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.news)}
      ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data.projects)}
    `;  

    Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["handleNewsFilter"])(data);
    Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["handleProjectFilter"])(data);

    const queryString = window.location;
    console.log(queryString, `queryString`);

    if (queryString.search === "?page=about"){
      document.querySelector('.container').innerHTML = `
      ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.page)}
      ${Object(_About_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.about)} 
      `
    }

    if (queryString.search === "?page=skills"){
      document.querySelector('.container').innerHTML = `
      ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.page)}
      ${Object(_skills_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.skills)} 
      `
    }
    
    if (queryString.search === "?page=news"){
      document.querySelector('.container').innerHTML = `
      ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.page)}
      ${Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data.news)} 
      `
      Object(_News_js__WEBPACK_IMPORTED_MODULE_3__["handleNewsFilter"])(data);
    }

    if (queryString.search === "?page=projects"){
      document.querySelector('.container').innerHTML = `
      ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.page)}
      ${Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["default"])(data.projects)} 
        `
      Object(_Projects_js__WEBPACK_IMPORTED_MODULE_4__["handleProjectFilter"])(data);

    }


} 



/***/ }),

/***/ "./src/Files/NavBar.js":
/*!*****************************!*\
  !*** ./src/Files/NavBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
  function NavBar(page){
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

/***/ }),

/***/ "./src/Files/News.js":
/*!***************************!*\
  !*** ./src/Files/News.js ***!
  \***************************/
/*! exports provided: default, NewsItems, handleNewsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItems", function() { return NewsItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleNewsFilter", function() { return handleNewsFilter; });

  function News(news){ 
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


   function NewsItems(news){
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

   
function handleNewsFilter(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input', (event) =>{
      const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()));
      document.querySelector('.news-list').innerHTML = NewsItems(filtered);
  
    })
    ;
    
    
    
  }

/***/ }),

/***/ "./src/Files/ProjectPage.js":
/*!**********************************!*\
  !*** ./src/Files/ProjectPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectPage; });
/* harmony import */ var _NavBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.js */ "./src/Files/NavBar.js");
/* harmony import */ var _Projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.js */ "./src/Files/Projects.js");





function ProjectPage(project) {
    project.page = "project";
    document.querySelector(".container").innerHTML = `
    ${Object(_NavBar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project.page)}
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




/***/ }),

/***/ "./src/Files/Projects.js":
/*!*******************************!*\
  !*** ./src/Files/Projects.js ***!
  \*******************************/
/*! exports provided: default, ProjectItems, handleProjectFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItems", function() { return ProjectItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleProjectFilter", function() { return handleProjectFilter; });

function Projects(projects){
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


function ProjectItems(projects){
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



function handleProjectFilter(data){
   
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

/***/ }),

/***/ "./src/Files/skills.js":
/*!*****************************!*\
  !*** ./src/Files/skills.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
function Skills(d){
    return `
      <section id = "skills">
        <h1>Skills</h1>
          <div class = "center">
            ${d.skills}
          </div>
      </section>`;
   }

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Files_MainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Files/MainPage.js */ "./src/Files/MainPage.js");
/* harmony import */ var _Files_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files/ProjectPage.js */ "./src/Files/ProjectPage.js");



fetch('Files/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  const params = new URLSearchParams(window.location.search);
  console.log(params)

  if (params.get("project") === null) 
    Object(_Files_MainPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data);

  else {
    console.log("ProjectPage");
    let id = params.get("project");
    let project = data.projects.find(function (project){
      return project.id === id;
    });
    Object(_Files_ProjectPage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
  }
});

 


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZpbGVzL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9GaWxlcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRmlsZXMvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWxlcy9OZXdzLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWxlcy9Qcm9qZWN0UGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRmlsZXMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZpbGVzL3NraWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxFQUFpQixrQjtBQUNqQjtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7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QUNOOzs7QUFHQSxHOzs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUEyQztBQUNNOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtFQUFROztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxxRUFBVztBQUNmO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dChkKXsgXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHNlY3Rpb24gaWQgPSBcImFib3V0XCI+XHJcbiAgICA8aDEgY2xhc3M9XCJhbmltYXRlZCBoZWFydEJlYXRcIj4ke2QubmFtZX08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtkLnBob3RvfVwiIGNsYXNzPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9IFwibGVmdG1hcmdpblwiPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4gJHtkLnRpdGxlfTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgICAgICR7ZC5lbWFpbH08YnI+XHJcbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIkZpbGVzL1Jlc3VtZS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhciBmYS1maWxlXCI+PC9pPiAke2QucmVzdW1lfTwvYT4gfFxyXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2p1bmh5dW5nc29cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS10d2l0dGVyXCI+PC9pPiR7ZC50d2l0dGVyfTwvYT4gfFxyXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xpbmtlZGluLmNvbS9pbi9qdW5oeXVuZ3NvXCJ0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhYiBmYS1saW5rZWRpblwiPjwvaT4gJHtkLmxpbmtlZGlufTwvYT4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAke2QuZGVzY3JpcHRpb259ICAgIFxyXG4gICAgICAgICAgPC9wPiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgXHJcblxyXG4gICAgYDtcclxuXHJcbiAgIH0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQuanMnO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4vc2tpbGxzLmpzJztcclxuaW1wb3J0IE5ld3MsIHtoYW5kbGVOZXdzRmlsdGVyfSBmcm9tICcuL05ld3MuanMnO1xyXG5pbXBvcnQgUHJvamVjdHMsIHtoYW5kbGVQcm9qZWN0RmlsdGVyfSBmcm9tICcuL1Byb2plY3RzLmpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZShkYXRhKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICR7TmF2QmFyKGRhdGEucGFnZSl9XHJcbiAgICAgICR7QWJvdXQoZGF0YS5hYm91dCl9XHJcbiAgICAgICR7U2tpbGxzKGRhdGEuc2tpbGxzKX1cclxuICAgICAgJHtOZXdzKGRhdGEubmV3cyl9XHJcbiAgICAgICR7UHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9XHJcbiAgICBgOyAgXHJcblxyXG4gICAgaGFuZGxlTmV3c0ZpbHRlcihkYXRhKTtcclxuICAgIGhhbmRsZVByb2plY3RGaWx0ZXIoZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb247XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeVN0cmluZywgYHF1ZXJ5U3RyaW5nYCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5U3RyaW5nLnNlYXJjaCA9PT0gXCI/cGFnZT1hYm91dFwiKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgJHtOYXZCYXIoZGF0YS5wYWdlKX1cclxuICAgICAgJHtBYm91dChkYXRhLmFib3V0KX0gXHJcbiAgICAgIGBcclxuICAgIH1cclxuXHJcbiAgICBpZiAocXVlcnlTdHJpbmcuc2VhcmNoID09PSBcIj9wYWdlPXNraWxsc1wiKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGBcclxuICAgICAgJHtOYXZCYXIoZGF0YS5wYWdlKX1cclxuICAgICAgJHtTa2lsbHMoZGF0YS5za2lsbHMpfSBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocXVlcnlTdHJpbmcuc2VhcmNoID09PSBcIj9wYWdlPW5ld3NcIil7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICR7TmF2QmFyKGRhdGEucGFnZSl9XHJcbiAgICAgICR7TmV3cyhkYXRhLm5ld3MpfSBcclxuICAgICAgYFxyXG4gICAgICBoYW5kbGVOZXdzRmlsdGVyKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChxdWVyeVN0cmluZy5zZWFyY2ggPT09IFwiP3BhZ2U9cHJvamVjdHNcIil7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICR7TmF2QmFyKGRhdGEucGFnZSl9XHJcbiAgICAgICR7UHJvamVjdHMoZGF0YS5wcm9qZWN0cyl9IFxyXG4gICAgICAgIGBcclxuICAgICAgaGFuZGxlUHJvamVjdEZpbHRlcihkYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSBcclxuXHJcbiIsIiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHBhZ2Upe1xyXG4gICAgaWYgKHBhZ2UgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLlwiPkdvIEJhY2s8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxuYXY+YFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuYFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZiA9XCIjYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWYgPVwiI3NraWxsc1wiPlNraWxsczwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPk5ld3M8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI3Byb2plY3RzXCI+UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgYH07XHJcbiAgfSIsIlxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MobmV3cyl7IFxyXG4gICAgcmV0dXJuIGAgICBcclxuICAgIDxzZWN0aW9uIGlkID0gXCJuZXdzXCI+XHJcbiAgICA8aDE+TmV3czwvaDE+XHJcbiAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIG5hbWU9J25ld3MnIHBsYWNlaG9sZGVyPVwiU2VhcmNoIE5ld3MuLi5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwibmV3cy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgJHtOZXdzSXRlbXMobmV3cyl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9zZWN0aW9uPmA7XHJcbiAgIH1cclxuXHJcblxyXG4gICBleHBvcnQgZnVuY3Rpb24gTmV3c0l0ZW1zKG5ld3Mpe1xyXG4gICAgcmV0dXJuIG5ld3MubWFwKGQ9PmBcclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxyXG4gICAgICAgICAgPHN0cm9uZz4ke2QudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XHJcbiAgICAgICAgICAke2QuZGF0ZX1cclxuICAgICAgICA8L2Rpdj48YnI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIGApLmpvaW4oJycpO1xyXG4gICAgLy8gc2xpY2UoMCw1KTtcclxuICAgfVxyXG5cclxuICAgXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdzRmlsdGVyKGRhdGEpe1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zZWFyY2hdJyk7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT57XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5uZXdzLmZpbHRlcihuZXdzPT5uZXdzLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtbGlzdCcpLmlubmVySFRNTCA9IE5ld3NJdGVtcyhmaWx0ZXJlZCk7XHJcbiAgXHJcbiAgICB9KVxyXG4gICAgO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gIH0iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vTmF2QmFyLmpzJztcclxuaW1wb3J0IFByb2plY3RzLCB7aGFuZGxlUHJvamVjdEZpbHRlcn0gZnJvbSAnLi9Qcm9qZWN0cy5qcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RQYWdlKHByb2plY3QpIHtcclxuICAgIHByb2plY3QucGFnZSA9IFwicHJvamVjdFwiO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG4gICAgJHtOYXZCYXIocHJvamVjdC5wYWdlKX1cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxoMT4ke3Byb2plY3QuaWR9PC9oMT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QudGVhc2VyfVwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ke3Byb2plY3QuYXV0aG9yc308L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgJHtwcm9qZWN0LmRhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPmA7ICAgICBcclxufVxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9qZWN0cyl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPiAgICAgXHJcbiAgICA8aDE+UHJvamVjdHM8L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlclwiPlxyXG4gICAgPGxhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiQWxsXCI+XHJcbiAgICAgIEFsbFxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxsYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIkNcIj5cclxuICAgICAgQ1xyXG4gICAgPC9sYWJlbD5cclxuICAgIDxsYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWx0ZXJcIiB2YWx1ZT1cIlNoZWxsXCI+XHJcbiAgICAgIFNoZWxsXHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGxhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiQnVzaW5lc3NcIj5cclxuICAgICAgQnVzaW5lc3NcclxuICAgIDwvbGFiZWw+XHJcbiAgICA8bGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyXCIgdmFsdWU9XCJNZW1vcnlcIj5cclxuICAgICAgTWVtb3J5XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPGxhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlclwiIHZhbHVlPVwiTmFpbHNcIj5cclxuICAgICAgTmFpbHNcclxuICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj4gICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0XCI+XHJcbiAgICAgICAgICAgICR7UHJvamVjdEl0ZW1zKHByb2plY3RzKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5gO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RJdGVtcyhwcm9qZWN0cyl7XHJcbiAgICByZXR1cm4gcHJvamVjdHMubWFwKGQ9PmBcclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcG1hcmdpblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiP3Byb2plY3Q9JHtkLmlkfVwiPjxzdHJvbmc+JHtkLnRpdGxlfTwvc3Ryb25nPjwvYT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgJHtkLmF1dGhvcnN9PGJyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBidXNpbmVzc1wiPiR7ZC50YWdzWzBdfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIHNoZWxsXCI+JHtkLnRhZ3NbMV19PC9zcGFuPjxicj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7ZC50ZWFzZXJ9XCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIGApLmpvaW4oJycpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0RmlsdGVyKGRhdGEpe1xyXG4gICBcclxuICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlciBpbnB1dFtuYW1lPVwiZmlsdGVyXCJdJyk7XHJcbiAgICBidXR0b25zLmZvckVhY2goY29uZD0+Y29uZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICBcclxuICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAgXCJBbGxcIil7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdCcpLmlubmVySFRNTCA9IFByb2plY3RJdGVtcyhkYXRhLnByb2plY3RzKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICBjb25zdCBidXR0b25maWx0ZXJlZCA9IGRhdGEucHJvamVjdHMuZmlsdGVyKHByb2plY3RzPT4oKHByb2plY3RzLnRhZ3NbMF0udG9Mb3dlckNhc2UoKT09PShldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgKHByb2plY3RzLnRhZ3NbMV0udG9Mb3dlckNhc2UoKT09PShldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkpKSkpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JykuaW5uZXJIVE1MID0gUHJvamVjdEl0ZW1zKGJ1dHRvbmZpbHRlcmVkKTtcclxuICAgIH19KSlcclxuICA7XHJcbiAgICBcclxuICAgIFxyXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoZCl7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8c2VjdGlvbiBpZCA9IFwic2tpbGxzXCI+XHJcbiAgICAgICAgPGgxPlNraWxsczwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgJHtkLnNraWxsc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+YDtcclxuICAgfSIsImltcG9ydCBNYWluUGFnZSBmcm9tICcuL0ZpbGVzL01haW5QYWdlLmpzJztcclxuaW1wb3J0IFByb2plY3RQYWdlIGZyb20gJy4vRmlsZXMvUHJvamVjdFBhZ2UuanMnO1xyXG5cclxuZmV0Y2goJ0ZpbGVzL2RhdGEuanNvbicpXHJcbi50aGVuKHJlc3BvbnNlID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59KVxyXG4udGhlbihkYXRhID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnNvbGUubG9nKHBhcmFtcylcclxuXHJcbiAgaWYgKHBhcmFtcy5nZXQoXCJwcm9qZWN0XCIpID09PSBudWxsKSBcclxuICAgIE1haW5QYWdlKGRhdGEpO1xyXG5cclxuICBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdFBhZ2VcIik7XHJcbiAgICBsZXQgaWQgPSBwYXJhbXMuZ2V0KFwicHJvamVjdFwiKTtcclxuICAgIGxldCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKGZ1bmN0aW9uIChwcm9qZWN0KXtcclxuICAgICAgcmV0dXJuIHByb2plY3QuaWQgPT09IGlkO1xyXG4gICAgfSk7XHJcbiAgICBQcm9qZWN0UGFnZShwcm9qZWN0KTtcclxuICB9XHJcbn0pO1xyXG5cclxuIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9