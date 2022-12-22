import {articlesData} from "./data.js"

function fetchData() {
    let dataHTML = '';
    articlesData.forEach(article => {
        dataHTML += constructArticle(article)
    })
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
    document.querySelector(".articles").innerHTML = fetchData();
}
render();