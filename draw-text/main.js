
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1500);
camera.position.set(0, 0, 500);

//const cameraTarget = new THREE.Vector3(0, 150, 0);
//camera.lookAt(cameraTarget);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();

let font = null;//three.js font

const group = new THREE.Group();
group.position.y = 0;

scene.add(group);

let textMesh1 = null;

function refreshText() {

  if (textMesh1) group.remove(textMesh1);

  const height = 20,
    size = 70,
    hover = 30;

  let textGeo = new TextGeometry('text', {

    font: font,
    size,
    height
  })

  textGeo.computeBoundingBox();

  console.log({ 'textGeo.boundingBox': textGeo.boundingBox })

  const centerOffset = - 0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

  let materials = [
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // front
    new THREE.MeshBasicMaterial({ color: 0xff0000 }) // side
  ];

  textMesh1 = new THREE.Mesh(textGeo, materials);

  textMesh1.position.x = centerOffset;
  textMesh1.position.y = 0;
  textMesh1.position.z = 0;

  group.add(textMesh1);
}

function loadFont() {

  const loader = new FontLoader();
  loader.load('https://threejs.org/examples/fonts/droid/droid_sans_bold.typeface.json', function (response) {

    font = response;

    refreshText();

  });

}

loadFont();

const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set(0, 5, 2);

controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  group.rotation.x += 0.001;
  group.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();