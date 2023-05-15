import {
  Mesh,
  AmbientLight,
  CylinderGeometry,
  MeshPhongMaterial,
  AxesHelper,
  PointLight,
  MeshLambertMaterial,
  DirectionalLight,
  Texture,
  Mapping,
  RGBAFormat,
  UnsignedByteType,
  MeshBasicMaterial,
  TextureLoader,
  Vector2,
  PlaneGeometry,
  BoxGeometry,
  Vector3,
  Color,
  LoadingManager,
  RepeatWrapping,
  LinearMipMapLinearFilter,
  NearestFilter,
} from "three";
import { ThreeRunner } from "./three";
const box: ThreeRunner = (scene, camera) => {
  const uvs = [
    //right
    [
      [0, 0.5],
      [0.5, 0.5],
      [0, 0],
    ],
    [
      [0, 0],
      [0.5, 0],
      [0.5, 0.5],
    ],
    //left
    [
      [0, 1],
      [0, 0.5],
      [0.5, 1],
    ],
    [
      [0, 0.5],
      [0.5, 0.5],
      [0.5, 1],
    ],
    //top
    [
      [0.5, 0.5],
      [0.5, 0],
      [1, 0.5],
    ],
    [
      [0.5, 0],
      [1, 0],
      [1, 0.5],
    ],
    //bottom
    [
      [0.5, 1],
      [0.5, 0.5],
      [1, 1],
    ],
    [
      [0.5, 0.5],
      [1, 0.5],
      [1, 1],
    ],
    //front
    [
      [0, 0.5],
      [0.5, 0.5],
      [0, 0],
    ],
    [
      [0.5, 0.5],
      [1, 0.5],
      [1, 1],
    ],
    //behind
    [
      [0, 1],
      [0, 0.5],
      [0.5, 1],
    ],
    [
      [0.5, 0],
      [1, 0],
      [1, 0.5],
    ],
  ];
  // boxGeo = new PlaneGeometry(50, 30, 1, 1)
  // boxGeo = new CylinderGeometry(10, 10, 10, 10, 100)
  const boxGeo = new BoxGeometry(30, 30, 30);

  //   uvs.map((v, i) => {
  //     boxGeo.faceVertexUvs[0][i] = v.map((e) => new Vector2(...e));
  //   });
  //   console.log(boxGeo.faceVertexUvs);

  const image = new TextureLoader().load(
    require("../../assets/pictures/threejs/stone.jpg")
  );
  const bump = new TextureLoader().load(
    require("../../assets/pictures/threejs/stone2.jpg")
  );
  const boxMat = new MeshPhongMaterial({
    // map: image, //纹理
    // bumpMap: bump,//凹凸纹理
    // bumpScale:-20
    // normalMap: bump, //法向纹理
    // normalScale: new Vector2(6, 10),
  });
  image.wrapS = RepeatWrapping;
  image.wrapT = RepeatWrapping;
  image.repeat.x = 2;
  image.repeat.y = 2;
  image.center.x = 0.5;
  image.center.y = 0.5;
  // image.rotation = Math.PI * 0.25;
  image.offset.x=0.8
  image.minFilter=LinearMipMapLinearFilter
  image.magFilter=NearestFilter

  bump.wrapS = RepeatWrapping;
  bump.repeat.x = 3;
  // const boxMat = new MeshPhongMaterial({
  //     color: '#753',
  //     specular: '#eee',
  //     shininess: 1
  // })
  boxMat.map = image;
  boxMat.normalMap = image;
  // boxMat.bumpMap = bump;
  const box = new Mesh(boxGeo, boxMat);

  const loaderManager = new LoadingManager();

  const textureLoader = new TextureLoader(loaderManager);

  console.log(boxGeo);
  scene.add(box);

  const axesHelper = new AxesHelper(20); //辅助坐标,轴长200
  // scene.add(axesHelper);

  const light = new DirectionalLight("#fff", 1);
  // light = new PointLight('#00f', 1, 0),
  // light = new AmbientLight('#5ad'),
  scene.add(light);

  // light.position.set(0, 0, 30);
  // box.rotation.x = Math.PI / 180 * 45
  // box.rotation.y = Math.PI / 180 * 90
  // box.rotation.z = Math.PI / 180 * 45

  //control
  let x0 = 0,
    y0 = 0,
    rx = 0,
    ry = 0,
    mm = (e: any) => {
      scene.rotation.y = ry + (e.clientX - x0) / 10;
      scene.rotation.x = rx + (e.clientY - y0) / 10;
    };
  addEventListener("mousedown", (e) => {
    x0 = e.clientX;
    y0 = e.clientY;
    rx = box.rotation.x;
    ry = box.rotation.y;
    addEventListener("mousemove", mm);
  });
  addEventListener("mouseup", (e) => {
    removeEventListener("mousemove", mm);
  });

  return () => {
    // box.rotation.x += 0.01
    // box.rotation.y += 0.01
    // box.rotation.z += 0.01
  };
};
export default box;
