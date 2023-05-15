import { Mesh, MeshPhongMaterial, PointLight } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { ThreeRunner } from "./three";
const font: ThreeRunner = (scene, camera) => {
  new FontLoader().load(
    "https://www.techbrood.com/threejs/examples/fonts/helvetiker_regular.typeface.json",
    (font) => {
      let textGeo = new TextGeometry("hello Hao~", {
          font,
          size: 10,
          height: 1,
        }),
        textMat = new MeshPhongMaterial({
          // color: '#159'
        }),
        text = new Mesh(textGeo, textMat),
        light = new PointLight("#9f0");

      light.position.set(0, 10, 10);
      scene.add(text);
      scene.add(light);
    }
  );

  //control
  let mm = (e: any) => {
      scene.rotation.y = ry + (e.clientX - x0) / 10;
      scene.rotation.x = rx + (e.clientY - y0) / 10;
    },
    x0 = 0,
    y0 = 0,
    rx = 0,
    ry = 0;
  addEventListener("mousedown", (e) => {
    x0 = e.clientX;
    y0 = e.clientY;
    rx = scene.rotation.x;
    ry = scene.rotation.y;
    addEventListener("mousemove", mm);
  });
  addEventListener("mouseup", (e) => {
    removeEventListener("mousemove", mm);
  });
  return () => {};
};
export default font;
