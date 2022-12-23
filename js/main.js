$(function () {
    $("#games1").click(function () {
        $("#gameCarousel").carousel(0);
    });
    $("#games2").click(function () {
        $("#gameCarousel").carousel(1);
    });
    $("#games3").click(function () {
        $("#gameCarousel").carousel(2);
    });
    $("#showGF").click(function () {
        $(".foodItem").children("span").removeClass("highlightDF highlightSF");
        $(".gf").addClass("highlightGF");
    });
    $("#showSF").click(function () {
        $(".foodItem").children("span").removeClass("highlightDF highlightGF");
        $(".sf").addClass("highlightSF");
    });
    $("#showDF").click(function () {
        $(".foodItem").children("span").removeClass("highlightGF highlightSF");
        $(".df").addClass("highlightDF");
    });
    $("[data-toggle='tooltip']").tooltip();
    $("#vrButton").click(function () {
        $("#roomModal").modal("toggle");
        $(".eventMI").html("VR Sandbox");
        $("#eventName").attr("placeholder", "VR Sandbox");
    });
    $("#drButton").click(function () {
        $("#roomModal").modal("toggle");
        $(".eventMI").html("D&D Room");
        $("#eventName").attr("placeholder", "D&D Room");
    });
    $("#krButton").click(function () {
        $("#roomModal").modal("toggle");
        $(".eventMI").html("Karaoke Room");
        $("#eventName").attr("placeholder", "Karaoke Room");
    });
    $("#shopButton1").click(function () {
        $("#shopModal").modal("toggle");
        $("#shopImage").attr("src", "img/drinkDrag.jpg");
        $("#purchaseItem").html("Drinking & Dragons Tee");
        $("#shopPrice").val("15.00");
    });
    $("#shopButton2").click(function () {
        $("#shopModal").modal("toggle");
        $("#shopImage").attr("src", "img/gamerlogo.jpg");
        $("#purchaseItem").html("Gamer Cafe Tee");
        $("#shopPrice").val("12.00");
    });
    $("#shopButton3").click(function () {
        $("#shopModal").modal("toggle");
        $("#shopImage").attr("src", "img/dance.jpg");
        $("#purchaseItem").html("Dance Dance X-Treme Tee");
        $("#shopPrice").val("15.00");
    });
    $("#shopButton4").click(function () {
        $("#shopModal").modal("toggle");
        $("#shopImage").attr("src", "img/pacman.jpg");
        $("#purchaseItem").html("Retro Pac-Man Tee");
        $("#shopPrice").val("10.00");
    });
    $("#games1").click(function () {
        $("#gamePic1").attr("src", "img/pacman.jpg");
        $("#gamePic2").attr("src", "img/frogger.jpg");
        $("#gamePic3").attr("src", "img/dkjr.jpg");
        $("#gamePic4").attr("src", "img/streetfighter.jpg");
    });
    $("#games2").click(function () {
        $("#gamePic1").attr("src", "img/starwarspod.jpg");
        $("#gamePic2").attr("src", "img/mkart.jpg");
        $("#gamePic3").attr("src", "img/injustice.jpg");
        $("#gamePic4").attr("src", "img/vrcoaster.png");
    });
    $("#games3").click(function () {
        $("#gamePic1").attr("src", "img/skeeball.jpg");
        $("#gamePic2").attr("src", "img/hockey.png");
        $("#gamePic3").attr("src", "img/vrgolf.jpg");
        $("#gamePic4").attr("src", "img/race.jpg");
    });
});