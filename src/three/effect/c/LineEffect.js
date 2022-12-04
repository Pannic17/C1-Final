import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass";
import {LineShader} from "../../shader/LineShader";
import {fade} from "../../utils";

export class LineEffect {
    time = 0;
    constructor (composer, max, width, height, size) {
        this.composer = composer;
        this.max = max;
        this.size = size;

        const effectLine = new ShaderPass( LineShader );
        effectLine.uniforms[ 'width' ].value = width;
        effectLine.uniforms[ 'height' ].value = height;
        this.pass = effectLine;
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
            if (this.time < 20) {
                let curve = fade(this.time/20);
                this.pass.uniforms[ 'size' ].value = this.size + 3 - curve * 3;
            } else if (this.time == 10) {
                this.pass.uniforms[ 'size' ].value = this.size;
            }
            this.time += 1;
        }
    }
}