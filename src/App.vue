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
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass";

import {DotEffect} from "./three/effect/c/DotEffect";
import {ShiftEffect} from "./three/effect/p/ShiftEffect";
import {NormalEffect} from "./three/effect/p/NormalEffect";
import {SliceEffect} from "./three/effect/c/SliceEffect";
import {WaveEffect} from "./three/effect/c/WaveEffect";
import {SpiralEffect} from "./three/effect/c/SpiralEffect";
import {SobelEffect} from "./three/effect/c/SobelEffect";
import {LineEffect} from "./three/effect/c/LineEffect";
import {HalftoneEffect} from "./three/effect/p/HalftoneEffect";
import {PostEffect} from "./three/effect/p/PostEffect";
import {PixelEffect} from "./three/effect/p/PixelEffect";
import {AfterEffect} from "./three/effect/p/AfterEffect";
import {GlitchEffect} from "./three/effect/c/GlitchEffect";

let scene, camera, renderer, gui;
let control, composer, clock, light;
let model;

let eevee;

let far = 1000;

let active = [];



function initialize() {
  setupThree();
  let init = setupThree(far);
  scene = init.scene;
  camera = init.camera;
  renderer = init.renderer;
  control = init.control;
  gui = new GUI();

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  // const effectTest = new ShaderPass( GlitchShader );
  // effectTest.uniforms[ 'width' ].value = innerWidth;
  // effectTest.uniforms[ 'height' ].value = innerHeight;
  // composer.addPass(effectTest);
  // initEffect(effectHalftone, 6, 6);

  // active = addEffects(composer, renderer, scene, camera, active);
  const effectDot = new DotEffect(composer, 50);
  const effectShift = new ShiftEffect(composer, 50,0.025, 30);
  const effectNormal = new NormalEffect(composer, 50, renderer, scene, camera);
  const effectSlice = new SliceEffect(composer, 50, 15);
  const effectWave = new WaveEffect(composer, 100);
  const effectSpiral = new SpiralEffect(composer, 100, innerWidth, innerHeight);
  const effectSobel = new SobelEffect(composer, 100, innerWidth, innerHeight, 30);
  const effectLine = new LineEffect(composer, 100, innerWidth, innerHeight)
  const effectHalftone = new HalftoneEffect(composer, 100, innerWidth, innerHeight, Math.random()*6+6)
  const effectPost = new PostEffect(composer, 50, 20);
  const effectPixel = new PixelEffect(composer, 50, scene, camera, 50)
  const effectAfter = new AfterEffect(composer, 100);
  const effectGlitch = new GlitchEffect(composer, 100);

  function initEffect (effect) {
    effect.end();
    effect.add();
    active.push(effect);
  }

  document.onkeypress = function (e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      //q
      case 81: initEffect(effectDot); break;
      case 113: initEffect(effectDot); break;
      //w
      case 87: initEffect(effectShift); break;
      case 119: initEffect(effectShift); break;
      //e
      case 69: initEffect(effectSlice); break;
      case 101: initEffect(effectSlice); break;
      //r
      case 82: initEffect(effectSobel); break;
      case 114: initEffect(effectSobel); break;

      //a
      case 65: initEffect(effectLine); break;
      case 97: initEffect(effectLine); break;
      //s
      case 83: initEffect(effectHalftone); break;
      case 115: initEffect(effectHalftone); break;
      //d
      case 68: initEffect(effectPixel); break;
      case 100: initEffect(effectPixel); break;
      //f
      case 70: initEffect(effectAfter); break;
      case 102: initEffect(effectAfter); break;

      //z
      case 90: initEffect(effectGlitch); break;
      case 122: initEffect(effectGlitch); break;
      //x
      case 88: initEffect(effectWave); break;
      case 120: initEffect(effectWave); break;
      //c
      case 67: initEffect(effectSpiral); break;
      case 99: initEffect(effectSpiral); break;
      //v
      case 86: initEffect(effectPost); break;
      case 118: initEffect(effectPost); break;
    }
  }

  let _gui = {
    "Log": logCamera
  }
  gui.add(_gui, "Log");

  function logCamera() {
    console.log(camera);
  }

  clock = new THREE.Clock();
  light = new Lights(scene, gui);

  let sphere = new THREE.Mesh (new THREE.IcosahedronGeometry (0.5, 8), new THREE.MeshBasicMaterial({color: 'cyan'}));
  sphere.position.set (1.2, 0, 1)

  const loader = new GLTFLoader();
  loader.load(
      './eevee.gltf',
      function (gltf) {
        eevee = gltf.scene.children[2];
        eevee.position.y = -1;
        // obj.rotation.z = (90 + 180) * Math.PI / 180;'
        model = eevee;
        console.log(model);
        scene.add(model);
        animate();
      },
      function (xhr) {console.log((xhr.loaded / xhr.total * 100) + '% loaded')},
      function (error) {console.log('An error happened')}
  )
}

function animate () {
  const time = Date.now();
  model.position.y = Math.cos(time * 0.01)*0.1 - 1;
  model.rotation.z += 0.01;
  // renderer.render(scene,camera);
  for (let i = 0; i < active.length; i++) {
    active[i].animate(function () {
      active = active.filter(function (item) {
        return item != active[i];
      })
    });
  }
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
  <div id="background" style="background-color: #1a1a1a"></div>
  <div id="three-canvas"></div>
</template>

<style scoped>
div{
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /*background-color: #1a1a1a;*/
}
</style>
