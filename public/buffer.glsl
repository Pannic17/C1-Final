#version 120

uniform float ring1;
uniform float ring2;
uniform float push1;
uniform float push2;
uniform float diminish;

uniform sampler2D tDiffuse;

varying vec2 vUv;

float rand(vec2 co) {

    return fract( sin( dot( co.xy ,vec2(12.9898,78.233))) * 43758.5453);

}

void main() {

    float r1 = rand( floor( vUv.yy * ring1 ) / ring1 );
    float r2 = rand( floor( vUv.yy * ring2 ) / ring2 );

    r1 = -1.0 + 2.0 * r1;
    r2 = -1.0 + 2.0 * r2;

    r1 *= push1;
    r2 *= push2;

    r1 += r2;
    r1 *= diminish;


    vec4 tex = texture(tDiffuse, vUv + vec2(r1,0.0));
    if(vUv.x+r1 > 1.0 || vUv.x+r1 <= 0.0){
        gl_FragColor = vec4(vec3(0.0),1.0);
    } else {
        gl_FragColor = tex;
    }

    vec4 color = texture2D( tDiffuse, vUv );

//    float average = ( color.r + color.g + color.b ) / 3.0;
//
//    float fr, fg, fb, fa;
//
//    if (pattern() == 0.0) {
//        fr = (color.r) + 0.2;
//        fg = (color.g) + 0.2;
//        fb = (color.b) + 0.2;
//        fa = color.a;
//    } else {
//        fr = 0.0;
//        fg = 0.0;
//        fb = 0.0;
//        fa = 0.0;
//    }



//    gl_FragColor = vec4( vec3( fr, fg, fb ), fa );

}