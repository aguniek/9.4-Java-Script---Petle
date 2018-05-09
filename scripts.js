/* Prawa część choinki */

function drawTree(height) {
    for (i = 0; i < height; i++) {

        var star = "";
        for (j = 0; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }
}

/* Choinka symetryczna - dodatkowe */

function drawSymetricTree(height) {
    for (i = 0; i < height; i++) {
        var spaces = "";
        for (k = 0; k < height - i; k++) {
            spaces += " ";
        }


        var star = "*";
        for (j = 0; j < i; j++) {
            star += "**";
        }
        console.log(spaces + star);
    }
}
