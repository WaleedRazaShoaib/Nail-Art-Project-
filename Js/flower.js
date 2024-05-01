document.addEventListener("DOMContentLoaded", function() {
    fetch("js/flowers.json")
      .then(response => response.json())
      .then(result => {
        let html = '';
        result.products.forEach(abcproduct => {
            html += `
                <div class="col-md-3 mb-4 col-12 justify-content-between">
                    <div class="card">
                    <img class="card-img-top p-3 " src="${abcproduct.img}" alt="Card image cap">
                    <div class="card-body">
                    <hr>
                        <h5 class="card-title fs-3 firsttext">${abcproduct.name}</h5>
                            <p class="card-text">${abcproduct.description}</p>
                        </div>
                    </div>
                </div>`;
        });
        document.querySelector(".desrows").innerHTML = html;
      })
      .catch(error => console.error("Error fetching images.json:", error));
});