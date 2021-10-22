(() => {
  const theFavDesTemplate = document.querySelector("#favdes-template").content;

  const theFavThings = document.querySelector("#fav-things");

  let desc = {};

  var fToggle = new Array(0, 0, 0);

  function getDesc() {
    fetch("./desc.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        desc = data;
        console.log(desc);
      });
  }

  function buildDesc(event) {
    let fId = event.target.parentElement.id;
    var thingNo = `${fId}`.replace(/[^0-9]/g, "") - 1;

    console.log(thingNo);

    if (fToggle[thingNo] == 0) {
      let desPanel = theFavDesTemplate.cloneNode(true);

      let desContainer = desPanel.firstElementChild.children;
      console.log(desc[fId]);

      let imgSource = desc[fId].source;

      desContainer[0].querySelector("img").src = `images/${imgSource}`;
      desContainer[1].textContent = desc[fId].description;
      desContainer[2].textContent = desc[fId].fact;
      document.getElementById(fId).appendChild(desPanel);
      fToggle[thingNo] = 1;
    } else {
      console.log("else statement");
      let fParent = event.target.parentNode;
      console.log(fParent);
      let deleteChild = fParent.children[1];
      console.log(deleteChild);

      fParent.removeChild(deleteChild);
      fToggle[thingNo] = 0;
    }
  }
  getDesc();
  theFavThings.addEventListener("click", buildDesc);
})();
