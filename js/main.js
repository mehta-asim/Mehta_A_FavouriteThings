(() => {
  const theFav = document.querySelector("#fav-things"),
    theFavDesTemplate = document.querySelector("#favdes-template").content;

  const theFavThings = document.querySelector("#fav-things");

  let desc = {};

  // function getImage() {
  //   fetch("./image-data.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       buildImage(data);
  //       // debugger;
  //       let favImages = document.querySelectorAll(".fav-image");
  //       imgClick(favImages);
  //       // debugger;
  //     })
  //     .catch((error) => console.error(error));
  // }

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
    debugger;
    // const desc = Object.keys(description);
    // const desc = "Valorant";
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
  }
  function addInfo() {
    getDesc();
    debugger;
    buildDesc(desc);
    console.log("addInfo fired");
    // debugger;

    // let key = this.dataset.key;
    // debugger;
    // let name = document.querySelector("h2");
    // debugger;
    // name.textContent =
    // // name.textContent =
  }
  //   function builDesc(description) {
  //     const desc = Object.keys(description);

  //     desc.forEach((des) => {
  //       let desPanel = theFavDesTemplate.cloneNode(true);

  //       let desContainer = desPanel.firstElementChild.children;

  //       desContainer[0].textContent = description[des].name;
  //       desContainer[1].textContent = description[des].description;
  //       desContainer[2].textContent = description[des].fact;

  //       debugger;

  //       theFav.appendChild(desPanel);
  //     });
  //   }

  // function buildImage(info) {
  //   const image = Object.keys(info);

  //   image.forEach((source) => {
  //     let imagePanel = theFavImgTemplate.cloneNode(true);

  //     let imageContainer = imagePanel.children;

  //     imageContainer[0].querySelector(
  //       "img"
  //     ).src = `images/${info[source].source}`;
  //     debugger;
  //     imageContainer[0].classList.add(`${source}`);
  //     //   debugger;

  //     theFav.appendChild(imagePanel);
  //   });
  // }

  // function imgClick(favImages) {
  //   favImages.forEach((img) => img.addEventListener("click", addInfo));
  //   debugger;
  // }

  // getImage();
  getDesc();
  theFavThings.addEventListener("click", buildDesc);
})();
