import p5 from 'p5/lib/p5.min';
// import 'p5/lib/addons/p5.sound';
// import 'p5/lib/addons/p5.dom';
export default {
  init() {
    // JavaScript to be fired on the mundo page




    var sketch = function(p) {
      window.p5 = p5;

      let pers;
      let telmo;

      p.setup = function () {
        const canvasWidth = $('#stage').width();
        const canvasHeight = $('#stage').height();
        let canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent('stage');
        p.background(230);
        telmo = new Persona(p.width / 2 - 50, p.height / 5 * 3);
      };

      p.draw = function () {
        telmo.show();
      };

      class Persona {

        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.cuerpo = p.loadImage('/app/themes/tlm/dist/images/mundo/persona/persona-cuerpo.png');
        }

        show() {
          p.image(this.cuerpo, this.x, this.y);
        }


      }



    };
    new p5(sketch);

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
