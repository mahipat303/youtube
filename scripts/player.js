video = JSON.parse(localStorage.getItem("video")) || {};
let container = document.getElementById("container");
let list = document.getElementById("list");
let append = ({ i, t }) => {
  let div = document.createElement("div");
  let fram = document.createElement("iframe");
  fram.src = `https://www.youtube.com/embed/${i}`;
  fram.width = "100%";
  fram.height = "100%";
  fram.frameborder = "0";
  fram.allow =
    "fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  let title1 = document.createElement("h4");
  title1.innerText = t;
  div.append(fram, title1);
  container.append(div);
};
append(video);
