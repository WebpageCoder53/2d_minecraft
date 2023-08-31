var canvas = new fabric.Canvas("myCanvas");
block_size = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";
item = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(120);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y, left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_size);
        block_image_object.scaleToHeight(block_size);
        block_image_object.set({
            top: player_y, left: player_x
        });
        canvas.add(block_image_object);
    });
}

function place(item) {
       console.log("placed " + item); 
    
    if (item == 'cloud') {
        new_image('cloud.jpg');
    }
    if (item == 'wall') {
        new_image('wall.jpg');
    }
    if (item == 'ground') {
        new_image('ground.png');
    }
    if (item == 'light_green') {
        new_image('light_green.png');
    }
    if (item == 'trunk') {
        new_image('trunk.jpg');
    }
    if (item == 'roof') {
        new_image('roof.jpg');
    }
    if (item == 'yellow_wall') {
        new_image('yellow_wall.png');
    }
    if (item == 'dark_green') {
        new_image('dark_green.png');
    }
    if (item == 'glowstone') {
        new_image('glowstone.png');
    }
    
}
    player_update();
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("Shift+p pressed");
        block_size += 10;
        document.getElementById("size1").innerHTML = block_size;
        document.getElementById("size2").innerHTML = block_size;
    }
    if(e.shiftKey == true && keyPressed == '77') {
        console.log("Shift+m pressed");
        block_size -= 10;
        document.getElementById("size1").innerHTML = block_size;
        document.getElementById("size2").innerHTML = block_size;
    }

    if(keyPressed=='38') {
        up();
        console.log("up");
    }
    if(keyPressed=='40') {
        down();
        console.log("down");
    }
    if(keyPressed=='37') {
        left();
        console.log("left");
    }
    if(keyPressed=='39') {
        right();
        console.log("right");
    }
    
    if (keyPressed == "87") {
        new_image('wall.jpg');
        console.log("w");
    }
    if (keyPressed == "71") {
        new_image('ground.png');
        console.log("g");
    }
    if (keyPressed == "76") {
        new_image('light_green.png');
        console.log("l");
    }
    if (keyPressed == "84") {
        new_image('trunk.jpg');
        console.log("t");
    }
    if (keyPressed == "82") {
        new_image('wall.jpg');
        console.log("r");
    }
    if (keyPressed == "89") {
        new_image('yellow_wall.jpg');
        console.log("w");
    }
    if (keyPressed == "68") {
        new_image('dark_green.png');
        console.log("d");
    }
    if (keyPressed == "85") {
        new_image('glowstone.png');
        console.log("u");
    }
    if (keyPressed == "67") {
        new_image('cloud.jpg');
        console.log("c");
    }  
}

function up() {
    if(player_y >= 0) {
    player_y -= block_size;
    console.log("Up was pressed, new x and y: " + player_x + ", " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function down() {
    if(player_y <= 700) {
    player_y += block_size;
    console.log("Down was pressed, new x and y: " + player_x + ", " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function left() {
    if(player_x >= 0) {
    player_x -= block_size;
    console.log("Left was pressed, new x and y: " + player_x + ", " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

function right() {
    if(player_x <= 900) {
    player_x += block_size;
    console.log("Right was pressed, new x and y: " + player_x + ", " + player_y);
    canvas.remove(player_object);
    player_update();
    }
}

