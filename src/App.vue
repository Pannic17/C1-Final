<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import * as THREE from "three";
import {onMounted} from "vue";
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min";


import {setupThree} from "./three/setup";
import {Lights} from "./three/lights";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer";
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";
import {RGBShiftShader} from "three/examples/jsm/shaders/RGBShiftShader";
import {DotEffect} from "./three/post/DotEffect";

let scene, camera, renderer, gui;
let control, composer, clock, light;
let obj;

let far = 1000;

function initialize() {
  setupThree();
  let init = setupThree(far);
  scene = init.scene;
  camera = init.camera;
  renderer = init.renderer;
  control = init.control;
  gui = new GUI();

  composer = new EffectComposer(renderer);
  composer.addPass( new RenderPass( scene, camera ) );
  const effectDot = new DotEffect(composer, Math.random()*2+2);
  // effectDot.start();
  const effectShift = new ShaderPass( RGBShiftShader );
  effectShift.uniforms[ 'amount' ].value = 0.015;
  composer.addPass( effectShift );

  let _gui = {
    "Log": logCamera
  }
  gui.add(_gui, "Log");

  function logCamera() {
    console.log(camera);
  }

  clock = new THREE.Clock();
  light = new Lights(scene, gui);

  const loader = new GLTFLoader();
  loader.load(
      './eevee.gltf',
      function (gltf) {
        obj = gltf.scene.children[2];
        obj.position.y = -1;
        // obj.rotation.z = (90 + 180) * Math.PI / 180;
        scene.add(obj);
        animate();
      },
      function (xhr) {console.log((xhr.loaded / xhr.total * 100) + '% loaded')},
      function (error) {console.log('An error happened')}
  )


}

function animate () {
  const time = Date.now();
  obj.position.y = Math.cos(time * 0.001)*0.1 - 1;
  // renderer.render(scene,camera);
  composer.render();
  requestAnimationFrame(animate);
}

onMounted(() => {
  initialize();
  window.onresize = function (){
    location.reload();
  }
})

</script>



<template>
  <div id="three-canvas"></div>
</template>

<style scoped>
div{
  padding: 0;
}
</style>
