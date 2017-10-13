window.onload = function()
{
var imageForWath = document.getElementById("imageForWath");
var image = new Image;

imageForWath.appendChild(image);

var thumbnail = document.getElementsByClassName("thumbnail");

var currentThumbnail = thumbnail[0];

image.src = currentThumbnail.getAttribute("src");
currentThumbnail.className += " current";

for (var i = 0; i < thumbnail.length; i++)
{
    thumbnail[i].onmouseover = function() //lub po onclick
    {
       currentThumbnail.className = currentThumbnail.className.replace("current", "");
       currentThumbnail = this;
       currentThumbnail.className += " current";
       
       image.src = this.getAttribute("src");
    };
};

};
