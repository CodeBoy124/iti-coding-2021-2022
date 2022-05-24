class Vector2 {
    /**
     * creates a vector with an x & y value
     * @constructor
     * @example
     * // creates a vector2 at x 2 and y 4
     * var myVector = new Vector2(2, 4);
     * @param {number} x - the x coordinate
     * @param {number} y - the y coordinate
     */
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    /**
     * adds another vector2 to the current vector2
     * @type {VoidFunction}
     * @example
     * var otherVector = new Vector2(2, 3);
     * var myVector = new Vector2(1, 4);
     * // sets myVector to x 3 and y 7
     * myVector.add(otherVector);
     * @param {Vector2} otherVector2 
     */
    add(otherVector2){
        this.x += otherVector2.x;
        this.y += otherVector2.y;
    }

    /**
     * substracts another vector2 from the current vector2
     * @example
     * var otherVector = new Vector2(2, 3);
     * var myVector = new Vector2(1, 4);
     * // sets myVector to x -1 and y 1
     * myVector.substract(otherVector);
     * @param {Vector2} otherVector2 
     */
    substract(otherVector2){
        this.x -= otherVector2.x;
        this.y -= otherVector2.y;
    }

    /**
     * multiplies this vector2 with another vector2
     * @example
     * var otherVector = new Vector2(2, 3);
     * var myVector = new Vector2(1, 4);
     * // sets myVector to x 2 and y 12
     * myVector.multiply(otherVector);
     * @param {Vector2} otherVector2 
     */
    multiply(otherVector2){
        this.x *= otherVector2.x;
        this.y *= otherVector2.y;
    }

    /**
     * divides this vector2 with another vector2
     * @example
     * var otherVector = new Vector2(2, 3);
     * var myVector = new Vector2(1, 4);
     * // sets myVector to x 0.5 and y 1.3333...
     * myVector.divide(otherVector);
     * @param {Vector2} otherVector2 
     */
    divide(otherVector2){
        this.x /= otherVector2.x;
        this.y /= otherVector2.y;
    }

    /**
     * calculates the dot product of this vector2 and the other vector2
     * It's important to know that this function does not modify this vector2
     * @param {Vector2} otherVector2 
     * @example
     * var otherVector = new Vector2(2, 3);
     * var myVector = new Vector2(1, 4);
     * // calculates the dot product (usually a value between -1 and 1 when comparing directions)
     * var result = myVector.dot(otherVector);
     * @returns {number}
     */
    dot(otherVector2){
        return this.x*otherVector2.x + this.y*otherVector2.y;
    }

    /**
     * adds the x and y coordinates from this vector2
     * It's important to know that this function does not modify this vector2
     * @example
     * var myVector = new Vector2(1, 4);
     * // adds 1 and 4 together to get 5
     * var sumOfAxis = myVector.sum();
     * @returns {number}
     */
    sum(){
        return this.x + this.y;
    }
}

/**
 * Picks a random item from the array
 * @function pickRandom
 * @namespace Array
 * @example
 * var myArray = [0, 1, 2, 3, 4, 5];
 * // picks one of the items from myArray
 * var randomItem = myArray.pickRandom();
 * @returns {any}
 */
Array.prototype.pickRandom = function(){
    return this[Math.floor(Math.random()*this.length)];
}

/**
 * Returns the point's position relative to the origin
 * @param {Vector2} point
 * @param {Vector2} origin 
 * @example
 * var origin = new Vector2(1, 3);
 * var point = new Vector2(4, 2);
 * // this will result in x 3 and y -1
 * var pointRelativeToOrigin = pointFromOrigin(point, origin);
 * @returns {Vector2}
 */
function pointFromOrigin(point, origin){
    return new Vector2(point.x-origin.x, point.y-origin.y);
}

/**
 * Returns the distance between point1 and point2
 * @param {Vector2} point1
 * @param {Vector2} point2 
 * @example
 * var point1 = new Vector2(0, 3);
 * var point2 = new Vector2(1, 6);
 * // this calculates the distance between the points
 * var dist = distance(point1, point2);
 * @returns {number}
 */
function distance(point1, point2){
    return Math.sqrt(Math.pow(point1.x-point2.x, 2)+Math.pow(point1.y-point2.y, 2));
}

/**
 * Transforms a angle in degrees to a position.
 * For example when the angle is 0 the vector will be (1, 0) and for an angle of 90 the vector will be (0, 1)
 * please keep in mind that when used with really large angles (100000 degrees) this function will not be accurate
 * @param {number} angle 
 * @returns {Vector2}
 */
function angleToVector(angle){
    return new Vector2(Math.cos(angle/180*Math.PI), Math.sin(angle/180*Math.PI));
}

/**
 * calculates an angle from the center (0, 0) to the vector
 * @param {Vector2} vector
 * @example
 * // *somewhere else in your code you already fetched the mouse position
 * var angleFromCenter = vectorToAngle(mousePosition);
 * @returns {number}
 */
function vectorToAngle(vector){
    return Math.atan2(vector.y, vector.x);
}

/**
 * Returns a whole random number (so not 0.9 or 3.43, but 1 or 3)
 * @param {number} min
 * @param {number} max 
 * @example
 * // generates a random number between -10 and 10
 * var myNumber = random(-10, 10);
 * @returns {number}
 */
function random(min, max){
    return Math.round((Math.random()*(max-min))+min);
}

/**
 * example info for creating an object
 * @constant
 * @namespace
 */
const exampleInfoForObject = {
    /**
     * REQUIRED
     * this needs to be one of the following
     *  - "fill" when you want one solid color
     *  - "image" when you want to show an image
     *  - "text" when you want to have to text in one solid color
     * @type {string}
     */
    type: "fill",
    /**
     * ONLY when using a type of FILL or TEXT
     * this is a color string.
     * You can easily search google for a rgb/rgba color picker
     * @type {color}
     */
    color: "white",
    /**
     * ONLY when using a type of UI
     * when enabled this will place the object behind all other objects
     * @type {boolean}
     * @example
     * // this is drawn in the front layer, so it is drawn after the dynamic, static and background ui objects
     * scene.add.ui(new Vector2(0, 0), new Vector2(50, 50), {
     *   type: "fill",
     *   color: "green"
     * });
     * // this one gets drawn at the start, so it is behind the dynamic, static and regular ui objects
     * scene.add.ui(new Vector2(0, 0), new Vector2(100, 100), {
     *   type: "fill",
     *   color: "darkgreen",
     *   background: true
     * });
     */
    background: false,
    /**
     * ONLY when using a type of TEXT
     * this is the text you want to show
     * @type {string}
     */
    text: "Hello, World!",
    /**
     * ONLY when using a type of TEXT
     * this is the font size in pixels
     * @type {number}
     */
    size: 17,
    /**
     * when enabled this will remove the object if it no longer visible
     * @type {boolean}
     * @example
     * function myUpdate(deltaTime){
     *   // creates a new particle every frame and removes the particle when it is no longer visible
     *   // this is important, because the computer would differently have to calculate the movement of every object.
     *   // event the once not visible
     *   scene.add.dynamic(new Vector2(0, 0), new Vector2(10, 10), {
     *     type: "fill",
     *     color: "green",
     *     autoRemove: true,
     *     velocity: new Vector2(random(-200, 200), random(-200, 200))
     *   });
     * }
     * scene.update = myUpdate;
     */
    autoRemove: false,
    /**
     * ONLY for DYNAMIC OBJECTS
     * this is the velocity of the object (at least at the start, but you can set this property later too)
     * @type {Vector2}
     * @example
     * function myUpdate(deltaTime){
     *   // creates a new particle every frame and removes the particle when it is no longer visible
     *   // this is important, because the computer would differently have to calculate the movement of every object.
     *   // event the once not visible
     *   scene.add.dynamic(new Vector2(0, 0), new Vector2(10, 10), {
     *     type: "fill",
     *     color: "green",
     *     autoRemove: true,
     *     velocity: new Vector2(random(-200, 200), random(-200, 200))
     *   });
     * }
     * scene.update = myUpdate;
     */
    velocity: new Vector2(0, 0),
    /**
     * ONLY when using a type of IMAGE
     * this is the image you want to show for this object
     * @example
     * var myImage = new Image();
     * myImage.src = "path/to/the/image.png";
     * 
     * scene.add.dynamic(new Vector2(0, 0), new Vector2(50, 50), {
     *   type: "image",
     *   image: myImage
     * });
     * @type {image}
     */
    image: new Image(),
    /**
     * ONLY for DYNAMIC OBJECTS
     * this is how much the gravity effects this object.
     * the higher this value the stronger the gravity pulls on this object
     * @type {number}
     * @example
     * // since 1 is the gravity factor for earths gravity (9.807 m/s squered) you have to divide 1 by 9.807 and then multiply by the speed in m/s squered you want
     * function gravityToFactor(n){
     *   return 1 / 9.807 * n;
     * }
     * scene.add.dynamic(new Vector2(0, 0), new Vector2(50, 50), {
     *   type: "text",
     *   text: "Moon gravity",
     *   size: 14,
     *   multiplyGravity: gravityToFactor(1.62) // the gravity of the moon is 1.62 m/s squered
     * })
     */
    multiplyGravity: 1,
    /**
     * ONLY for STATIC OBJECTS
     * this is how much of the speed will remain on a dynamic object that hits this object.
     * For example when this is 0 then when a dynamic objects hits this object the dynamic object will completly stop moving
     * And when it's set to 1 the dynamic object will bounce away with the speed it had when hittin this object
     * @type {number}
     */
    bounce: 0,
    /**
     * ONLY for STATIC OR DYNAMIC OBJECTS
     * this function will get triggered when another objects hits this object
     * This uniqueIdentifier is the same as the functions for creating objects return
     * @param {uniqueIdentifier} guid 
     * @example
     * function wallRemoved(){
     *   // your code
     * }
     * // some code & code to add the player
     * function wallHitBy(uniqueIdentifier){
     *   if(uniqueIdentifier == playerUniqueIdentifier){
     *     // removes this wall when hit by the player
     *     scene.remove(wallUniqueIdentifier, wallRemoved);
     *   }
     * }
     * scene.add.static(new Vector2(0, 0), new Vector2(50, 50), {
     *   type: "fill",
     *   color: "brown",
     *   whenHit: wallHitBy
     * });
     */
    whenHit: function(guid){},
    /**
     * when the user clicks on this object this function will get triggered.
     * The button string will be either "left" for a left mouse click or "right" for a right mouse click
     * @param {string} button
     * @example
     * function objectClicked(mouseButton){
     *   if(mouseButton == "left"){
     *     // left mouse button
     *     // your code
     *   }else if(mouseButton == "right"){
     *     // right mouse button
     *     // your code
     *   }
     * }
     * scene.add.dynamic(new Vector2(0, 0), new Vector2(50, 50), {
     *   type: "fill",
     *   color: "green",
     *   click: objectClicked
     * });
     */
    click: function(button){}
};

/**
 * contains all methods for changes the scene
 * @namespace
 */
var scene = {
    /** @private */
    _dynamic: [],
    /** @private */
    _static: [],
    /** @private */
    _ui: [],
    /** @private */
    _lastDraw: new Date().getTime(),
    /** @private */
    _guid: 0,
    /** @private */
    _loaded: false,
    /** @private */
    _oldviewSize: new Vector2(window.innerWidth, window.innerHeight),
    /**
     * The size of the game window
     * @type {Vector2}
     * @example
     * function whenBalloonRemoved(){
     *   // some code
     * }
     * function myUpdate(deltaTime){
     *   // some code & code to create a balloon
     *   var balloonPosition = scene.getPosition(balloonUniqueIdentifier);
     *   if(balloonPosition.y > (scene.viewSize.y / 2)){
     *     scene.remove(balloonUniqueIdentifier, whenBalloonRemoved);
     *   }
     * }
     * scene.update = myUpdate;
     */
    viewSize: new Vector2(window.innerWidth, window.innerHeight),
    /** @private */
    _resize(){
        this.ctx.translate(-this._oldviewSize.x/2, -this._oldviewSize.y/2);
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.ctx.translate(window.innerWidth/2, window.innerHeight/2);
        this._oldviewSize = new Vector2(window.innerWidth, window.innerHeight);
        this.viewSize = new Vector2(window.innerWidth, window.innerHeight);
    },

    /**
     * contains inputs managed by the engine
     * @namespace scene.input
     */
    input: {
        /**
         * the horizontal key input. (on the x axis)
         * when you press A, D, arrow left or arrow right this value will change accordingly
         * @type {number}
         */
        horizontal: 0,
        /**
         * the vertical key input. (on the y axis)
         * when you press W, S, arrow up or arrow down this value will change accordingly
         * @type {number}
         */
        vertical: 0,
        /**
         * used for checking if a key is pressed
         * @example
         * if(scene.input.key.u){
         *  // the u key is being pressed
         * }
         */
        key: {},
        /**
         * The mouse position as a vector2
         * @type {Vector2}
         * @example
         * // your code & code to create the object
         * function myUpdate(deltaTime){
         * 
         *   // your code
         * 
         *   // move the object to the location of the mouse
         *   scene.setPosition(objectUniqueIdentifier, scene.input.mousePosition);
         * }
         * scene.update = myUpdate;
         */
        mousePosition: new Vector2(0, 0)
    },
    /** @private */
    _shakeX: 0,
    /** @private */
    _shakeY: 0,
    /**
     * sets the background color for the game window
     * @param {color} color
     * @example
     * // makes the background lightblue
     * scene.backgroundColor("lightblue");
     * @example
     * // makes the background green
     * scene.backgroundColor("rgb(0, 255, 0)");
     */
    backgroundColor(color){
        scene.ctx.canvas.style.backgroundColor = color;
    },
    /**
     * a vector2 storing the position of the camera
     * you can set the position by doing:
     * scene.cameraPosition = new Vector2(xPosition, yPosition)
     * @type {Vector2}
     * @example
     * // some code & code to create the player
     * function myUpdate(deltaTime){
     *   // your code
     *   scene.cameraPosition = scene.getPosition(playerUniqueIdentifier);
     * }
     * scene.update = myUpdate;
     */
    cameraPosition: new Vector2(0, 0),
    /** @private */
    _shake(){
        if(scene._shakeIntensity > 0){
            var currentShakeInterpolation = (new Date().getTime()-scene._shakeStart) / scene._shakeDuration;
            if(currentShakeInterpolation > 1){
                scene._shakeStart = 0;
                scene._shakeDuration = 0;
                scene._shakeIntensity = 0;
                scene._shakeX = 0;
                scene._shakeY = 0;
            }else{
                scene._shakeX = (Math.random()*2-1)*scene._shakeIntensity*(1-currentShakeInterpolation);
                scene._shakeY = (Math.random()*2-1)*scene._shakeIntensity*(1-currentShakeInterpolation);
            }
        }else{
            scene._shakeX = 0;
            scene._shakeY = 0;
        }
        scene._shakeX -= scene.cameraPosition.x;
        scene._shakeY -= scene.cameraPosition.y;
    },
    /** @private */
    _update(){
        var goalX = 0;
        if(scene.input.key.a || scene.input.key.ArrowLeft){
            goalX -= 1;
        }
        if(scene.input.key.d || scene.input.key.ArrowRight){
            goalX += 1;
        }

        var goalY = 0;
        if(scene.input.key.s || scene.input.key.ArrowDown){
            goalY -= 1;
        }
        if(scene.input.key.w || scene.input.key.ArrowUp){
            goalY += 1;
        }

        scene.input.horizontal = scene.input.horizontal*0.9 + goalX*0.1;
        scene.input.vertical = scene.input.vertical*0.9 + goalY*0.1;

        var newTime = new Date().getTime();
        var deltaTime = (newTime - scene._lastDraw) / 1000;
        scene._physics(deltaTime);
        scene._shake();
        try {
            scene.update(deltaTime);
            requestAnimationFrame(scene._update);
        } catch (error) {
            console.error(error);
        }
        scene._removeDynamicsOutsideScreen();
        scene._draw();
        scene._lastDraw = newTime;
    },
    /** @private */
    _removeDynamicsOutsideScreen(){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].info.autoRemove){
                var object = scene._dynamic[i];
                var minX = (object.position.x + scene._shakeX) - (object.size.x / 2);
                var minY = (object.position.y + scene._shakeY) - (object.size.y / 2);
                var maxX = (object.position.x + scene._shakeX) + (object.size.x / 2);
                var maxY = (object.position.y + scene._shakeY) + (object.size.y / 2);

                if(maxX < -(window.innerWidth/2) || maxY < -(window.innerHeight/2) || minX > (window.innerWidth/2) || minY > (window.innerHeight/2)){
                    scene._dynamic.splice(i, 1);
                }
            }
        };
    },
    /** @private */
    _gravityValue: 9.8,
    /**
     * how fast the physics are.
     * if this is set to a value less then 1 then the physics will in slowmotion
     * if the value is higher then 1 then the physics are faster then usually
     * @type {number}
     * @example
     * // creates a slow motion effect
     * scene.physicSpeed = 0.5;
     */
    physicSpeed: 1,
    /** @private */
    _physics(deltaTime){
        var l = scene._dynamic.length;
        for(var i = 0; i < l; i++){
            var gMul = scene._dynamic[i].info.multiplyGravity || 1;
            var wantedVelocity = new Vector2(scene._dynamic[i].info.velocity.x, scene._dynamic[i].info.velocity.y - (scene._gravityValue * gMul * scene.physicSpeed));
            scene._dynamic[i].info.velocity = wantedVelocity;
            scene._static.forEach(collider => {
                var minX = collider.position.x - (collider.size.x / 2);
                var minY = collider.position.y - (collider.size.y / 2);
                var maxX = collider.position.x + (collider.size.x / 2);
                var maxY = collider.position.y + (collider.size.y / 2);

                var checkPos = new Vector2(scene._dynamic[i].position.x, scene._dynamic[i].position.y - (scene._dynamic[i].size.y/2));
                var checkPos2 = new Vector2(scene._dynamic[i].position.x, scene._dynamic[i].position.y + (scene._dynamic[i].size.y/2));
                var checkPos3 = new Vector2(scene._dynamic[i].position.x - (scene._dynamic[i].size.x/2), scene._dynamic[i].position.y);
                var checkPos4 = new Vector2(scene._dynamic[i].position.x + (scene._dynamic[i].size.x/2), scene._dynamic[i].position.y);

                if((checkPos.x > minX && checkPos.x < maxX && checkPos.y > minY && checkPos.y < maxY) || (checkPos2.x > minX && checkPos2.x < maxX && checkPos2.y > minY && checkPos2.y < maxY) || (checkPos3.x > minX && checkPos3.x < maxX && checkPos3.y > minY && checkPos3.y < maxY) || (checkPos4.x > minX && checkPos4.x < maxX && checkPos4.y > minY && checkPos4.y < maxY)){
                    // default = (collider.position.xy - scene._dynamic[i].position.xy) / scene._dynamic[i].size.xy / 2;
                    var HitEffect = new Vector2(Math.round((collider.position.x - scene._dynamic[i].position.x) / scene._dynamic[i].size.x), Math.round((collider.position.y - scene._dynamic[i].position.y) / scene._dynamic[i].size.y));
                    HitEffect.multiply(new Vector2(collider.info.bounce || 1, collider.info.bounce || 1));
                    scene._dynamic[i].info.velocity.multiply(HitEffect || new Vector2(1, 1)); // collider.info.hitEffect

                    /*// set position to correct stuff
                    var hitPosition = new Vector2((collider.position.x - scene._dynamic[i].position.x) / scene._dynamic[i].size.x, (collider.position.y - scene._dynamic[i].position.y) / scene._dynamic[i].size.y);
                    var m = Math.max(Math.abs(hitPosition.x), Math.abs(hitPosition.y));
                    var resolvePosition = new Vector2(scene._dynamic[i].position.x, scene._dynamic[i].position.y);
                    if(Math.abs(hitPosition.x) == m){
                        if(hitPosition.x > 0){
                            // x+
                            resolvePosition.x = collider.position.x + collider.size.x/2 + scene._dynamic[i].size.x/2;
                        }else{
                            // x-
                            resolvePosition.x = collider.position.x - collider.size.x/2 - scene._dynamic[i].size.x/2;
                        }
                    }
                    if(Math.abs(hitPosition.y) == m){
                        if(hitPosition.y > 0){
                            // y+
                            resolvePosition.y = collider.position.y + collider.size.y/2 + scene._dynamic[i].size.y/2;
                        }else{
                            // y-
                            resolvePosition.y = collider.position.y - collider.size.y/2 - scene._dynamic[i].size.y/2;
                        }
                    }
                    scene._dynamic[i].position = resolvePosition;*/

                    if(scene._dynamic[i].info.whenHit){
                        scene._dynamic[i].info.whenHit(collider.guid);
                    }
                    if(collider.info.whenHit){
                        collider.info.whenHit(scene._dynamic[i].guid);
                    }
                }
            });
            scene._dynamic[i].position.add(new Vector2((scene._dynamic[i].info.velocity.x * deltaTime)*scene.physicSpeed, (scene._dynamic[i].info.velocity.y * deltaTime)*scene.physicSpeed));
            // check for collisions
        }
    },
    /**
     * if this is set to true then the bounding box will be shown.
     * This might sometimes be handy when debugging
     * @type {boolean}
     * @example
     * // enables debugging view
     * scene.debug = true;
     */
    debug: false,
    /**
     * This function is activated when the scene is drawn.
     * You might use this when you want to draw graphics in another way then the default
     * @type {function}
     */
    afterDraw: function(){},
    /** @private */
    _draw(){
        this.ctx.clearRect(-(window.innerWidth/2), -(window.innerHeight/2), window.innerWidth, window.innerHeight);
        scene._ui.filter(el => el.info.background).forEach(object => {
            if(object.info.type == "fill"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.fillRect((object.position.x + scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }else if(object.info.type == "text"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.font = `${object.info.size || 15}px Arial`;
                this.ctx.fillText(object.info.text, object.position.x+scene._shakeX, -(object.position.y+scene._shakeY));
            }else if(object.info.type == "image"){
                this.ctx.drawImage(object.info.image, (object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }

            if(scene.debug){
                var oldStyle = scene.ctx.strokeStyle;
                scene.ctx.strokeStyle = 'red';
                this.ctx.strokeRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
                scene.ctx.strokeStyle = oldStyle;
            }
        });
        // draw static objects
        scene._static.forEach(object => {
            if(object.info.type == "fill"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.fillRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }else if(object.info.type == "text"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.font = `${object.info.size || 15}px Arial`;
                this.ctx.fillText(object.info.text, object.position.x+scene._shakeX, -(object.position.y+scene._shakeY));
            }else if(object.info.type == "image"){
                this.ctx.drawImage(object.info.image, (object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }
            if(scene.debug){
                var oldStyle = scene.ctx.strokeStyle;
                scene.ctx.strokeStyle = 'red';
                this.ctx.strokeRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
                scene.ctx.strokeStyle = oldStyle;
            }
        });
        // draw dynamic objects
        scene._dynamic.forEach(object => {
            if(object.info.type == "fill"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.fillRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }else if(object.info.type == "text"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.font = `${object.info.size || 15}px Arial`;
                this.ctx.fillText(object.info.text, object.position.x+scene._shakeX, -(object.position.y+scene._shakeY));
            }else if(object.info.type == "image"){
                this.ctx.drawImage(object.info.image, (object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }
            if(scene.debug){
                var oldStyle = scene.ctx.strokeStyle;
                scene.ctx.strokeStyle = 'red';
                this.ctx.strokeRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
                scene.ctx.strokeStyle = oldStyle;
            }
        });

        scene._ui.filter(el => !el.info.background).forEach(object => {
            if(object.info.type == "fill"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.fillRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }else if(object.info.type == "text"){
                this.ctx.fillStyle = object.info.color;
                this.ctx.font = `${object.info.size || 15}px Arial`;
                this.ctx.fillText(object.info.text, object.position.x+scene._shakeX, -(object.position.y+scene._shakeY));
            }else if(object.info.type == "image"){
                this.ctx.drawImage(object.info.image, (object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
            }
            if(scene.debug){
                var oldStyle = scene.ctx.strokeStyle;
                scene.ctx.strokeStyle = 'red';
                this.ctx.strokeRect((object.position.x+scene._shakeX)-(object.size.x/2), (-(object.position.y+scene._shakeY))-(object.size.y/2), object.size.x, object.size.y);
                scene.ctx.strokeStyle = oldStyle;
            }
        });
        scene.afterDraw();
    },
    /**
     * this function is called every frame.
     * You can move the player or do other stuff within this function
     * You also get the deltatime wich is how much time (in seconds) is passed since the last frame
     * @param {number} deltaTime 
     * @type {function}
     * @example
     * function myUpdate(deltaTime){
     *   if(scene.exists(playerUniqueIdentifier)){
     *     // moves the player 50 pixels per second
     *     scene.movePosition(playerUniqueIdentifier, new Vector2(deltaTime*50, 0));
     *   }
     * }
     * scene.update = myUpdate;
     */
    update: function(deltaTime){},
    /**
     * this function is called when you start the scene
     * @type {function}
     * @example
     * function myStart(){
     *   // some code to create the objects
     * }
     * scene.start = myStart;
     */
    start: function(){},
    /**
     * the drawing context wich you can use for drawing your own visuals in scene.afterDraw
     * @type {CanvasRenderingContext2D}
     */
    ctx: undefined,
    /**
     * for when you want to add an object
     * @namespace scene.add
     */
    add: {
        /**
         * creates a dynamic object (an object that falls and interacts with static objects)
         * @param {Vector2} position
         * @param {Vector2} size 
         * @param {Object} info 
         * @example
         * // creates a falling white squere at 0, 0 with a width and height of 50 pixels
         * var playerUniqueIdentifier = scene.add.dynamic(new Vector2(0, 0), new Vector2(50, 50), {
         *   type: "fill",
         *   color: "white"
         * });
         * @returns {uniqueIdentifier}
         */
        dynamic(position, size, info){
            if(info.velocity == undefined){
                var newObj = info;
                newObj.velocity = new Vector2(0, 0);
                scene._dynamic.push({
                    position: position,
                    size: size,
                    guid: scene._guid,
                    info: newObj
                });
            }else{
                scene._dynamic.push({
                    position: position,
                    size: size,
                    guid: scene._guid,
                    info: info//,
                    //velocity: info.velocity || new Vector2(0, 0)
                });
            }
            return scene._guid++;
        },
        /**
         * creates a static object (an object that doesn't take gravity and velocity in effect and blocks dynamic objects from moving through it)
         * @param {Vector2} position
         * @param {Vector2} size
         * @param {Object} info
         * @example
         * // creates a white squere wall at 0, 0 with a width and height of 50 pixels
         * var wallUniqueIdentifier = scene.add.static(new Vector2(0, 0), new Vector2(50, 50), {
         *   type: "fill",
         *   color: "white"
         * });
         * @returns {uniqueIdentifier}
         */
        static(position, size, info){
            scene._static.push({
                position: position,
                size: size,
                guid: scene._guid,
                info: info
            });
            return scene._guid++;
        },
        /**
         * creates an object that doesn't have anything to do with physics
         * @param {Vector2} position
         * @param {Vector2} size
         * @param {Object} info
         * @example
         * // creates a white squere at 0, 0 with a width and height of 50 pixels
         * var squereUniqueIdentifier = scene.add.ui(new Vector2(0, 0), new Vector2(50, 50), {
         *   type: "fill",
         *   color: "white"
         * });
         * @returns {uniqueIdentifier}
         */
        ui(position, size, info){
            scene._ui.push({
                position: position,
                size: size,
                guid: scene._guid,
                info: info
            });
            return scene._guid++;
        }
    },
    /**
     * sets the velocity of the object (with that unique identifier) to the vector2
     * @param {uniqueIdentifier} guid 
     * @param {Vector2} velocity 
     */
    setVelocity(guid, velocity){
        for(var i = 0; i < scene._dynamic.length; i++){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].info.velocity = velocity;
            }
        }
    },
    /**
     * sets the position of the object (with that unique identifier) to the vector2
     * @param {uniqueIdentifier} guid 
     * @param {Vector2} position 
     */
    setPosition(guid, position){
        for(var i = 0; i < scene._dynamic.length; i++){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].position = position;
            }
        }
        for(var i = 0; i < scene._static.length; i++){
            if(scene._static[i].guid == guid){
                scene._static[i].position = position;
            }
        }
        for(var i = 0; i < scene._ui.length; i++){
            if(scene._ui[i].guid == guid){
                scene._ui[i].position = position;
            }
        }
    },
    /**
     * set the size of the object (with that unique identifier) to the vector2
     * @param {uniqueIdentifier} guid 
     * @param {Vector2} size 
     */
    setSize(guid, size){
        for(var i = 0; i < scene._dynamic.length; i++){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].size = size;
            }
        }
        for(var i = 0; i < scene._static.length; i++){
            if(scene._static[i].guid == guid){
                scene._static[i].size = size;
            }
        }
        for(var i = 0; i < scene._ui.length; i++){
            if(scene._ui[i].guid == guid){
                scene._ui[i].size = size;
            }
        }
    },
    /**
     * fetches the size of the object (with that unique identifier)
     * @param {uniqueIdentifier} guid
     */
    getSize(guid){
        for(var i = 0; i < scene._dynamic.length; i++){
            if(scene._dynamic[i].guid == guid){
                return scene._dynamic[i].size;
            }
        }
        for(var i = 0; i < scene._static.length; i++){
            if(scene._static[i].guid == guid){
                return scene._static[i].size;
            }
        }
        for(var i = 0; i < scene._ui.length; i++){
            if(scene._ui[i].guid == guid){
                return scene._ui[i].size;
            }
        }
    },
    /**
     * adds movement vector2 to the position of the object (with that unique identifier)
     * @param {uniqueIdentifier} guid 
     * @param {Vector2} movement 
     */
    movePosition(guid, movement){
        for(var i = 0; i < scene._dynamic.length; i++){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].position.add(movement);
            }
        }
        for(var i = 0; i < scene._static.length; i++){
            if(scene._static[i].guid == guid){
                scene._static[i].position.add(movement);
            }
        }
        for(var i = 0; i < scene._ui.length; i++){
            if(scene._ui[i].guid == guid){
                scene._ui[i].position.add(movement);
            }
        }
    },
    /**
     * removes the object (with that unique identifier) and when that's done it will execute the whenDone function (callback)
     * @param {uniqueIdentifier} guid 
     * @param {callback} whenDone
     * @example
     * // some code to add the player
     * function whenObjectRemoved(){
     *   // your code
     * }
     * scene.remove(playerUniqueIdentifier, whenObjectRemoved);
     */
    remove(guid, whenDone){
        setTimeout(() => {
            for(var i = scene._dynamic.length-1; i > -1; i--){
                if(scene._dynamic[i].guid == guid){
                    scene._dynamic.splice(i, 1);
                }
            }
            for(var i = scene._static.length-1; i > -1; i--){
                if(scene._static[i].guid == guid){
                    scene._static.splice(i, 1);
                }
            }
            for(var i = scene._ui.length-1; i > -1; i--){
                if(scene._ui[i].guid == guid){
                    scene._ui.splice(i, 1);
                }
            }
            if(whenDone){
                whenDone();
            }
        }, 0);
    },
    /**
     * removes all objects from the game and when that's done it will execute the whenDone function (callback)
     * @param {callback} whenDone
     * @example
     * function whenEveryObjectIsRemoved(){
     *   // your code
     * }
     * scene.removeAll(whenEveryObjectIsRemoved);
     */
    removeAll(whenDone){
        setTimeout(() => {
            scene._dynamic = [];
            scene._static = [];
            scene._ui = [];
            whenDone();
        }, 0);
    },
    /**
     * fetches the position of the object (with that unique identifier)
     * @param {uniqueIdentifier} guid
     */
    getPosition(guid){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                return scene._dynamic[i].position;
            }
        }
        for(var i = scene._static.length-1; i > -1; i--){
            if(scene._static[i].guid == guid){
                return scene._static[i].position;
            }
        }
        for(var i = scene._ui.length-1; i > -1; i--){
            if(scene._ui[i].guid == guid){
                return scene._ui[i].position;
            }
        }
    },
    /**
     * fetches the velocity of the object (with that unique identifier)
     * @param {uniqueIdentifier} guid
     */
    getVelocity(guid){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                return scene._dynamic[i].info.velocity;
            }
        }
    },
    /**
     * fetches the info property of the object (with that unique identifier)
     * @param {uniqueIdentifier} guid
     */
    getInfo(guid){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                return scene._dynamic[i].info;
            }
        }
        for(var i = scene._static.length-1; i > -1; i--){
            if(scene._static[i].guid == guid){
                return scene._static[i].info;
            }
        }
        for(var i = scene._ui.length-1; i > -1; i--){
            if(scene._ui[i].guid == guid){
                return scene._ui[i].info;
            }
        }
    },
    /**
     * sets the info property of the object (with that unique identifier) to the info Object
     * @param {uniqueIdentifier} guid
     * @param {Object} info
     */
    setInfo(guid, info){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].info = info;
            }
        }
        for(var i = scene._static.length-1; i > -1; i--){
            if(scene._static[i].guid == guid){
                scene._static[i].info = info;
            }
        }
        for(var i = scene._ui.length-1; i > -1; i--){
            if(scene._ui[i].guid == guid){
                scene._ui[i].info = info;
            }
        }
    },
    /**
     * sets a property (propertyName) from the info of the object (with that unique identifier) to newValue
     * @param {uniqueIdentifier} guid
     * @param {string} propertyName
     * @param {any} newValue
     */
    setInfoProperty(guid, propertyName, newValue){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                scene._dynamic[i].info[propertyName] = newValue;
            }
        }
        for(var i = scene._static.length-1; i > -1; i--){
            if(scene._static[i].guid == guid){
                scene._static[i].info[propertyName] = newValue;
            }
        }
        for(var i = scene._ui.length-1; i > -1; i--){
            if(scene._ui[i].guid == guid){
                scene._ui[i].info[propertyName] = newValue;
            }
        }
    },
    /**
     * check if the object (with that unique identifier) exists currently in the game
     * @param {uniqueIdentifier} guid
     * @example
     * // some code wich also adds the player
     * function myUpdate(deltaTime){
     *   if(scene.exists(playerUniqueIdentifier)){
     *     // move player
     *   }
     * }
     * scene.update = myUpdate;
     */
    exists(guid){
        for(var i = scene._dynamic.length-1; i > -1; i--){
            if(scene._dynamic[i].guid == guid){
                return true;
            }
        }
        for(var i = scene._static.length-1; i > -1; i--){
            if(scene._static[i].guid == guid){
                return true;
            }
        }
        for(var i = scene._ui.length-1; i > -1; i--){
            if(scene._ui[i].guid == guid){
                return true;
            }
        }
        return false;
    },
    /** @private */
    _shakeStart: 0,
    /** @private */
    _shakeDuration: 0,
    /** @private */
    _shakeIntensity: 0,
    /**
     * shakes the game for some amount of seconds starting with the intensity amount of pixels and slowly lowers the effect
     * @param {number} seconds
     * @param {number} intensity 
     * @example
     * // shakes the scene for 3 seconds starting with a 100 pixel displacement
     * scene.shake(3, 100);
     */
    shake(seconds, intensity){
        scene._shakeStart = new Date().getTime();
        scene._shakeDuration = seconds*1000;
        scene._shakeIntensity = intensity;
    }
}
window.addEventListener("keydown", e => {
    scene.input.key[e.key] = true;
});
window.addEventListener("keyup", e => {
    delete scene.input.key[e.key];
});
window.addEventListener("load", () => {
    scene._loaded = true;
    var canv = document.createElement("canvas");
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    canv.style.imageRendering = "pixelated";
    canv.style.position = "fixed";
    canv.style.left = "0";
    canv.style.top = "0";
    canv.style.backgroundColor = "black";
    document.body.appendChild(canv);
    scene.ctx = canv.getContext("2d");
    scene.ctx.imageSmoothingEnabled = false;
    scene.ctx.translate(window.innerWidth/2, window.innerHeight/2);
    scene.ctx.fillStyle = 'white';
    scene.ctx.strokeStyle = 'white';
    scene.ctx.textAlign = "center";
    scene.start();
    scene._draw();
    requestAnimationFrame(scene._update);
    //scene._update();
});

window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("resize", () => {
    scene._resize();
});
window.addEventListener("mousedown", e => {
    e.preventDefault();
    
    var mouseNames = ["left", "middle", "right"];

    // e.clientX e.clientY
    var sceneCoordinates = new Vector2(e.clientX - (scene._oldviewSize.x / 2), -(e.clientY - (scene._oldviewSize.y / 2)));

    scene._dynamic.forEach(object => {
        var minX = (object.position.x + scene._shakeX) - (object.size.x / 2);
        var minY = (object.position.y + scene._shakeY) - (object.size.y / 2);
        var maxX = (object.position.x + scene._shakeX) + (object.size.x / 2);
        var maxY = (object.position.y + scene._shakeY) + (object.size.y / 2);

        if(sceneCoordinates.x > minX && sceneCoordinates.x < maxX && sceneCoordinates.y > minY && sceneCoordinates.y < maxY && object.click){
            object.click(mouseNames[e.button]);
        }
    });
    scene._static.forEach(object => {
        var minX = (object.position.x + scene._shakeX) - (object.size.x / 2);
        var minY = (object.position.y + scene._shakeY) - (object.size.y / 2);
        var maxX = (object.position.x + scene._shakeX) + (object.size.x / 2);
        var maxY = (object.position.y + scene._shakeY) + (object.size.y / 2);

        if(sceneCoordinates.x > minX && sceneCoordinates.x < maxX && sceneCoordinates.y > minY && sceneCoordinates.y < maxY && object.click){
            object.click(mouseNames[e.button]);
        }
    });
    scene._ui.forEach(object => {
        var minX = (object.position.x + scene._shakeX) - (object.size.x / 2);
        var minY = (object.position.y + scene._shakeY) - (object.size.y / 2);
        var maxX = (object.position.x + scene._shakeX) + (object.size.x / 2);
        var maxY = (object.position.y + scene._shakeY) + (object.size.y / 2);

        if(sceneCoordinates.x > minX && sceneCoordinates.x < maxX && sceneCoordinates.y > minY && sceneCoordinates.y < maxY && object.info.click){
            object.info.click(mouseNames[e.button]);
        }
    });
}, false);
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here
        scene.input.mousePosition = new Vector2(event.pageX - window.innerWidth / 2, -(event.pageY - window.innerHeight / 2));
    }
})();