import {articlesData} from "./data.js"
let index = 0;

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
    // index += 3;
   for (let i = index; i < index + 3; i++){
       if (i === articlesData.length) {
           index =articlesData.length;
          break;
      }
       
      dataHTML += constructArticle(articlesData[i]);
      
   }
    index+=3;
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