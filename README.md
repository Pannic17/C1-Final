# Coding One Final - PokemonPad (beta)
### Jiangyun Pan (PanNic)


On UAL Git  
https://git.arts.ac.uk/22044483/C1-Final (Repository)  
https://git.arts.ac.uk/pages/22044483/C1-Final/ (Git Page)  

On GitHub  
https://github.com/Pannic17/C1-Final (Repository)  
https://pannic17.github.io/C1-Final/  (GitHub Page)  

Built with Vue.js + Vite  

## Introduction

This project using **three.js** to generate an online music-3D pad with interactive graphic animations using shaders. 

A Cute Pokemon model sets at the center of the screen and swing as the music beats. When user press different keys on keyboard or click/tap on different area of the page, various effect generate accordingly and play audio effects. Press `SPACE` will change the model and background color.

There are 20 built-in effects or animation based on **Shaders**, **Postprocessing** and **Motion-Graphic** animations. The animations will render according to sequence of trigger. Each Path animates individually. Thus, please try to press multiple keys together to see the fascinating combination of effects.

### Double-click to PLAY/PAUSE background music

## Effects
All effects come with a fade-in animation that smooth the transition.
***
### Custom Shader Effects
all custom shader can be found at `\src\three\shader\`  
I wrote custom shader to generate different fabulous visual effect and filters. All shader are **alpha-channel adaptive**. 
### DotEffect & DotShader [Q]
effect path: `\src\three\c\DotEffect.js`  
Dot Effect generate a dot map covers the full screen and the dots of the color will multiply the 3D model, thus generates a dot-color map; The dot will easy in as the size shrinks.  
Press **Q**
### GlitchEffect & GlitchShader [Z]
effect path: `\src\three\c\GlitchEffect.js`  
Glitch Effect presents wild image distortion with image.  
Press **Z**  
### ~~HatchShader~~
Generate a cross-hatch effect, not significant for this scene.
NOT EXPOSED
### LineEffects & LineShader [A]
effect path: `\src\three\c\LineEffect.js`  
Covert the image to a line graph, the width of line varies each time.  
Press **A**
### MaskShader
Perform a Luma effects that coverts black pixels to transparent. NOT EXPOSED
### PaintShader
Water-paint filter. Used as buffer shader.
### SliceEffect & SliceShader [E]
effect path: `\src\three\c\SliceEffect.js`  
Slice the 3D image horizontally into pieces.  
Press **E**
### SobelEffect & SobelShader [R]
effect path: `\src\three\c\SobelEffect.js`  
Sobel effect uses differentiated convolutional kernel to detect and outline the edge of the 3D image. My shader also performs a fade-out of color.  
Press **R**
### SpiralEffect & SpiralShader [C]
effect path: `\src\three\c\SpiralEffect.js`  
This shader generates a spiral mask overlay the 3D image, when combining with wave effect, a very beautiful water drop effects will present. The spiral rotates.  
Press **C**
### WaterShader
Pool-water filter. Used as buffer shader.  
### WaveEffect & WaveShader [X]
effect path: `\src\three\c\SpiralEffect.js`  
Generates a water wave effects from center to boarder.  
Press **X**
***
### Postprocessing
For some effects, I used the built-in postprocessing from `three.js\examples`
### AfterEffects [F]
effect path: `\src\three\p\AfterEffect.js`  
This is the `AfterimagePass` which presents a drag or replica effects.  
Press **F**
### HalftoneEffect [S]
effect path: `\src\three\p\HalftoneEffect.js`  
This will convert the 3D image to a scattered spectrum look, there are 3 possible pattern: eclipse, line & square.  
Press **S**
### NormalEffect [T]
effect path: `\src\three\p\NormalEffect.js`  
This is the effect that shows the normal map generated for the model. I also add `WaterShader` & `PaintShader` to generate a thick edge that make the filter more cartoon. This may overlay some effects.  
Press **T**
### PostEffect [V]
effect path: `\src\three\p\PostEffect.js`  
This is a postprocessing effect preset of `three.js` that convert the 3D image to black-white dot screen.  
Press **V**
### ShiftEffect [W]
effect path: `\src\three\p\ShiftEffect.js`  
This split the RGB channels of the origin, thus perform a chromatic aberration effect.  
Press **W**
***
### Motion Graphic
### CharEffect [K]
effect path: `\src\three\g\CharEffect.js`  
Generate lines of Japanese characters that move forward.  
Press **K**
### CubeEffect [I]
effect path: `\src\three\g\CubeEffect.js`  
Generate particles of cubes that rotate by itself.  
Press **I**
### HedronEffect [L]
effect path: `\src\three\g\HedronEffect.js`  
Generate a wireframe of polyhedron that rotate around center.  
Press **L**
### RingEffect [P]
effect path: `\src\three\g\RingEffect.js`  
Generate a ring rotate around model.  
Press **P**
### WrapEffect [O]
effect path: `\src\three\g\WrapEffect.js`  
Generate rings that forms a wrap that move toward top.  
Press **O**
***
### Change Model [SPACE]
Press `SPACE` will change the model and background color.  
Discover your next surprise Pokemon!

## Copyright
All models were downloaded from https://www.models-resource.com/  
All audio samples were downloaded from https://www.noiiz.com/  
Music is *morning flip* by *StrawberryPapa*  
Shader reference https://www.shadertoy.com/
