import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0.1, 10 );
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.ShaderMaterial({

});

const plane = new THREE.Mesh( geometry, material );
scene.add( plane );

function render() {
  renderer.render(scene, camera);
}

function onWindowResize(  ) {
  const aspectRatio = window.innerWidth / window.innerHeight;
  let width = 0;
  let height = 0;
  if (aspectRatio >= 1) {
    width = 1;
    height = (window.innerHeight / window.innerWidth) * width;
  } else {
    width = aspectRatio;
    height = 1;
  }

  camera.left = -width;
  camera.right = width;
  camera.top = height;
  camera.bottom = -height;

  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

onWindowResize();

window.addEventListener( 'resize', onWindowResize, false );

animate();




