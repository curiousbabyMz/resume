import { BufferGeometry, LineBasicMaterial, Vector3, Line } from "three";
import TWEEN from "@tweenjs/tween.js";
import { ThreeRunner } from "./three";
const tweenTest: ThreeRunner = (scene, camera) => {
  let lineGeo = new BufferGeometry(),
    lineMat = new LineBasicMaterial({
      color: "#168",
    }),
    line = new Line(lineGeo, lineMat);

  scene.add(line);

  lineGeo.setFromPoints([
    new Vector3(10, 10, 10),
    new Vector3(-10, 10, 10),
    new Vector3(-10, -10, 10),
    new Vector3(10, -10, 10),
    new Vector3(10, -10, -10),
    new Vector3(10, 10, -10),
    new Vector3(-10, 10, -10),
    new Vector3(-10, -10, -10),
  ]);

  // line.rotation.y =Math.PI/180*45
  // line.rotation.z =Math.PI/180*45
  // camera.rotation.z = Math.PI / 180 * 45
  // let i = 0

  let t = new TWEEN.Tween(line.position)
      .delay(10)
      .to(
        {
          x: -30,
        },
        3000
      )
      .easing(TWEEN.Easing.Sinusoidal.Out)
      // .repeat(Infinity)
      .start(),
    t1 = new TWEEN.Tween(line.rotation).to(
      {
        y: (Math.PI / 180) * 60,
      },
      1000
    );
  // .onUpdate(() => console.log('update'))
  // .onComplete(() => console.log('complete'))

  t.chain(t1);
  // t1.chain(t)
  return () => {
    // camera.rotation.z = Math.sin(i += 0.05)

    // line.rotation.x += 0.01
    // line.rotation.y = Math.sin(i += 0.05)
    // i > Math.PI * 2 && (i = i % Math.PI / 2)
    // line.rotation.z += 0.01

    TWEEN.update();
  };
};

export default tweenTest;
