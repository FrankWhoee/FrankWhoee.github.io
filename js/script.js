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

const ctx = document.getElementById('githubChart');

// https://api.github.com/users/frankwhoee/events?page=1
data = {}
fetch("https://api.github.com/users/frankwhoee/events?per_page=100").then(response => response.json()).then(json =>{
    for(i = 0; i < json.length; i++){
        stamp = json[i].created_at.substring(0,10)
        if(stamp in data){
            data[stamp] += 1
        }else{
            data[stamp] = 1
        }
    }

    data = Object.entries(data)
    for(i = 0; i < data.length; i++){
        data[i] = {x:data[i][0], y:data[i][1]}
    }
    console.log(data)
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Github Contributions',
                data: data,
                borderColor: "rgba(211,141,95,1)",
                backgroundColor: "rgba(211,141,95,1)"
            }],
        },
        options: {
            scales: {
                x: {
                    type: 'time'
                }
            }
        }
    });
})

