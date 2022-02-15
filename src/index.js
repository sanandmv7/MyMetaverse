const ratio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, ratio, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight(0x404040);
const dlight = new THREE.DirectionalLight(0xffffff, 0.5);

light.add(dlight);
scene.add(light);

const geometry = new THREE.BoxGeometry(50, 0.1, 50);
const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );

const ground = new THREE.Mesh( geometry, material );
scene.add( ground );

// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.set(5, 15, 15);

function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    camera.lookAt(ground.position);
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();