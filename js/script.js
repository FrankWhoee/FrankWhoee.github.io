document.addEventListener("DOMContentLoaded", function () {

    typeitloop()

});

function typeitloop(){
    new TypeIt("#typingtext", {
        speed: 50
    }).type("PROGRAMMER // 01")
        .pause(1500)
        .delete(16)
        .type("DESIGNER // 02")
        .pause(1500)
        .delete(14)
        .type("PHOTOGRAPHER // 03")
        .pause(1500)
        .delete(18)
        .type("GAMER // 04")
        .pause(1500)
        .delete(11)
        .type("SDN // 05")
        .pause(1500)
        .delete(9)
        .type("I AM FRANK HUI.")
        .pause(10000)
        .delete(15)
        .exec(typeitloop)
        .go();
}

anime({
    targets: '.arrow',
    translateY: 10,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});

