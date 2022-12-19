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
        $(".foodItem").children("span").removeClass("highlightDF highlightSF");
        $(".gf").addClass("highlightGF");
    });
    $("#showSF").click(function() {
        $(".foodItem").children("span").removeClass("highlightDF highlightGF");
        $(".sf").addClass("highlightSF");
    });
    $("#showDF").click(function() {
        $(".foodItem").children("span").removeClass("highlightGF highlightSF");
        $(".df").addClass("highlightDF");
    });
    $("[data-toggle='tooltip']").tooltip();
});