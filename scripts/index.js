let API = "AIzaSyDpt-QraIWcxa6udvXubFyWKHjxJ1tyWto";
let container = document.getElementById("container");
let getData = async () => {
  try {
    let query = document.getElementById("query").value;
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`
    );
    let { items } = await res.json();
    let videos = items;
    document.getElementById("query").value = null;
    appendVideos(videos);
  } catch (err) {
    console.log(err);
  }
};

let appendVideos = (data) => {
  container.innerHTML = null;
  data.forEach(({ snippet, snippet: { title }, id: { videoId } }) => {
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      playVideo(videoId, title);
    });
    let thum = document.createElement("img");
    thum.src = snippet.thumbnails.high.url;
    let title1 = document.createElement("h4");
    title1.innerText = title;
    div.append(thum, title1);
    container.append(div);
  });
};

let playVideo = (videoId, title) => {
  obj = {
    t: title,
    i: videoId,
  };
  localStorage.setItem("video", JSON.stringify(obj));
  window.location.href = "player.html";
};

let first = async () => {
  try {
    res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${API}&part=snippet&maxResults=20&chart=mostPopular&regionCode=IN`
    );
    let { items } = await res.json();
    let videos = items;
    appendVideos(videos);
  } catch (err) {
    console.log(err);
  }
};
first();
