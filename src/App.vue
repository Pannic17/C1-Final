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
import {SSRPass} from "three/examples/jsm/postprocessing/SSRPass";
import {GammaCorrectionShader} from "three/examples/jsm/shaders/GammaCorrectionShader";

import {DotEffect} from "./three/effect/c/DotEffect";
import {ShiftEffect} from "./three/effect/p/ShiftEffect";
import {NormalEffect} from "./three/effect/p/NormalEffect";
import {SliceEffect} from "./three/effect/c/SliceEffect";
import {WaveEffect} from "./three/effect/c/WaveEffect";
import {SpiralEffect} from "./three/effect/c/SpiralEffect";
import {SobelEffect} from "./three/effect/c/SobelEffect";
import {LineShader} from "./three/shader/LineShader";
import {LineEffect} from "./three/effect/c/LineEffect";
import {PaintShader} from "./three/shader/PaintShader";
import {WaterShader} from "./three/shader/WaterShader";

let scene, camera, renderer, gui;
let control, composer, clock, light;
let model;

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
  composer.addPass( new RenderPass( scene, camera ) );
  const effectDot = new DotEffect(composer, 50, Math.random()*2+2);
  const effectShift = new ShiftEffect(composer, 50,0.025, 30);
  const effectNormal = new NormalEffect(composer, 50, renderer, scene, camera);
  const effectSlice = new SliceEffect(composer, 50, 15);
  const effectWave = new WaveEffect(composer, 100);
  const effectSpiral = new SpiralEffect(composer, 100, innerWidth, innerHeight);
  const effectSobel = new SobelEffect(composer, 100, innerWidth, innerHeight, 30);
  const effectLine = new LineEffect(composer, 100, innerWidth, innerHeight, Math.random()*10+10)

  const effectTest1 = new ShaderPass( WaterShader );
  const effectTest2 = new ShaderPass( PaintShader );
  effectTest1.uniforms[ 'width' ].value = innerWidth;
  effectTest2.uniforms[ 'width' ].value = innerWidth;
  effectTest1.uniforms[ 'height' ].value = innerHeight;
  effectTest2.uniforms[ 'height' ].value = innerHeight;

  // effectNormal.add();
  // composer.addPass(effectTest1);
  // composer.addPass(effectTest2);

  function initEffect (effect) {
    effect.end();
    effect.add();
    active.push(effect);
  }

  document.onkeypress = function (e) {
    if (e.keyCode == 119) {
      console.log("PRESS w");
      initEffect(effectNormal);
    }
    if (e.keyCode == 115) {
      console.log("PRESS a");
      initEffect(effectSpiral)
    }
    if (e.keyCode == 114) {
      console.log("PRESS r");
      effectDot.end();
      effectDot.add();
      active.push(effectDot);
    }
  }

  let ssrPass = new SSRPass ({
    renderer,
    scene,
    camera,
    width: innerWidth,
    height: innerHeight
  });
  // composer.addPass(ssrPass);
  composer.addPass(new ShaderPass(GammaCorrectionShader));
  // ssrPass.output = SSRPass.OUTPUT.Normal;
  ssrPass.opacity = 1;


  // composer.addPass( effectShift );
  // effectDot.start();

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
  // scene.add( sphere );

  const loader = new GLTFLoader();
  loader.load(
      './vaporeon.gltf',
      function (gltf) {
        model = gltf.scene.children[0];
        model.position.y = -1;
        // obj.rotation.z = (90 + 180) * Math.PI / 180;'
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
