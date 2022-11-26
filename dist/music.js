const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: true,
  theme: "#000",
  mutex: true,
  lrcType: 1,
  audio: [
    {
      name: "星茶会",
      artist: "灰澈",
      url: "http://music.163.com/song/media/outer/url?id=492390949.mp3",
      cover:
        "http://p1.music.126.net/qhcfRnSXfNToa66ff7S8Kw==/109951167879453336.jpg?param=130y130",
      lrc: 
    },
  ],
});