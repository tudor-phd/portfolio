
import React, { useEffect } from "react";
import $ from "jquery";

import bkg from "./images/background.png";
import './blackHole.css';
const BlackHole = () => {
    useEffect(() => {

        // set up global javascript variables

        var bgUrl = bkg;
        var program;
        let positionLocation;
        var blackholeMass = 200;
        var curblackholeMass = 0;

        var canvas2, gl2; // canvas and webgl context

        var shaderScript;
        var shaderSource;
        var vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
        var fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.
        var buffer;

        /* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
        var locationOfTime;
        var locationOfResolution;
        var locationOfMouse;
        var locationOfMass;
        var locationOfclickedTime;

        var originY = window.innerHeight,
            originX = window.innerWidth;

        var mouse;

        var startTime = new Date().getTime(); // Get start time for animating
        var currentTime = 0;

        var clickedTime = 0;

        function init(image) {
            // standard canvas setup here, except get webgl context
            canvas2 = document.getElementById("glscreen");
            gl2 = canvas2.getContext("webgl") || canvas2.getContext("experimental-webgl");
            canvas2.width =
                window.innerWidth >= window.innerHeight
                    ? window.innerWidth
                    : window.innerHeight;
            canvas2.height =
                window.innerWidth >= window.innerHeight
                    ? window.innerWidth
                    : window.innerHeight;

            mouse = { x: originX / 2, y: -(originY / 2) + canvas2.height, moved: false };
            $(document).mousemove(function (e) {
                mouse.x = e.pageX;
                mouse.y = -e.pageY*2 + canvas2.height;
                mouse.moved = true;
            });

            // give WebGL it's viewport
            gl2.viewport(0, 0, gl2.drawingBufferWidth, gl2.drawingBufferHeight);

            // kind of back-end stuff
            buffer = gl2.createBuffer();
            gl2.bindBuffer(gl2.ARRAY_BUFFER, buffer);
            gl2.bufferData(
                gl2.ARRAY_BUFFER,
                new Float32Array([
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0
                ]),
                gl2.STATIC_DRAW
            ); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.

            shaderScript = document.getElementById("2d-vertex-shader");
            shaderSource = shaderScript.text;
            vertexShader = gl2.createShader(gl2.VERTEX_SHADER); //create the vertex shader from script
            gl2.shaderSource(vertexShader, shaderSource);
            gl2.compileShader(vertexShader);

            shaderScript = document.getElementById("2d-fragment-shader");
            shaderSource = shaderScript.text;
            fragmentShader = gl2.createShader(gl2.FRAGMENT_SHADER); //create the fragment from script
            gl2.shaderSource(fragmentShader, shaderSource);
            gl2.compileShader(fragmentShader);

            program = gl2.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
            gl2.attachShader(program, vertexShader); // add the shaders to the program
            gl2.attachShader(program, fragmentShader); // ^^
            gl2.linkProgram(program); // Tell our WebGL application to use the program
            gl2.useProgram(program); // ^^ yep, but now literally use it.

            /* 
          
              Alright, so here we're attatching javascript variables to the WebGL code.  First we get the location of the uniform variable inside the program. 
          
              We use the gl.getUniformLocation function to do this, and pass thru the program variable we created above, as well as the name of the uniform variable in our shader.
          
              */
            locationOfResolution = gl2.getUniformLocation(program, "u_resolution");
            locationOfMouse = gl2.getUniformLocation(program, "u_mouse");
            locationOfMass = gl2.getUniformLocation(program, "u_mass");
            locationOfTime = gl2.getUniformLocation(program, "u_time");
            locationOfclickedTime = gl2.getUniformLocation(program, "u_clickedTime");

            /*
          
              Then we simply apply our javascript variables to the program. 
              Notice, it gets a bit tricky doing this.  If you're editing a float value, gl.uniformf works. 
          
              But if we want to send over an array of floats, for example, we'd use gl.uniform2f.  We're specifying that we are sending 2 floats at the end.  
          
              You can also send it over to the program as a vector, by using gl.uniform2fv.
              To read up on all of the different gl.uniform** stuff, to send any variable you want, I'd recommend using the table (found on this site, but you need to scroll down about 300px) 
          
              https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html#uniforms
          
              */
            gl2.uniform2f(locationOfResolution, canvas2.width, canvas2.height);
            gl2.uniform2f(locationOfMouse, mouse.x, mouse.y);
            gl2.uniform1f(locationOfMass, curblackholeMass * 0.00001);
            gl2.uniform1f(locationOfTime, currentTime);
            gl2.uniform1f(locationOfclickedTime, clickedTime);

            var texCoordLocation = gl2.getAttribLocation(program, "a_texCoord");

            // provide texture coordinates for the rectangle.
            var texCoordBuffer = gl2.createBuffer();
            gl2.bindBuffer(gl2.ARRAY_BUFFER, texCoordBuffer);
            gl2.bufferData(
                gl2.ARRAY_BUFFER,
                new Float32Array([
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    -1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0,
                    -1.0,
                    1.0,
                    1.0
                ]),
                gl2.STATIC_DRAW
            );
            gl2.enableVertexAttribArray(texCoordLocation);
            gl2.vertexAttribPointer(texCoordLocation, 2, gl2.FLOAT, false, 0, 0);

            // Create a texture.
            var texture = gl2.createTexture();
            gl2.bindTexture(gl2.TEXTURE_2D, texture);

            // Set the parameters so we can render any size image.
            gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_S, gl2.CLAMP_TO_EDGE);
            gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_T, gl2.CLAMP_TO_EDGE);
            gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MIN_FILTER, gl2.NEAREST);
            gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MAG_FILTER, gl2.NEAREST);

            // Upload the image into the texture.
            gl2.texImage2D(
                gl2.TEXTURE_2D,
                0,
                gl2.RGBA,
                gl2.RGBA,
                gl2.UNSIGNED_BYTE,
                image
            );

            render();
        }

        function render() {
            var now = new Date().getTime();
            currentTime = (now - startTime) / 1000; // update the current time for animations

            if (curblackholeMass < blackholeMass - 50) {
                curblackholeMass += (blackholeMass - curblackholeMass) * 0.03;
            }

            if (mouse.moved === false) {
                mouse.y =
                    -(originY / 2) +
                    Math.sin(currentTime * 0.7) * (originY * 0.25) +
                    canvas2.height;
                mouse.x = originX / 2 + Math.sin(currentTime * 0.6) * -(originX * 0.35);
            }

            gl2.uniform1f(locationOfMass, curblackholeMass * 0.00001);
            gl2.uniform2f(locationOfMouse, mouse.x, mouse.y);
            gl2.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader
            gl2.uniform1f(locationOfclickedTime, clickedTime);

            window.requestAnimationFrame(render, canvas2); // request the next frame

            positionLocation = gl2.getAttribLocation(program, "a_position"); // do stuff for those vertex's
            gl2.enableVertexAttribArray(positionLocation);
            gl2.vertexAttribPointer(positionLocation, 2, gl2.FLOAT, false, 0, 0);
            gl2.drawArrays(gl2.TRIANGLES, 0, 6);
        }

        window.addEventListener("load", function (event) {
            var image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = bgUrl;

            image.onload = function () {
                init(image);
            };
        });

        window.addEventListener("resize", function (event) {
            // just re-doing some stuff in the init here, to enable resizing.

            canvas2.width =
                window.innerWidth >= window.innerHeight
                    ? window.innerWidth
                    : window.innerHeight;
            canvas2.height =
                window.innerWidth >= window.innerHeight
                    ? window.innerWidth
                    : window.innerHeight;
            gl2.viewport(0, 0, canvas2.width, canvas2.height);
            locationOfResolution = gl2.getUniformLocation(program, "u_resolution");
        });


    }, []);
    return (
        <canvas id="glscreen"></canvas>
    )
}

export default BlackHole

