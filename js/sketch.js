// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let maison;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
    colorMode(HSB, 100);
    maison = new Maison(windowWidth / 2, windowHeight / 2, random(30, 200), random(30, 400), random(30, 400));
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        // Appel de notre fonction generator
        maison.afficher();
    }
}

//class ou objet
class Maison {
    constructor(x, y, largeur, hauteur, hauteurToit) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.hauteurToit = hauteurToit;
    }
    afficher() {
        //Façade
        fill(random(0, 10), random(50, 100), random(50, 100));
        rect(this.x, this.y, this.largeur, this.hauteur);
        //Toit
        fill(random(10, 20), random(50, 100), random(50, 100));
        triangle(this.x - this.largeur / 2, this.y - this.hauteur / 2, this.x + this.largeur / 2, this.y - this.hauteur / 2, this.x, this.y - this.hauteur / 2 - this.hauteurToit);
        //porte
        rect(this.x, this.y + this.hauteur / 4, this.largeur / 3, this.hauteur / 2);
        //Fenêtres
        fill(random(60, 70), random(50, 100), random(50, 100));
        rect(this.x + this.largeur / 3, this.y, this.largeur / 4, this.hauteur / 4);
        rect(this.x - this.largeur / 3, this.y, this.largeur / 4, this.hauteur / 4);
    }
}




// Fonction avec quatres paramètres
// function generator(x, y, largeur, hauteur, hauteurToit) {
//     // Façade
//     fill(random(0, 10), random(50, 100), random(50, 100));
//     rect(x, y, largeur, hauteur);
//     //Toit
//     fill(random(10, 20), random(50, 100), random(50, 100));
//     triangle(x - largeur / 2, y - hauteur / 2, x + largeur / 2, y - hauteur / 2, x, y - hauteur / 2 - hauteurToit);
//     //porte
//     rect(x, y + hauteur / 4, largeur / 3, hauteur / 2);
//     //Fenêtres
//     fill(random(60, 70), random(50, 100), random(50, 100));
//     rect(x + largeur / 3, y, largeur / 4, hauteur / 4);
//     rect(x - largeur / 3, y, largeur / 4, hauteur / 4);
//
// }

function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}