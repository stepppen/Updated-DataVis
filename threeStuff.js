import * as THREE from './build/three.module.js';
import { OrbitControls } from './js/OrbitControls.js';
import { RGBELoader } from './js/RGBELoader.js';

let scene, camera, renderer, controls, pointlight;

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1200);
    camera.position.set(0, 0, 500);
    controls = new OrbitControls(camera, renderer.domElement);

    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;
    controls.enableDamping = true;
    controls.dampingFactor = 0.03;
    controls.minPolarAngle = 1.1;
    controls.maxPolarAngle = 1.1;
    controls.minDistance = 200;
    controls.maxDistance = 1000;
    controls.minTargetRadius = 50;
    controls.rotateSpeed = 0.5;
    controls.enablePan = false;

    pointlight = new THREE.PointLight(0xffffff, 0.25);
    pointlight.position.set(200, 200, 200);
    scene.add(pointlight);


    // const planeMesh = new THREE.Mesh(
    //     new THREE.PlaneGeometry(150, 150),
    //     new THREE.MeshBasicMaterial({
    //         side: THREE.DoubleSide,
    //         transparent: true,
    //         opacity: 0.5,
    //         visible: true
    //     })
    // );
    // planeMesh.material.color.setColorName("green");
    // // planeMesh.material.opacity(0.5);
    // planeMesh.rotateX(-Math.PI / 2);
    // planeMesh.rotateZ(Math.PI / 4);
    // planeMesh.position.y = window.innerHeight / 2 - 525;
    // // planeMesh.rotation.y(Math.PI / 4);
    // scene.add(planeMesh);


    const grid = new THREE.GridHelper(150, 1);
    grid.position.y = -40;
    grid.rotation.y = Math.PI / 4;
    scene.add(grid);

    // const highlightMesh = new THREE.Mesh(
    //     new THREE.PlaneGeometry(1, 1),
    //     new THREE.MeshBasicMaterial({
    //         side: THREE.DoubleSide,
    //         transparent: true
    //     })
    // );
    // scene.add(highlightMesh);


    let envmaploader = new THREE.PMREMGenerator(renderer);



    new RGBELoader().setPath('textures/').load('lilienstein_4k.hdr', function (hdrmap) {

        let envmap = envmaploader.fromCubemap(hdrmap);
        let UVtexture = new THREE.TextureLoader().load('textures/forest.jpeg');
        UVtexture.wrapS = THREE.ClampToEdgeWrapping;
        UVtexture.wrapT = THREE.ClampToEdgeWrapping;
        UVtexture.repeat.x = 1;
        UVtexture.repeat.y = 1;

        const ballMaterial = {
            clearcoat: 1,
            clearcoatRoughness: 0.05,
            metalness: 0.9,
            roughness: 0.6,
            map: UVtexture,
            normalScale: new THREE.Vector2(0.15, 0.15),
            envMap: envmap.texture
        };

        let ballGeo = new THREE.SphereGeometry(75, 64, 64);
        let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
        // let ballStand = new THREE.MeshStandardMaterial({ map: UVtexture });
        let ballMesh = new THREE.Mesh(ballGeo, ballMat);
        ballMesh.position.y = 50;
        scene.add(ballMesh);
        animate();

    });

}
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();

