import p5 from 'p5/lib/p5.min';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
export default {
  init() {
    // JavaScript to be fired on the mundo page


    // Sketch scope
    // const sketch = (p5) => {

      // Variables scoped within p5
      // const canvasWidth = p5.windowWidth;
      // const canvasHeight = p5.windowHeight;
      // const d = new Star(500, 300, 4);

      // make library globally available


      // Setup function
      // ======================================
      // p5.setup = () => {
      //   let canvas = p5.createCanvas(canvasWidth, canvasHeight);
      //   canvas.parent('sketch');
      //   p5.background(200);
      //   p5.frameRate(10);
      // }

      // Draw function
      // ======================================
      // p5.draw = () => {
      //   p5.background('#111');
      //   drawStars(100)
      // }
    // }

    var sketch = function(p) {
      window.p5 = p5;
      const canvasWidth = p.windowWidth;
      const canvasHeight = p.windowHeight;
      p.setup = function () {
        p.createCanvas(canvasWidth, canvasHeight);
        p.background(200);
        p.ellipse(56, 46, 55, 55);
      };
    };
    new p5(sketch);

  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
