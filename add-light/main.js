
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//Create a WebGLRenderer and turn on shadows in the renderer


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
/**/
//Create a DirectionalLight and turn on shadows for the light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(150, 100, 0); //default; light shining from top
light.castShadow = true; // default false


/**/
//Set up shadow properties for the light
//light.shadow.mapSize.width = 128;
//light.shadow.mapSize.height = 128;
light.shadow.camera.near = 50;
light.shadow.camera.far = 400;
light.shadow.camera.left = -100;
light.shadow.camera.right = 100;
light.shadow.camera.top = 100;
light.shadow.camera.bottom = -100;


scene.add(light);

const helperLight = new THREE.DirectionalLightHelper(light, 100);
scene.add(helperLight);


//Create a plane that receives shadows (but does not cast them)
const planeGeometry = new THREE.PlaneGeometry(500, 500, 32, 32);
const planeMaterial = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })//color: 0x003377,color: 0xff0000,, shininess: 150
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
//plane.castShadow = true;
plane.rotation.x = 120 * Math.PI / 180;
scene.add(plane);

//Create a sphere that cast shadows (but does not receive them)
const sphereGeometry = new THREE.SphereGeometry(100, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.castShadow = true; //default is false
//sphere.receiveShadow = true; //default
scene.add(sphere);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 200, 800);
camera.position.z = 500;

//Create a helper for the shadow camera (optional)
/**/
const helperCamera = new THREE.CameraHelper(light.shadow.camera);//light.shadow.
helperCamera.update();

scene.add(helperCamera);


const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform

controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  //light.rotation.x += 0.002;
  //light.rotation.y += 0.006;

  //plane.rotation.x += 0.001;
  //plane.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();