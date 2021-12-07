
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const particles = 5000;

const geometry = new THREE.BufferGeometry();

const positions = [];
const colors = [];

const color = new THREE.Color();

const n = 1000, n2 = n / 2; // particles spread in the cube

for (let i = 0; i < particles; i++) {

  // positions

  const x = Math.random() * n - n2;
  const y = Math.random() * n - n2;
  const z = Math.random() * n - n2;

  positions.push(x, y, z);

  // colors

  const vx = (x / n) + 0.5;
  const vy = (y / n) + 0.5;
  const vz = (z / n) + 0.5;

  color.setRGB(vx, vy, vz);

  colors.push(color.r, color.g, color.b);

}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

//geometry.computeBoundingSphere();

//

const material = new THREE.PointsMaterial({ size: 15, vertexColors: true });

const points = new THREE.Points(geometry, material);
scene.add(points);

const controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 0, 2000);

controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  //line.rotation.x += 0.001;
  //line.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();