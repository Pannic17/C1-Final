<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import * as THREE from "three";
import {onMounted} from "vue";
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min";


import {setupThree} from "./three/setup";
import {Lights} from "./three/lights";

let scene, camera, renderer, gui;
let control, composer, clock, light;

let far = 1000;

function initThree() {
  setupThree();
  let init = setupThree(far);
  scene = init.scene;
  camera = init.camera;
  renderer = init.renderer;
  control = init.control;
  gui = new GUI();

  let _gui = {
    "Log": logCamera
  }
  gui.add(_gui, "Log");

  function logCamera() {
    console.log(camera);
  }

  clock = new THREE.Clock();
  light = new Lights(scene, gui);

  animate();
}

function animate () {
  // composer.render();
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

onMounted(() => {
  initThree();
  window.onresize = function (){
    location.reload();
  }
})

</script>

<template>
  <div id="three-canvas"></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
