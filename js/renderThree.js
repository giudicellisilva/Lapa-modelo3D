import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import obj from "../modelos-3d/Crânio Equino/3DModel.obj";

// Inicializa a cena, a câmera e o renderizador
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// Adiciona uma luz à cena
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Carrega o modelo .obj
var loader = new THREE.OBJLoader();

loader.load(
    obj,
    function (object) {
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% carregado');
    },
    function (error) {
        console.log('Erro ao carregar modelo: ' + error);
    }
);

// Atualiza a cena
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

