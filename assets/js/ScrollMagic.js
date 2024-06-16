// init controller
var controller = new ScrollMagic.Controller();

var img_place = document.getElementById("animate_img_place");

new ScrollMagic.Scene({
    triggerElement: img_place,
    offset: -650,
    triggerHook: 0.1,
})
    .setClassToggle(img_place, "zoomInRight")
    .addTo(controller);

/* animate time list */
var time_list = document.getElementById("animate_time_list");

new ScrollMagic.Scene({
    triggerElement: time_list,
    offset: -650,
    triggerHook: 0.1,
})
    .setClassToggle(time_list, "flipInX")
    .addTo(controller);

/* animate button*/
var btn_place = document.getElementById("animate_btn_place");

new ScrollMagic.Scene({
    triggerElement: btn_place,
    offset: -680,
    triggerHook: 0.1,
})
    .setClassToggle(btn_place, "bounceIn") 
    .addTo(controller);

/* animate_gift */
var gift_content = document.getElementById("animate_gift");

new ScrollMagic.Scene({
    triggerElement: gift_content,
    offset: -460,
    triggerHook: 0.1,
})
    .setClassToggle(gift_content, "swing") 
    .addTo(controller);