document.addEventListener("DOMContentLoaded", function() {
    fetch("js/acessory.json")
      .then(response => response.json())
      .then(result => {
        let html = '';
        result.products.forEach(abcproduct => {
            html += `
                <div class="col-md-3 mb-4 col-12 justify-content-between">
                    <div class="card">
                        <img class="card-img-top p-2" src="${abcproduct.img}" alt="Card image cap">
                        <hr>
                        <div class="card-body">
                        <h5 class="card-title firsttext fs-2">${abcproduct.name}</h5>
                            <p class="card-text">${abcproduct.description}</p>
                        </div>
                    </div>
                </div>`;
        });
        document.querySelector(".desrows").innerHTML = html;
      })
      .catch(error => console.error("Error fetching images.json:", error));
});