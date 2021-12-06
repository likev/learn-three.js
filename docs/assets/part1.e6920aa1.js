import"./modulepreload-polyfill.b7f2da20.js";import{P as i,W as o,S as d,B as s,M as m,a as c}from"./vendor.9c3baa0b.js";const t=new i(70,window.innerWidth/window.innerHeight,.01,10);t.position.z=5;const e=new o({antialias:!0});e.setSize(window.innerWidth/2,window.innerHeight/2);document.getElementById("app").appendChild(e.domElement);const r=new d,w=new s(2,2,2),l=new m,n=new c(w,l);r.add(n);const a=function(){requestAnimationFrame(a),n.rotation.x+=.001,n.rotation.y+=.005,e.render(r,t)};a();var E=`
import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);



const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.001;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();`;document.getElementById("code").innerText=E;
