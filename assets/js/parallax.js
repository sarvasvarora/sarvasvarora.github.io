// Convert <img> into background-image for the image-wrap div
$(".image-wrap").each(function (index, el) {
    $(el).css({
        "min-width": "100vw",
        "height": "80vh",
        "overflow": "hidden",
        "position": "fixed",
        "z-index": "-100"
    });

    $(el).children("img").css({
        "height": "100%",
        "object-fit": "cover",
        "filter": "blur(5px)"
    });

    var pushDownEmptyDiv = $("<div></div>").css({
        "height": `${$(el).height()}`,
        "position": "relative",
        "top": 0
    });
    $(el).after(pushDownEmptyDiv);
});

// Reduce Blur on scroll for image
$(window).scroll(() => {
    let scroll_pos = $(window).scrollTop();
    // let opacity_val = scroll_pos / 400 + 0.8;
    let blur_val = Math.max(Math.log(500 / scroll_pos), 0);
    console.log(blur_val);
    $(".parallax>img").css("filter", `blur(${blur_val}px)`);
});

// Parallax Effect
$(window).on("scroll", () => {
    window.requestAnimationFrame(() => {
        let scroll_pos = $(window).scrollTop();
        $(".parallax").css("transform", `translate3d(0, ${scroll_pos * -0.1}px, 0)`);
    });
});