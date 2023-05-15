import {
  AmbientLight,
  BufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  PointLight,
  Points,
  PointsMaterial,
  SphereGeometry,
  TextureLoader,
  TorusGeometry,
  Vector3,
} from "three";
import { ThreeRunner } from "./three";
const roundFn = (deg = 0, r = 0, begin = 0): [number, number, number] => [
  Math.sin(deg + begin) * r,
  0,
  Math.cos(deg + begin) * r,
];
const MercuryDistance = 60;
const VenusDistance = 80;
const EarthDistance = 100;
const MarsDistance = 120;
const JupiterDistance = 200;
const SaturnDistance = 400;
const UranusDistance = 600;
const NeptuneDistance = 1000;
const MoonDistance = 5;
const planes: ThreeRunner = (scene, camera) => {
  camera.position.set(0, 100, 500);
  camera.lookAt(0, 0, 0);
  const initPlane = (radius = 0, color = "", name = "", img = "") => {
    let ballGeo = new SphereGeometry(radius, 32, 32),
      ballImg = img ? new TextureLoader().load(img) : null,
      ballMat = new MeshLambertMaterial({
        color,
        map: ballImg,
      }),
      ball = new Mesh(ballGeo, ballMat);

    ball.name = name;
    scene.add(ball);
    return ball;
  };
  // const range = 4000
  // const initStar = () => {
  //     let
  //         starGeo = new SphereGeometry(
  //             1,
  //             32,
  //             32,
  //         ),
  //         starMat = new PointsMaterial({
  //             color: 0xffefaa
  //         }),
  //         // starMat = new MeshPhongMaterial({
  //         //     emissive: 0xffffff
  //         // }),
  //         star = new Mesh(starGeo, starMat)

  //     star.position.set(Math.random() * range * 2 - range, Math.random() * range - range / 2, Math.random() * range * 2 - range)
  //     scene.add(star)
  // }
  // const stars = []
  const Mercury = initPlane(2, "rgb(30,180,250)", "Mercury");
  const Venus = initPlane(2, "rgb(200,180,30)", "Venus");
  const Earth = initPlane(
    4,
    "rgb(10,160,230)",
    "Earth",
    require("../../assets/pictures/threejs/earth.jpeg")
  );
  const Mars = initPlane(2, "rgb(240,180,30)", "Mars");
  const Jupiter = initPlane(10, "rgb(240,180,100)", "Jupiter");
  const Saturn = initPlane(8, "rgb(240,180,120)", "Saturn");
  const Uranus = initPlane(8, "rgb(60,180,250)", "Uranus");
  const Neptune = initPlane(8, "rgb(10,80,250)", "Neptune");
  const light = new PointLight("#ffffff", 2);
  const alight = new AmbientLight("#fff", 0.2);

  Mercury.position.set(MercuryDistance, 0, 0);
  Venus.position.set(VenusDistance, 0, 0);
  Earth.position.set(EarthDistance, 0, 0);
  Mars.position.set(MarsDistance, 0, 0);
  Jupiter.position.set(JupiterDistance, 0, 0);
  Saturn.position.set(SaturnDistance, 0, 0);
  Uranus.position.set(UranusDistance, 0, 0);
  Neptune.position.set(NeptuneDistance, 0, 0);

  let Moon = initPlane(0.5, "rgb(240,240,200)", "Moon");
  Earth.add(Moon);
  Moon.position.set(MoonDistance, 0, 0);

  let SaturnRingGeo = new TorusGeometry(12, 2, 2, 128),
    SaturnRingMat = new MeshBasicMaterial({
      color: "rgb(240,220,180)",
    }),
    SaturnRing = new Mesh(SaturnRingGeo, SaturnRingMat);
  SaturnRing.rotation.x = (Math.PI / 180) * 67.6;
  Saturn.add(SaturnRing);

  //star
  // let times = 200
  // for (let i = 0; i < times; i++) {
  //     initStar()
  // }

  const range = 40000;
  // pointGeo = new Geometry(),
  const pointGeo = new BufferGeometry();
  const pointMat = new PointsMaterial({
    color: 0xffffff,
    size: 0.5,
  });
  const point = new Points(pointGeo, pointMat);
  const starNum = 8000;
  const points = [];
  for (let i = 0; i < starNum; i++) {
    points.push(
      new Vector3(
        Math.random() * range - range / 2,
        (Math.random() * range) / 5 - range / 10,
        Math.random() * range - range / 2
      )
    );
  }
  pointGeo.setFromPoints(points);

  scene.add(point);

  const sunImg = new TextureLoader().load(
      require("../../assets/pictures/threejs/sun.png")
    ),
    // SunGeo = new BoxGeometry(50,50,50),
    SunGeo = new SphereGeometry(50, 32, 32),
    SunMat = new MeshPhongMaterial({
      // map: sunImg,
      emissive: "#fa0",
      emissiveMap: sunImg,
      emissiveIntensity: 2,
      // wireframe: true,
      // bumpMap: sunImg,
      // bumpScale: 2
    }),
    // SunMat = new MeshLambertMaterial({
    //     wireframe: true,
    //     // color: 0xbbdd72,
    //     emissive: 0x264f75
    // }),
    Sun = new Mesh(SunGeo, SunMat);
  Sun.name = "sun";

  scene.add(light);
  scene.add(alight);
  scene.add(Sun);

  Earth.rotation.z = (Math.PI / 180) * 23.4;
  let deg = new Array(9).fill(0);
  const updater = (intersects: any) => {
    Sun.rotateY(-0.002);
    Earth.rotateY(0.02);
    Moon.position.set(...roundFn(deg[8], MoonDistance));
    Mercury.position.set(...roundFn(deg[0], MercuryDistance));
    Venus.position.set(...roundFn(deg[1], VenusDistance));
    Earth.position.set(...roundFn(deg[2], EarthDistance));
    Mars.position.set(...roundFn(deg[3], MarsDistance));
    Jupiter.position.set(...roundFn(deg[4], JupiterDistance));
    Saturn.position.set(...roundFn(deg[5], SaturnDistance));
    Uranus.position.set(...roundFn(deg[6], UranusDistance));
    Neptune.position.set(...roundFn(deg[7], NeptuneDistance));
    deg[0] += 0.015;
    deg[1] += 0.01;
    deg[2] += 0.006;
    deg[3] += 0.004;
    deg[4] += 0.003;
    deg[5] += 0.002;
    deg[6] += 0.001;
    deg[7] += 0.0005;
    deg[8] -= 0.1;

    if (intersects.length > 0) {
      intersects.map((each: any) => {
        console.log(each.object.name);
      });
    }
  };

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
export default planes;
