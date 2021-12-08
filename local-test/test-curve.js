
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function test_curve(TypeCurve) {
  console.log(TypeCurve)
  // Create a sine-like wave
  const points = [
    new THREE.Vector2(-10, 0),
    new THREE.Vector2(-5, 8),
    new THREE.Vector2(0, 0),
    new THREE.Vector2(5, -7),
    new THREE.Vector2(10, 0)
  ]
  let curve;
  curve = TypeCurve === 'SplineCurve' ? new THREE[TypeCurve](points) : new THREE[TypeCurve](...points);

  console.log(curve.getPoints(4))

  console.log(curve.getPoint(0))
  console.log(curve.getPoint(0.25))
  console.log(curve.getPoint(0.5))
  console.log(curve.getPoint(1/3))
  console.log(curve.getPoint(0.75))
  console.log(curve.getPoint(2/3))
  console.log(curve.getPoint(1))
}

test_curve('CubicBezierCurve')
test_curve('QuadraticBezierCurve')
test_curve('SplineCurve')
