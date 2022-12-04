import {HalftonePass} from "three/examples/jsm/postprocessing/HalftonePass";
import {fade} from "../../utils";

export class HalftoneEffect {
    time = 0;
    constructor (composer, max, width, height, radius) {
        this.composer = composer;
        this.max = max;
        const params = {
            shape: 1,
            radius: 4,
            rotateR: Math.PI / 12,
            rotateB: Math.PI / 12 * 2,
            rotateG: Math.PI / 12 * 3,
            scatter: 0,
            blending: 1,
            blendingMode: 1,
            greyscale: false,
            disable: false
        };
        const halftonePass = new HalftonePass(width, height, params);
        this.pass = halftonePass;
        this.fadeTP1 = 20;
        this.fadeTP2 = 30
    }

    add() {
        this.time = 0;
        this.size = Math.random() * 6 + 6;
        this.composer.addPass(this.pass);
        this.pass.uniforms[ 'shape' ].value = Math.round(Math.random()*3) + 1;
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
            if (this.time <= this.fadeTP1) {
                let curve = fade(this.time/this.fadeTP1);
                this.pass.uniforms[ 'blending' ].value = curve;
            } else if (this.time == this.fadeTP1 + 1) {
                this.pass.uniforms[ 'blending' ].value = 1.0;
            }

            if (this.time <= this.fadeTP2) {
                let curve = fade(this.time/this.fadeTP2) * (this.size - 6);
                this.pass.uniforms[ 'radius' ].value = curve + 6;
            } else if (this.time == this.fadeTP1 + 1) {
                this.pass.uniforms[ 'radius' ].value = this.size;
            }
            this.time += 1;
        }
    }
}