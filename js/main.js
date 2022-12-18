$(function() {
    $("#games1").click(function() {
        $("#gameCarousel").carousel(0);
    });
    $("#games2").click(function() {
        $("#gameCarousel").carousel(1);
    });
    $("#games3").click(function() {
        $("#gameCarousel").carousel(2);
    });
    $("#showGF").click(function() {
        $(".foodItem").children("span").removeClass("highlight");
        $(".gf").addClass("highlight");
    });
    $("#showSF").click(function() {
        $(".foodItem").children("span").removeClass("highlight");
        $(".sf").addClass("highlight");
    });
    $("#showDF").click(function() {
        $(".foodItem").children("span").removeClass("highlight");
        $(".df").addClass("highlight");
    });
});