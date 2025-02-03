
dontPlaceQueen=[]
storeCordinates=[]
//getting the number from the box that tells how big the chessboard is and then generating the chessboard X*X size also doing all the visual stuff for the queen like shoing the attack lines and where the queen is,
function generateChessboard() {



    let input = document.getElementById("numberValue").value;

    let number1 = parseInt(input);
    let myheight=number1*25;
    let mywidth=number1*25
    // console.log(number1);

    if (number1 > 100) {
        alert("Please enter a valid number between 1-100");
        return;
    }


    const contentContainer = document.getElementById("contentContainer");

    contentContainer.innerHTML = "";





    // Set grid style
    contentContainer.style.gridTemplateColumns = `repeat(${number1}, 1fr)`;
    contentContainer.style.height = `${myheight}px`;
    contentContainer.style.width  = `${mywidth}px`;
    console.log(myheight);
    console.log(mywidth);

    for (let y = 0; y < number1; y++) {
        for (let x = 0; x < number1; x++) {








            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.addEventListener('click',() =>{
                let codinate={x,y}

                // console.log(codinate);
                calculateAttack(codinate);
            });





            let isQueen = storeCordinates.some(cord => cord.x === x  && cord.y === y );
            let isUnsafe = dontPlaceQueen.some(cord => cord.x === x && cord.y === y );
            // console.log(storeCordinates,"testing what is in it");
            // console.log(isUnsafe);
            if (isQueen) {
                // itemDiv.style.color = "LIME";
                // itemDiv.innerHTML = "Q";
                const img = document.createElement("img");
                img.src = "../img/queen.jpg"
                img.style.height = "40px"
                img.style.width = "$40px";
                img.style.justifyContent = "center";
                itemDiv.appendChild(img);

            }  else if (isUnsafe) {
                console.log(isUnsafe)
                // console.log(isQueen)
                itemDiv.style.color = "RED";
                itemDiv.innerHTML = "x";
            }
// Check every other coordinate
            if ((x + y) % 2 === 0) {
                itemDiv.style.backgroundColor = "green"; // Dark square
            } else {
                itemDiv.style.backgroundColor = "blue"; // Light square
            }


        // Append the item to the container
        contentContainer.appendChild(itemDiv);


    }


}





//used to calculate where the queens attack lines go and checking if a queen is inside another queens attack lines
function calculateAttack(codinate) {



    // let tempCordY= document.getElementById("cord1").value;
    // let tempCordX = document.getElementById("cord2").value;
    //


    // let cordinate = {x: cordX, y: cordY};



    console.log(dontPlaceQueen, "loggin queen");
    console.log("dontPlaceQueen.some result:",!dontPlaceQueen.some(coord => coord.x === codinate.x && coord.y === codinate.y))

    let isUnsafe = dontPlaceQueen.some(coord => coord.x === codinate.x && coord.y === codinate.y);
    if (isUnsafe) {
        alert("you cannot place a queen here")
        return;

    } else {
        storeCordinates.push(codinate);
    }




    let input = document.getElementById("numberValue").value;

    let number1 = parseInt(input);

    if (codinate && codinate > 100) {
        alert("Please enter a valid number between 1-100");
        return;
    }
    console.log(codinate.x, codinate.y, "this is cordinate x and y");




// this makes x+ →
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x + i, y: codinate.y ,};

            // console.log(cantplacequeen8);
            dontPlaceQueen.push(cantplacequeen);

    }
    //this make y downward ↓
    for (let i = 1; i < number1; i++) {  // Start from 1 to avoid re-marking queen's position
        let cantplacequeen = {x: codinate.x, y: codinate.y + i};
        if (cantplacequeen.y < number1) {  // No need to check x; it stays the same
            dontPlaceQueen.push(cantplacequeen);
        }
    }

//this is the other x- ←
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x - i, y: codinate.y ,};
        if(cantplacequeen.x >= 0 || cantplacequeen.y >= 0) {
            // console.log(cantplacequeen);
            dontPlaceQueen.push(cantplacequeen);
        }
    }
    //this is y in the upward direction ↑
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x, y: codinate.y - i,};
        if(cantplacequeen.x >= 0 || cantplacequeen.y >= 0) {
            // console.log(cantplacequeen);
            dontPlaceQueen.push(cantplacequeen);
        }
    }

    //diagional ↗
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x + i, y: codinate.y - i ,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
    //diregonal down ↙
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x - i, y: codinate.y + i ,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
//diregonal down ↘
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x + i, y: codinate.y + i,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }
    //diragonal ↖
    for (let i = 0; i < number1 - 1; i++) {
        let cantplacequeen = {x: codinate.x -  i, y: codinate.y - i,};

        // console.log(cantplacequeen);
        dontPlaceQueen.push(cantplacequeen);
    }

    console.log(dontPlaceQueen);
    generateChessboard()
    }
}
