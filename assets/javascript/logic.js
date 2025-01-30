
dontPlaceQueen=[]
storeCordinates=[]
//getting the number from the box that tells how big the chessboard is and then generating the chessboard X*X size also doing all the visual stuff for the queen like shoing the attack lines and where the queen is,
function generateChessboard() {
    calculateAttack()


    let input = document.getElementById("numberValue").value;

    let number1 = parseInt(input);

    // console.log(number1);

    if (number1 > 100) {
        alert("Please enter a valid number between 1-100");
        return;
    }


    const contentContainer = document.getElementById("contentContainer");

    contentContainer.innerHTML = "";





    // Set grid style
    contentContainer.style.gridTemplateColumns = `repeat(${number1}, 1fr)`;

    for (let y = 0; y < number1; y++) {
        for (let x = 0; x < number1; x++) {



            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');


            let isQueen = storeCordinates.some(cord => cord.x === x  && cord.y === y );
            let isUnsafe = dontPlaceQueen.some(cord => cord.x === x && cord.y === y );
            // console.log(storeCordinates,"testing what is in it");
            // console.log(isUnsafe);
            if (isQueen) {
                itemDiv.style.color = "LIME";
                itemDiv.innerHTML = "Q";
            }  else if (isUnsafe) {
                // console.log(isUnsafe)
                // console.log(isQueen)
                itemDiv.style.color = "RED";
                itemDiv.innerHTML = "X";
            } else {

                itemDiv.innerHTML = "X";
            }


        // Append the item to the container
        contentContainer.appendChild(itemDiv);


    }


}





//used to calculate where the queens attack lines go and checking if a queen is inside another queens attack lines
function calculateAttack() {

    let tempCordY= document.getElementById("cord1").value;
    let tempCordX = document.getElementById("cord2").value;

    let cordY = parseInt(tempCordY);
    let cordX = parseInt(tempCordX);

    let cordinate = {x: cordX, y: cordY};


    console.log(cordinate);
    console.log(dontPlaceQueen, "loggin queen");
    console.log("dontPlaceQueen.some result:",!dontPlaceQueen.some(coord => coord.x === cordinate.x && coord.y === cordinate.y))

    let isUnsafe = dontPlaceQueen.some(coord => coord.x === cordinate.x && coord.y === cordinate.y);
    if (isUnsafe) {
        alert("you cannot place a queen here")
        return;

    } else {
        storeCordinates.push(cordinate);
    }




    let input = document.getElementById("numberValue").value;

    let number1 = parseInt(input);

    if (tempCordX && tempCordY > 100) {
        alert("Please enter a valid number between 1-100");
        return;
    }
    console.log(cordinate.x, cordinate.y, "this is cordinate x and y");


    let tempcordinateX = cordinate.x
    let tempcordinateY = cordinate.y

// this makes x+ →
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX + i, y: tempcordinateY ,};

            // console.log(cantplacequeen8);
            dontPlaceQueen.push(cantplacequeen);

    }
    //this make y downward ↓
    for (let i = 1; i < number1; i++) {  // Start from 1 to avoid re-marking queen's position
        let cantplacequeen = {x: tempcordinateX, y: tempcordinateY + i};
        if (cantplacequeen.y < number1) {  // No need to check x; it stays the same
            dontPlaceQueen.push(cantplacequeen);
        }
    }

//this is the other x- ←
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX - i, y: tempcordinateY ,};
        if(cantplacequeen.x >= 0 || cantplacequeen.y >= 0) {
            // console.log(cantplacequeen);
            dontPlaceQueen.push(cantplacequeen);
        }
    }
    //this is y in the upward direction ↑
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX, y: tempcordinateY - i,};
        if(cantplacequeen.x >= 0 || cantplacequeen.y >= 0) {
            // console.log(cantplacequeen);
            dontPlaceQueen.push(cantplacequeen);
        }
    }

    //diagional ↗
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX + i, y: tempcordinateY - i ,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
    //diregonal down ↙
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX - i, y: tempcordinateY + i ,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
//diregonal down ↘
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX + i, y: tempcordinateY + i,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
    //diragonal ↖
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: tempcordinateX -  i, y: tempcordinateY - i,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }

    console.log(dontPlaceQueen);
    }
}