import"./modulepreload-polyfill.b7f2da20.js";import{P as a,W as i,S as s,B as m,M as d,a as c,O as l}from"./vendor.9c3baa0b.js";const n=new a(70,window.innerWidth/window.innerHeight,.01,10),e=new i({antialias:!0});e.setSize(window.innerWidth/2,window.innerHeight/2);document.getElementById("app").appendChild(e.domElement);const r=new s,w=new m(2,2,2),p=new d,t=new c(w,p);r.add(t);const E=new l(n,e.domElement);n.position.z=5;E.update();const o=function(){requestAnimationFrame(o),t.rotation.x+=.001,t.rotation.y+=.005,e.render(r,n)};o();var u=`
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const controls = new OrbitControls( camera, renderer.domElement );
//controls.update() must be called after any manual changes to the camera's transform
camera.position.z = 5;
controls.update();

const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.001;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();`;document.getElementById("code").innerText=u;
