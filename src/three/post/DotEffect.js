import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {DotScreenShader} from "./shader/DotShader";

export class DotEffect {
    max = 200;
    time = 0;
    constructor (composer, size) {
        this.composer = composer;
        const effectDot = new ShaderPass( DotScreenShader );
        effectDot.uniforms[ 'scale' ].value = size;
        effectDot.uniforms[ 'angle' ].value = 0;
        this.pass = effectDot;
    }

    start() {
        this.composer.addPass(this.pass);
    }

    end() {
        this.composer.removePass(this.pass);
    }

    animate() {

    }
}