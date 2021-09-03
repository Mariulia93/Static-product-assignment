const url = "https://kea-alt-del.dk/t7/api/categories";
 
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategories(data);
  });
 
function handleCategories(data) {
  //console.log(data);
  data.forEach(showCategories);
}
 
function showCategories(cat) {
  console.log(cat);
 
  const catCard = document.querySelector("#cat-template").content;
  const copy = catCard.cloneNode(true);
 
  copy
    .querySelector(".cat-card")
    .setAttribute("href", "brands.html?categories=" + cat.category);
 
  copy.querySelector(".cat-title").textContent = cat.category;
 
  const parent = document.querySelector("main");
 
  parent.appendChild(copy);
}
 
// {
//    <template id="cat-template">
//     <a href="" class="cat-card">
//     <div class="cat-title">
 
//     </div>
// </a>
//     </template> 
// }