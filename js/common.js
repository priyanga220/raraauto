function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach((element) => {
    const file = element.getAttribute("data-include");
    if (file) {
      fetch(file)
        .then((response) => response.text())
        .then((data) => {
          element.innerHTML = data;
          if (file === "./menubar.html") {
            setActiveMenu();
          }
        })
        .catch((err) => {
          element.innerHTML = "<p>Content not found.</p>";
        });
    }
  });
}

function setActiveMenu() {
  const path = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".nav-item.nav-link");
  menuLinks.forEach((link) => {
    const page = link.getAttribute("data-page");
    if (page === "pages") {
      const items = document.querySelectorAll(".dropdown-item");
      items.forEach((page) => {
        const item = page.getAttribute("data-page") + ".html";
        if (item === path) {
          link.classList.add("active");
          page.classList.add("active");
        }
      });
    }
    if (page + ".html" === path) {
      link.classList.add("active");
    }
  });
}

function loadImageGallery() {
  var folder = "imgs/gallery/";
  var $all = $("#galleryDiv");
  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|jpeg|png|gif)$/)) {
            var block =
              '<div class="col-md-4"><div>' +
              '<img src="' +
              val +
              '"class="img-responsive galImg" onClick="viewImage(this)" alt="Fjords" style="width:100%">' +
              ' <div class="caption"><p>Lorem ipsum...</p></div></div>';

            $all.append(block);
          }
        });
    },
  });
}

function viewImage(imgObj) {
  let imageModel = document.getElementById("imageModel");
  let imgSrc = $(imgObj).attr("src");
  $("#img01").attr("src", imgSrc);
  imageModel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
$(".image-close")[0].onclick = function () {
  let imageModel = document.getElementById("imageModel");
  imageModel.style.display = "none";
};

// Function to load the gallery images using jQuery
function loadImageGallery2() {
  var folder = "imgs/gallery/";
  var $all = $("#galleryDiv2");

  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|gif)$/i)) {
            var block = `
              <div class="col-md-3">
                <a href="#" data-toggle="modal" data-target="#lightboxModal" data-image="${val}">
                  <img src="${val}" class="img-thumbnail galImg" alt="Gallery Image">
                </a>
              </div>`;
            $all.append(block);
          }
        });
    },
    error: function () {
      alert("Error loading images.");
    },
  });
}
