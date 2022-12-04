import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {DotShader} from "../../shader/DotShader";
import {fade} from "../../utils";
import {effect} from "vue";

export class DotEffect {
    time = 0;
    constructor (composer, max, size) {
        this.composer = composer;
        this.size = size;
        this.max = max;
        const effectDot = new ShaderPass( DotShader );
        effectDot.uniforms[ 'scale' ].value = size;
        effectDot.uniforms[ 'angle' ].value = 0;
        this.pass = effectDot;
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
            if (this.time < 10) {
                let curve = fade(this.time/10);
                this.pass.uniforms[ 'scale' ].value = this.size + 1 - curve;
            } else if (this.time == 10) {
                this.pass.uniforms[ 'scale' ].value = this.size;
            }
            this.time += 1;
        }
    }
}