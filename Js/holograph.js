 function holographsdata() {
    fetch("http://127.0.0.1:5500/js/holograph.json")
      .then(response => response.json())
      .then(result => {
        let html = '';
        result.products.forEach(abcproduct => {
            html += `
            <div class="col-md-3 mb-4 col-12 justify-content-between">
            <div class="card">
                <img  src="${abcproduct.img}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title firsttext fs-4">${abcproduct.name}</h5>
                    <p class="card-text">${abcproduct.description}</p>
                    <a  class="addtocart">Add to Cart</a>
                </div>
            </div>
        </div>`;
        });
        document.getElementById("desrows").innerHTML = html;
      })
      .catch(error => console.error("Error fetching images.json:", error));
};
holographsdata()