import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {SpiralShader} from "../../shader/SpiralShader";

export class SpiralEffect {
    time = 0;
    constructor (composer, max, width, height) {
        this.composer = composer;
        this.max = max;

        const effectSpiral = new ShaderPass( SpiralShader );
        effectSpiral.uniforms[ 'width' ].value = width;
        effectSpiral.uniforms[ 'height' ].value = height;
        this.pass = effectSpiral;
    }

    add() {
        this.time = 0;
        this.composer.addPass(this.pass);
    }

    end() {
        this.composer.removePass(this.pass);
    }

    animate(onEnd) {
        if (this.time == this.max) {
            this.end();
            this.time = 0;
            onEnd();
        } else {
            this.pass.uniforms[ 'time' ].value = this.time / this.max;
            this.time += 1;
        }
    }
}