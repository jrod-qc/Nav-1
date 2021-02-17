$(".lp-request-quote-btn").on("click", function() {
    $(".lp-modal-content").css("display", "flex");
});

$(".lp-modal-exit-btn").on("click", function() {
    $(".lp-modal-content").css("display", "none");
});

$(".lp-video-modal-btn").on("click", function() {
    $(".lp-modal-video").css("display", "flex");
});

$(".lp-video-modal-exit-btn-icon").on("click", function() {
    $(".lp-modal-video").css("display", "none");
});

$(".lp-burger-btn").on("click", function() {
    $(".lp-nav-mobile").css("transform", "translateX(0px)");
});

$(".lp-mobile-exit-nav").on("click", function() {
    $(".lp-nav-mobile").css("transform", "translateX(250px)");
});

$(".lp-anchor-clicked").on("click", function() {
    $(".lp-nav-mobile").css("transform", "translateX(250px)");
});