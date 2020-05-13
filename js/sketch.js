// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        // Appel de notre fonction generator
        generator(random(0, windowWidth), random(0, windowHeight), 100, 120, random(0, windowHeight));
    }
}

// Fonction avec quatres paramètres
function generator(x, y, largeur, hauteur, hauteurToit) {
    // Façade
    rect(x, y, largeur, hauteur);
    //Toit
    triangle(x - largeur / 2, y - hauteur / 2, x + largeur / 2, y - hauteur / 2, x, hauteurToit);

}

function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}