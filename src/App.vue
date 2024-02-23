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
import {RingEffect} from "./three/effect/g/RingEffect";
import {WrapEffect} from "./three/effect/g/WrapEffect";
import {HedronEffect} from "./three/effect/g/HedronEffect";
import {CubeEffect} from "./three/effect/g/CubeEffect";
import {CharEffect} from "./three/effect/g/CharEffect";
import {ChangeCall, loadModel} from "./three/effect/ChangeModel";

let scene, camera, renderer, gui;
let control, composer, clock, light;
let model;
let models = [];
let eevee;

let far = 1000;
let play = false;

let active = [];
let bgc = [];

function initialize() {

  let background = document.getElementById('background');
  console.log(background)

  setupThree();
  let init = setupThree(far);
  scene = init.scene;
  camera = init.camera;
  renderer = init.renderer;
  gui = new GUI();

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  // const effectTest = new ShaderPass( GlitchShader );
  // effectTest.uniforms[ 'width' ].value = innerWidth;
  // effectTest.uniforms[ 'height' ].value = innerHeight;
  // composer.addPass(effectTest);
  // initEffect(effectHalftone, 6, 6);

  // active = addEffects(composer, renderer, scene, camera, active);

  // Shader Effect
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
  const effectPixel = new PixelEffect(composer, 100, scene, camera, 50)
  const effectAfter = new AfterEffect(composer, 100);
  const effectGlitch = new GlitchEffect(composer, 100);

  // Geometry Effect
  let color = [0x156289, 0xc9dd22, 0xed5736, 0xf2be45, 0xc0ebd7];
  const effectRing = new RingEffect(scene, 100, color);
  const effectWrap = new WrapEffect(scene, 150, color);
  const effectHedron = new HedronEffect(scene, 100, color);
  const effectCube = new CubeEffect(scene, 100, color);
  const effectChar = new CharEffect(scene, 100, color);

  function initEffect (effect) {
    effect.end();
    effect.add();
    active.push(effect);
  }

  let audio = document.getElementById('beats');
  document.ondblclick = function (e) {
    if (!play) {
      audio.play();
      play = true;
    } else {
      audio.pause();
      play = false;
    }
  }
  document.onclick = function (e) {

    let x = e.clientX;
    let y = e.clientY;
    let sizeX = innerWidth / 5;
    let sizeY = innerHeight / 4;
    console.log("x: "+x+"  y: "+y+"\n"+sizeX+","+sizeY);
    if (0 < y && y < sizeY) {
      if (0 < x && x < sizeX) {
        initEffect(effectDot);
      } else if (sizeX < x && x < sizeX * 2){
        initEffect(effectShift);
      } else if (sizeX * 2 < x && x < sizeX * 3){
        initEffect(effectSlice);
      } else if (sizeX * 3 < x && x < sizeX * 4){
        initEffect(effectSobel);
      } else {
        initEffect(effectRing);
      }
    } else if (sizeY < y && y < sizeY * 2){
      if (0 < x && x < sizeX) {
        initEffect(effectLine);
      } else if (sizeX < x && x < sizeX * 2){
        initEffect(effectWrap);
      } else if (sizeX * 2 < x && x < sizeX * 3){
        initEffect(effectPixel);
      } else if (sizeX * 3 < x && x < sizeX * 4){
        initEffect(effectCube);
      } else {
        initEffect(effectAfter);
      }
    } else if (sizeY * 2 < y && y < sizeY * 3){
      if (0 < x && x < sizeX) {
        initEffect(effectWave);
      } else if (sizeX < x && x < sizeX * 2){
        initEffect(effectSpiral);
      } else if (sizeX * 2 < x && x < sizeX * 3){
        initEffect(effectChar);
      } else if (sizeX * 3 < x && x < sizeX * 4){
        initEffect(effectGlitch);
      } else {
        initEffect(effectPost);
      }
    } else {
      if (0 < x && x < sizeX) {
        initEffect(effectHedron);
      } else if (sizeX < x && x < sizeX * 2){
        initEffect(effectHalftone);
      } else if (sizeX * 2 < x && x < sizeX * 3){
        initEffect(effectNormal);
      } else if (sizeX * 3 < x && x < sizeX * 4){
        initEffect(effectPost);
      } else {
        let change = new ChangeCall(scene, model, models, background, bgc);
        model = change.change();
        console.log(model);
        active.push(change);
      }
    }
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
      //t
      case 84: initEffect(effectNormal); break;
      case 116: initEffect(effectNormal); break;

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

      //p
      case 80: initEffect(effectRing); break;
      case 112: initEffect(effectRing); break;
      //o
      case 79: initEffect(effectWrap); break;
      case 111: initEffect(effectWrap); break;
      //l
      case 76: initEffect(effectHedron); break;
      case 108: initEffect(effectHedron); break;
      //i
      case 73: initEffect(effectCube); break;
      case 105: initEffect(effectCube); break;
      //k
      case 75: initEffect(effectChar); break;
      case 107: initEffect(effectChar); break;

      //space
      case 32:
        let change = new ChangeCall(scene, model, models, background, bgc);
        model = change.change();
        console.log(model);
        active.push(change);
        break;
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

  console.log(sphere.geometry.attributes)


  const loader = new GLTFLoader();
  loader.load(
      './eevee.gltf',
      function (gltf) {
        eevee = gltf.scene.children[2];
        eevee.position.y = -1;
        // obj.rotation.z = (90 + 180) * Math.PI / 180;'
        model = eevee;
        models.push(eevee);
        bgc.push('#1a1a1a');
        console.log(model);
        scene.add(model);
        animate();
      },
      function (xhr) {console.log((xhr.loaded / xhr.total * 100) + '% loaded')},
      function (error) {console.log('An error happened')}
  )

  loadModel('./vaporeon.gltf', function (model) {
    models.push(model);
    bgc.push('#2b3c74');
  })
  loadModel('./charmander.gltf', function (model) {
    models.push(model);
    bgc.push('#2c110b');
  })
  loadModel('./pickachu.gltf', function (model) {
    models.push(model);
    bgc.push('#a78e44');
  })
  loadModel('./squirtle.gltf', function (model) {
    models.push(model);
    bgc.push('#54a296');
  })
  loadModel('./meowth.gltf', function (model) {
    models.push(model);
    bgc.push('#818fa9');
  })
  loadModel('./vulpix.gltf', function (model) {
    models.push(model);
    bgc.push('#a98175');
  })
  // let bgC = [
  //     '#1a1a1a',
  //     '#4b5cc4',
  //     '',
  //     '',
  //     '#ffc773',
  //     '',
  //     '',
  //     ''
  // ]
}

function animate () {
  const time = Date.now();
  model.position.y = Math.cos(time / 120) * 0.1 - 1;
  model.rotation.z += 0.01;
  // cylinder.rotation.x += 0.01;
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
  <div id="overlay">
    <a href="https://github.com/Pannic17/C1-Final">Source Code</a><br>
    Try Click/Tap Randomly or Press Random Keys!<br>
    Double Click to PLAY/PAUSE Music
  </div>
  <audio controls="controls" id="beats" hidden src="./flip.mp3" loop></audio>
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
#overlay{
  position: fixed;
  color: white;
}
</style>
