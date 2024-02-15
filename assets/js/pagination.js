let thisPage = 1;
let limit = 8;
let list = document.querySelectorAll(".product-item .product-details__search");

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector(".pagination").innerHTML = "";

    if (thisPage != 1) {
        let prev = document.createElement("li");
        prev.innerText = "PREV";
        prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
        document.querySelector(".pagination").appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement("li");
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add("active");
        }
        newPage.setAttribute("onclick", "changePage(" + i + ")");
        document.querySelector(".pagination").appendChild(newPage);
    }

    if (thisPage != count) {
        let next = document.createElement("li");
        next.innerText = "NEXT";
        next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
        document.querySelector(".pagination").appendChild(next);
    }
}
function changePage(i) {
    thisPage = i;
    loadItem();
}
