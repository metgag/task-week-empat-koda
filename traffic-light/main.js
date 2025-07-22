const rdLight = document.querySelector(".rd-light");
const ylLight = document.querySelector(".yl-light");
const grLight = document.querySelector(".gr-light");
const trafLight = document.querySelector("#traf-light");

rdLight.classList.add("on");

(() => {
    setTimeout(() => {
        rdLight.classList.remove("on");
        ylLight.classList.add("on");
        setTimeout(() => {
            ylLight.classList.remove("on");
            grLight.classList.add("on");
            setTimeout(() => {
                grLight.classList.remove("on");
                rdLight.classList.add("on");
            }, 3000);
        }, 2000);
    }, 3000);
})();
