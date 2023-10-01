function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let path = pageID.split("/");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      //   console.log("data " + data);
      //   console.log(data);
      console.log(pageID); // print ot console the pageI
      $("#app").html(data);
    }).fail(function () {
      console.log("Page not found");
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    });
  }
}

function initListeners() {
  // Event Listeners for when modal is click
  $("#home").on("click", function (e) {
    $("#modal").toggle(); // Close Modal
  });
  $(".close").on("click", function (e) {
    $("#modal").toggle(); // Close Modal
    // $("#modal").hide();
  });

  // When Log in Button is clicked on
  $(".login").on("click", function (e) {
    $("#modal").toggle(); // Open Modal
    // $("#modal").show();
  });
}

function initSite() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initListeners();
  initSite();
});
