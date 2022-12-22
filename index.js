import {articlesData} from "./data.js"
const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let index = 0;
let change = 0;
if (width > 767) {
    change = 6;
} else {
    change = 3;
}
document.addEventListener('click', e => {
    if(e.target.id === 'view-more-btn'){
        loadMore();
    }
})
function loadMore() {
    if (index < articlesData.length){
        render();
    }
}
function fetchData() {
    let dataHTML = '';
    for (let i = index; i < index + change; i++){
       if (i === articlesData.length) {
           index =articlesData.length;
          break;
      }
       
      dataHTML += constructArticle(articlesData[i]);
      
   }
    index+=change;
    return dataHTML;
}

function constructArticle(article) {
   
      return  `
    <div class="article">
       <img src="${article.img.src}" alt="${article.img.alt}" class="blog-img"/>
       <date>${article.date}</date>
       <h2>${article.title}</h2>
       <p>${article.preview}</p>
      </div>
      `; 

   
}

function render() {
    const data = fetchData()
    document.querySelector(".articles").innerHTML += data;
}
render();