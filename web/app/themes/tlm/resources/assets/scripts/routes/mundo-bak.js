import p5 from 'p5/lib/p5';
import 'p5/lib/addons/p5.sound';
// import 'p5/lib/addons/p5.dom';
export default {
  init() {
    // JavaScript to be fired on the mundo page

    // hashed assets names
    /* eslint-disable no-undef */
    let personaPata1 = mundoData.personaPata1;
    let personaPata2 = mundoData.personaPata2;
    let personaCuerpo = mundoData.personaCuerpo;
    console.log(personaCuerpo);
    /* eslint-enable */


    var sketch = function(p) {
      window.p5 = p5;

      let pers, telmo, cuerpo, pataIzq, pataDer;

      p.preload = function() {
        cuerpo = p.loadImage(personaCuerpo);
        pataIzq = p.loadImage(personaPata1);
        pataDer = p.loadImage(personaPata2);
      }

      p.setup = function() {
        let canvasWidth = $('#stage').width() + 15;
        let canvasHeight = $('#stage').height();
        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('stage');
        p.background(230);
        p.imageMode(p.CENTER);
        telmo = new Persona(p.width / 2, p.height / 5 * 3);
      };

      p.draw = function() {
        p.background(230);
        telmo.show();

        if (telmo.walking == true) {
          telmo.walk();
          telmo.muevePatas();
        }
      };

      p.windowResized =function() {
        let canvasWidth = $('#stage').width();
        let canvasHeight = $('#stage').height();
        p.resizeCanvas(canvasWidth, canvasHeight);
        p.background(230);
      }

      p.mouseClicked = function() {
        telmo.setDestino(p.mouseX);
      }

      class Persona {

        constructor(pX, pY) {
          this.x = pX;
          this.y = pY;
          this.destino = this.x
          this.cuerpo = cuerpo;
          this.pataIzq = pataIzq;
          this.pataDer = pataDer;
          this.pataArriba = this.y + 36;
          this.pataAbajo = this.y + 44;
          this.walking = false;
          this.pataPosQuieto = this.y + 40;
          this.pataPosIzq = this.pataPosQuieto;
          this.pataPosder = this.pataPosQuieto;
          this.pataPosIndicadorDer = 'arriba';
          this.pataPosIndicadorIzq = 'abajo';
          this.countIzq = 0;
          this.countDer = 0;
          this.destino = undefined;
        }

        show() {
          if (this.walking == true) {
            p.image(this.pataIzq, this.x -25, this.pataPosIzq);
            p.image(this.pataDer, this.x + 5, this.pataPosder);
          } else {
            p.image(this.pataIzq, this.x -25, this.pataPosQuieto);
            p.image(this.pataDer, this.x + 5, this.pataPosQuieto);
          }

          p.image(this.cuerpo, this.x, this.y);
        }

        setDestino(destino) {
          this.destino = destino;
          this.setWalking();
        }

        muevePatas() {

          // Right leg

          if (this.pataPosIndicadorDer === 'arriba') {
              this.pataPosder = this.pataArriba;
              this.countDer++;
              if (this.countDer === 10) {
                this.pataPosIndicadorDer = 'abajo';
                this.countDer = 0;
              }
          } else if (this.pataPosIndicadorDer === 'abajo') {
            this.pataPosder = this.pataAbajo;
            this.countDer++;
            if (this.countDer === 10) {
              this.pataPosIndicadorDer = 'arriba';
              this.countDer = 0;
            }
          }

          // Left leg

          if (this.pataPosIndicadorIzq === 'arriba') {
              this.pataPosIzq = this.pataArriba;
              this.countIzq++;
              if (this.countIzq === 10) {
                this.pataPosIndicadorIzq = 'abajo';
                this.countIzq = 0;
              }
          } else if (this.pataPosIndicadorIzq === 'abajo') {
            this.pataPosIzq = this.pataAbajo;
            this.countIzq++;
            if (this.countIzq === 10) {
              this.pataPosIndicadorIzq = 'arriba';
              this.countIzq = 0;
            }
          }
        } // muevePatas

        setWalking() {
          if (this.destino != undefined) {
            this.walking = true;
          } else {
            this.walking = false;
          }
        }

        walk() {
          if (this.destino > this.x + 50) {
            this.x = this.x + 3;
          } else if (this.destino < this.x + 50 && this.destino > this.x + 2) {
            this.x = this.x + (this.destino - this.x) / 20;
          } else if (this.destino < this.x - 50) {
            this.x = this.x - 3;
          } else if (this.destino > this.x - 50 && this.destino < this.x - 3) {
            this.x = this.x - (-this.destino + this.x) / 20;
          } else {
            this.destino = undefined;
            this.walking = false;
          }
        }


      } // class persona



    };
    new p5(sketch);

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
