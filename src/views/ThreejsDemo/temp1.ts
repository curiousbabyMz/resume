import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  PlaneGeometry,
  MeshLambertMaterial,
  AmbientLight,
  SphereGeometry,
  Fog,
  PointLight,
} from "three";
import { ThreeRunner } from "./three";
const dots: ThreeRunner = function (scene, camera) {
  let range = 200;
  let createBox = () => {
    let geometry = Math.round(Math.random())
        ? new SphereGeometry(1, 32, 32)
        : new BoxGeometry(1, 1, 1),
      material = new MeshBasicMaterial({
        color: Math.random() * 256 * 256 * 256,
      }),
      cube = new Mesh(geometry, material);
    cube.receiveShadow = true;
    // lineMaterial = new LineBasicMaterial({
    //     color: 0x996699
    // }),
    // lineGeometry = new Geometry(),
    // planeGeometry = new PlaneGeometry(60, 20, 1, 1),
    // planeMaterial = new MeshBasicMaterial({
    //     color: 0xffffff
    // }),
    // plane = new Mesh(planeGeometry, planeMaterial)

    // lineGeometry.vertices.push(new Vector3(-2, 0, 0))
    // lineGeometry.vertices.push(new Vector3(0, 3, 0))
    // lineGeometry.vertices.push(new Vector3(0, 0, 2))

    // let line = new Line(lineGeometry, lineMaterial)

    // plane.receiveShadow = true
    // plane.rotation.x = -0.5 * Math.PI
    // plane.position.x = 15
    // plane.position.y = 0
    // plane.position.z = 0

    scene.add(cube);
    cube.position.x = Math.random() * range - range / 2;
    cube.position.y = Math.random() * range - range / 2;
    cube.position.z = Math.random() * range - range / 2;
  };
  let planeGeometry = new PlaneGeometry(range * 3, range * 3),
    planeMaterial = new MeshLambertMaterial({
      color: 0xffffff,
    }),
    plane = new Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -90;
  plane.position.y = -range;
  plane.receiveShadow = true;
  scene.add(plane);

  //环境光效果
  let light = new AmbientLight(0x353535);
  scene.add(light);

  //雾效果
  let fog = new Fog(0xffffcc, 1, 500);
  scene.fog = fog;

  //点光源效果
  let pointLight = new PointLight(0xffffee, 1, range, 2);
  pointLight.position.set(range, range, 0);
  scene.add(pointLight);

  // scene.add(line)
  // camera.position.x = 20
  // camera.position.y = 20
  camera.position.z = range;
  camera.lookAt(scene.position);
  let times = 200;
  for (let i = 0; i < times; i++) {
    createBox();
  }
  let rx = camera.rotation.x,
    ry = camera.rotation.y;

  //control
  let x0 = 0,
    y0 = 0;

  let tmEvent = (e: any) => {
    camera.rotation.y = ry + (e.clientX - x0) / 30;
    camera.rotation.x = rx + (e.clientY - y0) / 30;
    // camera.lookAt(e.clientX, e.clientY, e.clientZ)
    // scene.rotation.y = (e.clientX - x0) / 10
    // scene.rotation.x = (e.clientY - y0) / 10
    // x0 = e.clientX
    // y0 = e.clientY
  };
  // addEventListener('mousedown', e => {
  //     x0 = e.clientX
  //     y0 = e.clientY
  //     // x0 = e.clientX
  //     // y0 = e.clientY
  //     addEventListener('mousemove', tmEvent)
  // })
  // addEventListener('mouseup', () => {
  //     removeEventListener('mousemove', tmEvent)
  //     rx = camera.rotation.x
  //     ry = camera.rotation.y
  // })
  // addEventListener('dblclick', () => {
  //     console.log(camera.rotation);

  //     rx = camera.rotation.x
  //     ry = camera.rotation.y
  // })
  // let group = new Group()
  // group.add(plane)

  addEventListener("click", (e) => {
    // console.log(e);
    // let mouse = new Vector2()
    // mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    // mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    // let vector = new Vector3(mouse.x, mouse.y, 0.5).unproject(camera)
    // let raycaster = new Raycaster(camera.position,vector.sub(camera.position).normalize())
    // // raycaster.setFromCamera(mouse, camera)
    // let intersects = raycaster.intersectObjects([group], true)
    // console.log(intersects);
    // camera.setFocalLength(1)
  });

  return () => {
    // camera.position.x+=0.01
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01
    // camera.position.x -= 0.5 * Math.sin(camera.rotation.y)
    // camera.position.y += 0.5 * Math.sin(camera.rotation.x)
    // camera.position.z += -0.5 * Math.cos(camera.rotation.x) * Math.cos(camera.rotation.y)
  };
};
export default dots;
