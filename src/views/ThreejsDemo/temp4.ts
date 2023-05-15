import { BufferGeometry, LineBasicMaterial, Line, Vector3, Scene } from "three";
import { ThreeRunner } from "./three";
let createLine = (scene: Scene) => {
  let lineGeo = new BufferGeometry(),
    lineMat = new LineBasicMaterial({
      color: Math.random() * 255 * 255 * 255,
    }),
    line = new Line(lineGeo, lineMat);

  scene.add(line);

  lineGeo.setFromPoints([new Vector3(-100, 0), new Vector3(100, 0, 0)]);
  return line;
};
const lines: ThreeRunner = (scene, camera) => {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 30; i++) {
      let x = createLine(scene);
      x.position.y = i * 5 - 50;
      x.position.z = j * -5;
      let y = createLine(scene);
      y.position.x = i * 5 - 70;
      y.position.z = j * -5;
      y.rotation.z = Math.PI / 2;
    }
  }
  camera.position.y = 10;

  //   //control
  //   addEventListener("click", () => {
  //     updater.update = () => {
  //       scene.rotation.z -= 0.05;
  //       camera.position.z += 0.1;
  //     };
  //   });
  //   addEventListener("dblclick", () => {
  //     updater.update = () => {};
  //   });
  return () => {
    // scene.rotation.x += 0.01
    scene.rotation.y += 0.01;
    scene.rotation.z += 0.01;
    camera.position.z -= 0.05;
  };
};
export default lines;
