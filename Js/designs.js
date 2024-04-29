// fetch("images.json")
// .then(response =>response.json()).then(result=>{
//     for(let abcproduct of result.product)
//     {
//      document.getElementById("image-container").innerHTML += 
//      `
//      <div class="card " style="width: 18rem;">
//             <img class="card-img-top pt-4" src="${abcproduct.img}" alt="Card image cap">
//             <div class="card-body">
//               <p class="card-text">${abcproduct.description}</p>
//             </div>
//           </div>
     
//      `
//     }
// })
// console.log(abcproduct.img)
document.addEventListener("DOMContentLoaded", function() {
    fetch("js/images.json")
      .then(response => response.json())
      .then(result => {
        for (let abcproduct of result.products) {
          document.querySelector(".descon").innerHTML +=
            `<div class="card" style="width: 18rem;">
              <img class="card-img-top pt-4" src="${abcproduct.img}" >
              <div class="card-body">
                <p class="card-text">${abcproduct.description}</p>
              </div>
            </div>`;
        }
      })
      .catch(error => console.error("Error fetching images.json:", error));
});
