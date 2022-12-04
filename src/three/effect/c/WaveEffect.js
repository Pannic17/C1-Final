import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {fade} from "../../utils";
import {WaveShader} from "../../shader/WaveShader";

export class WaveEffect {
    time = 0;
    constructor (composer, max) {
        this.composer = composer;
        this.max = max;

        const effectWave = new ShaderPass( WaveShader );
        this.pass = effectWave;
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
            this.pass.uniforms[ 'time' ].value = 2 * this.time / this.max;
            this.time += 1;
        }
    }
}