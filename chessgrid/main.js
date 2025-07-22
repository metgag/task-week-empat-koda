// no. 2 papan catur
const caturGrid = document.createElement("div");
caturGrid.classList.add("grid-catur");
document.body.appendChild(caturGrid);

let j = 0;

for (let i = 0; i <= 63; i++) {
    const anakSquare = document.createElement("div");
    anakSquare.classList.add("square");
    switch(i) {
        case 8:
            j=1;
            break;
            case 16:
                j=0;
                break;
                case 24:
                    j=1;
                    break;
                    case 32:
                        j=0;
                        break;
                        case 40:
                            j=1;
                            break;
                            case 48:
                                j=0;
                                break;
                                case 56:
                                    j=1;
                                    break;
    } if (i % 2 === j) {
        anakSquare.classList.add("wht");
    } 


    else {
        anakSquare.classList.add("blk");
    }
    caturGrid.append(anakSquare);
}
