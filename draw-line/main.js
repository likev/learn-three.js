
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];

for(let u=0;u<20;u+=0.1){
  points.push( new THREE.Vector3( Math.sin(u), Math.cos(u), u/10 ) );
}

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add(line);

const controls = new OrbitControls( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 5, 2);

controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  //line.rotation.x += 0.001;
  //line.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();