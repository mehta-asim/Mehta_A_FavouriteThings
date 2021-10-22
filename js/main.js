(() => {
  const theFav = document.querySelector("#fav-things"),
    theFavDesTemplate = document.querySelector("#favdes-template").content;

  const theFavThings = document.querySelector("#fav-things");

  let desc = {};

  function getDesc() {
    // debugger;
    fetch("./desc.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        desc = data;
        console.log(desc);
        // debugger;
      });
  }

  function buildDesc(event) {
    let fId = event.target.parentElement.id;

    let desPanel = theFavDesTemplate.cloneNode(true);

    let desContainer = desPanel.firstElementChild.children;
    console.log(desc[fId]);

    desContainer[0].querySelector("img").src = `images/${desc[fId].source}`;
    desContainer[1].textContent = desc[fId].description;
    desContainer[2].textContent = desc[fId].fact;
    // desContainer[2].textContent = desc[2].fact;
    document.getElementById(fId).appendChild(desPanel);
    debugger;
    // debugger;
  }

  getDesc();
  theFavThings.addEventListener("click", buildDesc);
})();
