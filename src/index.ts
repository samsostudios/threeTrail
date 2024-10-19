// import Sketch from '';
import { threeScene } from './scene';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  threeScene();

  // new Sketch();
});
