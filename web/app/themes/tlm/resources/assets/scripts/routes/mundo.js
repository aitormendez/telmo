import p5 from 'p5/lib/p5.min';
// import 'p5/lib/addons/p5.sound';
// import 'p5/lib/addons/p5.dom';
export default {
  init() {
    // JavaScript to be fired on the mundo page




    var sketch = function(p) {
      window.p5 = p5;

      let pers, telmo, cuerpo, pataIzq, pataDer;

      p.preload = function() {
        cuerpo = p.loadImage('/app/themes/tlm/dist/images/mundo/persona/persona-cuerpo.png');
        pataIzq = p.loadImage('/app/themes/tlm/dist/images/mundo/persona/persona-pata-1.png');
        pataDer = p.loadImage('/app/themes/tlm/dist/images/mundo/persona/persona-pata-2.png');
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
        telmo.walk();
      };

      p.windowResized =function() {
        let canvasWidth = $('#stage').width();
        let canvasHeight = $('#stage').height();
        p.resizeCanvas(canvasWidth, canvasHeight);
        p.background(230);
      }

      p.mouseClicked = function() {
        telmo.setDestino(p.mouseX)
      }

      class Persona {

        constructor(pX, pY) {
          this.x = pX;
          this.y = pY;
          this.destino = this.x
          // this.ancho = p.width / 10;
          this.cuerpo = cuerpo;
          this.pataIzq = pataIzq;
          this.pataDer = pataDer;
        }

        show() {
          p.image(this.pataIzq, this.x -25, this.y + 40);
          p.image(this.pataDer, this.x + 5, this.y + 40);
          p.image(this.cuerpo, this.x, this.y);
        }

        setDestino(destino) {
          this.destino = destino;
        }

        walk() {
          if (this.destino > this.x + 2) {
            this.x = this.x + 2;
          } else if (this.destino < this.x - 2) {
            this.x = this.x - 2;
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
