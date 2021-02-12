$(".request-quote-btn").on("click", function() {
    $(".modal-content").css("display", "flex");
});

$(".modal-exit-btn").on("click", function() {
    $(".modal-content").css("display", "none");
});

$(".video-modal-btn").on("click", function() {
    $(".modal-video").css("display", "flex");
});

$(".video-modal-exit-btn-icon").on("click", function() {
    $(".modal-video").css("display", "none");
});

$(".burger-btn").on("click", function() {
    $(".nav-mobile").css("transform", "translateX(0px)");
});

$(".mobile-exit-nav").on("click", function() {
    $(".nav-mobile").css("transform", "translateX(250px)");
});

$(".anchor-clicked").on("click", function() {
    $(".nav-mobile").css("transform", "translateX(250px)");
});