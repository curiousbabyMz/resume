import { DirectionalLight, AmbientLight, Mesh } from "three";
import { ThreeRunner } from "./three";

// const { GLTFLoader } = require("three/examples/jsm/loaders/GLTFLoader");
const { OBJLoader } = require("three/examples/jsm/loaders/OBJLoader");
const { MTLLoader } = require("three/examples/jsm/loaders/MTLLoader");
const objectGeo: ThreeRunner = (scene, camera) => {
  // let loader = new GLTFLoader();
  // loader.load(
  //     'g.glb',
  //     gltf => {
  //         gltf.scene.scale.set(0.1, 0.1, 0.1)
  //         scene.add(gltf.scene);
  //     },
  //     opt => {
  //         console.log(opt);
  //     },
  //     err => {
  //         console.log(err);
  //     }
  // )

  const objLoader = new OBJLoader();
  const mtlLoader = new MTLLoader();
  const name = "file";
  const publicPath = `public/object`;

  mtlLoader.load(
    // `abc.mtl`,
    `${publicPath}/${name}.mtl`,
    (mtl: any) => {
      mtl.preload();
      objLoader.setMaterials(mtl);
      objLoader.load(
        `${publicPath}/${name}.obj`,
        (obj: Mesh) => {
          // obj.scale.set(0.05, 0.05, 0.05)
          obj.position.set(0, -50, 0);
          scene.add(obj);

          const light = new AmbientLight("#fff");
          // scene.add(light);

          const light2 = new DirectionalLight("#ff9", 1);
          light2.position.set(100, 100, 100);
          scene.add(light2);
        },
        null,
        (err: any) => console.log(err)
      );
    },
    null,
    (err: any) => console.log(err)
  );

  const updater = () => {};

  //control
  // let mm = e => {
  //         scene.rotation.y = ry + (e.clientX - x0) / 10
  //         scene.rotation.x = rx + (e.clientY - y0) / 10
  //     },
  //     x0 = 0,
  //     y0 = 0,
  //     rx, ry
  // addEventListener('mousedown', e => {
  //     x0 = e.clientX
  //     y0 = e.clientY
  //     rx = scene.rotation.x
  //     ry = scene.rotation.y
  //     addEventListener('mousemove', mm)
  // })
  // addEventListener('mouseup', e => {
  //     removeEventListener('mousemove', mm)
  // })
  return updater;
};
export default objectGeo;
