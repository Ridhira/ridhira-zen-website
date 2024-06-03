let thumbnails = document.getElementById("thumbnails");
console.log("thumbnails", thumbnails);

let imgs = thumbnails.getElementsByTagName("img");
let main = document.getElementById("main");

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    main.src = this.src;
  });
}
