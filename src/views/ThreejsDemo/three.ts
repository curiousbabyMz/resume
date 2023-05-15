import { Scene, PerspectiveCamera, WebGLRenderer, Camera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
type ThreeInit = (props: {
  ele: Element;
  width?: number;
  height?: number;
  autoRotateSpeed?: number;
}) => {
  resetScene: () => void;
  loadTemp: (temp: ThreeRunner) => void;
};
export type ThreeRunner = (scene: Scene, camera: Camera) => Function;

// {
//   scene: Scene;
//   renderer: Renderer;
//   camera: Camera;
// };

export const threeInit: ThreeInit = ({
  ele,
  width = window.innerWidth,
  height = window.innerHeight,
  autoRotateSpeed = 0,
}) => {
  const scene: Scene = new Scene();
  const camera: Camera = new PerspectiveCamera(
    75, //FOV视野角度
    width / height, //长宽比
    0.1, //近截面
    10000 //远截面
  );
  // camera = new OrthographicCamera(window.innerWidth / -20, window.innerWidth / 20, window.innerHeight / 20, window.innerHeight / -20, 1, 100),
  const renderer: WebGLRenderer = new WebGLRenderer({
    antialias: true,
  });
  const controls = new OrbitControls(camera, renderer.domElement);
  renderer.setClearColor(0x111111);
  // renderer.setClearColor(0x8899ff)
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  // if (WEBGL.isWebGL2Available() === false) {
  //     document.body.appendChild(WEBGL.getWebGL2ErrorMessage());
  // } else {
  // controls.autoRotateSpeed = autoRotateSpeed;
  // controls.autoRotate = !!autoRotateSpeed;
  // controls.update();
  ele.appendChild(renderer.domElement);

  // }
  let update: Function = () => {};
  const resetScene = () => {
    scene.remove(...scene.children);
    scene.rotation.x = 0;
    scene.rotation.y = 0;
    scene.rotation.z = 0;
    scene.fog = null;
    camera.position.set(0, 0, 100);
    // controls.reset();
  };
  let animationId: number;
  const loadTemp = (temp: ThreeRunner) => {
    update = temp(scene, camera);
    if (animationId !== undefined) {
      cancelAnimationFrame(animationId);
    }

    const animate = () => {
      // raycaster.setFromCamera(mouse, camera)

      animationId = requestAnimationFrame(animate);
      let intersects: any[] = [];
      // let intersects = raycaster.intersectObjects(scene.children)
      update(intersects);
      renderer.render(scene, camera);
    };
    animate();
  };
  return { resetScene, loadTemp };
};










/**
 * Material property
 * 
 *  texture：各类纹理对应的熟悉
 *    map---Color Texture|Albedo Texture  颜色纹理|反照率纹理
 *    specularMap---Specular texture  镜面高光纹理
 *    normalMap---Normal Texture 法线纹理
 *    alphaMap---Alpha Texture 透明度纹理
 *    emissiveMap---Emissive Texture 自发光纹理
 *    envMap---Environment Texture 环境纹理
 *    aoMap---Ambient Occlusion Texture  环境光遮蔽纹理
 *    roughnessMap---Roughness Texture 粗糙度纹理
 *    metalnessMap---Metalness Texture 金属度纹理
 *    displacementMap---Height Texture 高度纹理
 *  
 *  color：类型为THREE.Color
 *  wireframe：是否使用1px的线勾勒三角形展示物体
 *  opacity：透明度；需要配置material.transparent=true
 *  side:THREE.FrontSide-只渲染物体的前面；THREE.DoubleSide-渲染物体的两面
 *  
 */