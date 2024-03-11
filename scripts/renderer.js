import { Matrix } from './matrix.js';
import * as CG from './transforms.js';

class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // limit_fps_flag:      bool 
    // fps:                 int
    constructor(canvas, limit_fps_flag, fps) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.limit_fps = limit_fps_flag;
        this.fps = fps;
        this.start_time = null;
        this.prev_time = null;

        this.models = {
            slide0: [
                // example model (diamond) -> should be replaced with actual model
                {
                    vertices: [
                        //circle??
                                CG.Vector3(250.0, 200.0,1),
                                CG.Vector3(248.11031728812423, 212.07106781186547,1),
                                CG.Vector3(243.96981621080964, 223.72435695748935,1),
                                CG.Vector3(237.67435695748935, 234.66367572436244,1),
                                CG.Vector3(229.3656449515121, 244.61602540378443,1),
                                CG.Vector3(219.23433040378443, 253.32806781245672,1),
                                CG.Vector3(207.51583249014413, 260.5776839769542,1),
                                CG.Vector3(194.4816890703386, 266.17020280074733,1),
                                CG.Vector3(180.4183109296614, 269.9508480819732,1),
                                CG.Vector3(165.6325670098559, 271.8090169943749,1),
                                CG.Vector3(150.4479457637258, 271.6863415561275,1),
                                CG.Vector3(135.1983109296614, 269.58305975677385,1),
                                CG.Vector3(120.22177219777015, 265.53660254037846,1),
                                CG.Vector3(105.85601604164415, 259.62797951612445,1),
                                CG.Vector3(92.43831092966139, 251.97634226952892,1),
                                CG.Vector3(80.29831092966139, 242.74001521485405,1),
                                CG.Vector3(69.75508227631552, 232.10539107319177,1),
                                CG.Vector3(61.10619469029134, 220.29089200641555,1),
                                CG.Vector3(54.621987900785634, 207.53740498379173,1),
                                CG.Vector3(50.54001667417536, 194.1012143130374,1),
                                CG.Vector3(49.0489076727037, 180.2438299076175,1),
                                CG.Vector3(50.22177219777015, 166.24202048387515,1),
                                CG.Vector3(54.08546431413352, 152.3756432768083,1),
                                CG.Vector3(60.61427995660021, 138.9279827302619,1),
                                CG.Vector3(69.72698551330971, 126.1855261256377,1),
                                CG.Vector3(81.27810799358404, 114.43160759186746,1),
                                CG.Vector3(94.07247178821766, 103.94112907185682,1),
                                CG.Vector3(107.86930806776506, 94.97243501194403,1),
                                CG.Vector3(122.37564327680832, 87.76057325372867,1),
                                CG.Vector3(137.2510697797808, 82.52599551069028,1),
                                CG.Vector3(152.13115080142867, 79.46524447983406,1),
                                CG.Vector3(166.63115080142867, 78.74156801222094,1)
                                ],

                    // the transformed values
                    transform: null,
                    
                    //add velocitys and stuff in extra object atributes
                    velocity: [.5, .5], 

                    rotations: [0],
                    
                    resize:[0, 0]

                }
            ],
            slide1: [
                // polygon 1
                {
                    // need to put at orgin then rotate then transform.
                    vertices: [
                        CG.Vector3(0, -150, 1),
                        CG.Vector3(100, 0, 1),
                        CG.Vector3(0, 150, 1),
                        CG.Vector3(-100, 0, 1)
                    ],
                     // the transformed values
                     transform: null,
                    
                     // [x,y] velocity
                     velocity: [0, 0], 
                     // rotation speed
                     rotations: [0.005],
                     // resize speed
                     resize:[0, 0]
 
                },
                // polygon 2
                {
                    vertices: [
                        CG.Vector3(0, -25, 1),
                        CG.Vector3(50, 0, 1),
                        CG.Vector3(0, 25, 1),
                        CG.Vector3(-50, 0, 1)
                    ],
                     // the transformed values
                     transform: null,
                    
                     // [x,y] velocity
                     velocity: [0, 0], 
                     // rotation speed
                     rotations: [0-0.0013],
                     // resize speed
                     resize:[0, 0]
 
                },
                //polygon 3
                {
                    vertices:[
                        CG.Vector3(0, -150, 1),
                        CG.Vector3(100, 0, 1),
                        CG.Vector3(0, 150, 1),
                        CG.Vector3(-100, 0, 1)
                    ],
                     // the transformed values
                     transform: null,
                    
                     // [x,y] velocity
                     velocity: [0, 0], 
                     // rotation speed
                     rotations: [0.0025],
                     // resize speed
                     resize:[0, 0]
                }
            ],
            slide2: [
                // polygon 1
                {
                    // need to put at orgin then rotate then transform.
                    vertices: [
                        CG.Vector3(0, -150, 1),
                        CG.Vector3(100, 0, 1),
                        CG.Vector3(0, 150, 1),
                        CG.Vector3(-100, 0, 1)
                    ],
                     // the transformed values
                     transform: null,
                    
                     // [x,y] velocity
                     velocity: [0, 0], 
                     // rotation speed
                     rotations: [0],
                     // resize speed
                     resize:[1.0001, 1.0001],
                    // counter for sizing
                    counter: [0]
                },
                // polygon 2
                {
                    vertices: [
                        CG.Vector3(0, -25, 1),
                        CG.Vector3(50, 0, 1),
                        CG.Vector3(0, 25, 1),
                        CG.Vector3(-50, 0, 1)
                    ],
                     // the transformed values
                     transform: null,
                    
                     // [x,y] velocity
                     velocity: [, 0], 
                     // rotation speed
                     rotations: [0],
                     // resize speed
                     resize:[1, 1.0001]
 
                },
            ],
            slide3: []
        };
    }
    

    // flag:  bool
    limitFps(flag) {
        this.limit_fps = flag;
    }

    // n:  int
    setFps(n) {
        this.fps = n;
    }

    // idx: int
    setSlideIndex(idx) {
        this.slide_idx = idx;
    }

    animate(timestamp) {
        // Get time and delta time for animation
        if (this.start_time === null) {
            this.start_time = timestamp;
            this.prev_time = timestamp;
        }
        let time = timestamp - this.start_time;
        let delta_time = timestamp - this.prev_time;
        //console.log('animate(): t = ' + time.toFixed(1) + ', dt = ' + delta_time.toFixed(1));

        // Update transforms for animation
        this.updateTransforms(time, delta_time);

        // Draw slide
        this.drawSlide();

        // Invoke call for next frame in animation
        if (this.limit_fps) {
            setTimeout(() => {
                window.requestAnimationFrame((ts) => {
                    this.animate(ts);
                });
            }, Math.floor(1000.0 / this.fps));
        }
        else {
            window.requestAnimationFrame((ts) => {
                this.animate(ts);
            });
        }

        // Update previous time to current one for next calculation of delta time
        this.prev_time = timestamp;
    }

    //
    updateTransforms(time, delta_time) {
        // TODO: update any transformations needed for animation

        // initalize all variables.
        let sx = null;
        let sy = null;
        let theda = null;
        let ty = null;
        let tx = null;
        let mat3x3 = new Matrix(3,3);
        let translate = new Matrix(3,3);
        let rotate = new Matrix(3,3);
        let stretch = new Matrix(3,3);
        
        switch (this.slide_idx) {
            case 0:
                tx = this.models.slide0[0].velocity[0] * time;
                ty = this.models.slide0[0].velocity[1] * time;
                CG.mat3x3Translate(mat3x3,tx,ty)
                this.models.slide0[0].transform = mat3x3;
                break;
            case 1:
                // polygon 1
                theda = this.models.slide1[0].rotations[0] * time;
                CG.mat3x3Rotate(rotate,theda);
                CG.mat3x3Translate(translate, 200, 200);
                //console.log(mat3x3);
                mat3x3 = Matrix.multiply([translate, rotate]);
                this.models.slide1[0].transform = mat3x3;

                // polygon 2
                theda = this.models.slide1[1].rotations[0] * time;
                CG.mat3x3Rotate(rotate,theda);
                CG.mat3x3Translate(translate, 400, 400);
                //console.log(mat3x3);
                mat3x3 = Matrix.multiply([translate, rotate]);
                this.models.slide1[1].transform = mat3x3;

                //polygon 3
                theda = this.models.slide1[2].rotations[0] * time;
                CG.mat3x3Rotate(rotate,theda);
                CG.mat3x3Translate(translate, 600, 200);
                //console.log(mat3x3);
                mat3x3 = Matrix.multiply([translate, rotate]);
                this.models.slide1[2].transform = mat3x3;

                break;
            case 2:
                // polygon 1
                // need to fix this part
                console.log(this.models.slide2[0].counter[0])
                if(this.models.slide2[0].counter[0] > 10){
                    if(this.models.slide2[0].resize[0] > 1){
                        this.models.slide2[0].resize[0] = 0.0009;
                        this.models.slide2[0].resize[1] = 0.0009;
                        this.models.slide2[1].resize[1] = 0.0009;
                    }
                    else{
                        this.models.slide2[0].resize[0] = 1.0001;
                        this.models.slide2[0].resize[1] = 1.0001;
                        this.models.slide2[1].resize[1] = 1.0001;
                    }
                    this.models.slide2[0].counter[0] = 0;
                }
                sx = this.models.slide2[0].resize[0] * time;
                sy = this.models.slide2[0].resize[1] * time;
                CG.mat3x3Scale(stretch,sx,sy);
                CG.mat3x3Translate(translate, 300, 300);
                //console.log(mat3x3);
                mat3x3 = Matrix.multiply([translate, stretch]);
                this.models.slide2[0].transform = mat3x3;

                // polygon 2
                sx = this.models.slide2[1].resize[0] * time;
                sy = this.models.slide2[1].resize[1] * time;
                CG.mat3x3Scale(stretch,sx,sy);
                CG.mat3x3Translate(translate, 600, 400);
                //console.log(mat3x3);
                mat3x3 = Matrix.multiply([translate, stretch]);
                this.models.slide2[1].transform = mat3x3;
                let counter = this.models.slide2[0].counter[0];
                this.models.slide2[0].counter[0] = (counter + 1);
                break;

            case 3:

                break;

        }
        // slide1 transforms


        // not working yet need to make sure its on the right path.
        // let vert = this.vertices;
        // let sx = this.velocity[0] * time;
        // let sy = this.velocity[1] * time;
        // let theda = this.rotation[0] * time;
        // let tx = this.velocity[0] * time;
        // let ty = this.velocity[1] * time;
        // let mat3x3 = [[0,0,0],[0,0,0],[0,0,0]];
        // let scale = CG.mat3x3Scale(mat3x3,sx,sy);
        // let rotate = CG.mat3x3Rotate(mat3x3,theda);
        // let translate = CG.mat3x3Translate(mat3x3,tx,ty);
        // this.transform = scale * rotate * translate; 
    }
    
    //
    drawSlide() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0();
                break;
            case 1:
                this.drawSlide1();
                break;
            case 2:
                this.drawSlide2();
                break;
            case 3:
                this.drawSlide3();
                break;
        }
    }

    //
    drawSlide0() {
        // TODO: draw bouncing ball (circle that changes direction whenever it hits an edge)
         let teal = [0, 128, 128, 255];
         let transformedVerticies = [];
         for(let i = 0; i < this.models.slide0[0].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide0[0].transform, this.models.slide0[0].vertices[i]]));
            //console.log(transformedVerticies);
         }
         this.drawConvexPolygon(transformedVerticies, teal);
        // Following lines are example of drawing a single polygon
        // (this should be removed/edited after you implement the slide)
        // this.drawConvexPolygon(this.models.slide0[0].vertices, teal);
    }

    //
    drawSlide1() {
        // TODO: draw at least 3 polygons that spin about their own centers
        //   - have each polygon spin at a different speed / direction
        let teal = [0, 128, 128, 255];
        let transformedVerticies = [];
    
        // polygon 1
        for(let i = 0; i < this.models.slide1[0].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide1[0].transform, this.models.slide1[0].vertices[i]]));
            //console.log(transformedVerticies);
        }
        this.drawConvexPolygon(transformedVerticies, teal);

        // polygon 2
        transformedVerticies = [];
        for(let i = 0; i < this.models.slide1[1].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide1[1].transform, this.models.slide1[1].vertices[i]]));
            //console.log(transformedVerticies);
        }
        this.drawConvexPolygon(transformedVerticies, teal);

        // polygon 3
        transformedVerticies = [];
        for(let i = 0; i < this.models.slide1[2].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide1[2].transform, this.models.slide1[2].vertices[i]]));
            //console.log(transformedVerticies);
        }
        this.drawConvexPolygon(transformedVerticies, teal);
    }

    //
    drawSlide2() {
        // TODO: draw at least 2 polygons grow and shrink about their own centers
        //   - have each polygon grow / shrink different sizes
        //   - try at least 1 polygon that grows / shrinks non-uniformly in the x and y directions
        let teal = [0, 128, 128, 255];
        let transformedVerticies = [];
    
        // polygon 1
        for(let i = 0; i < this.models.slide2[0].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide2[0].transform, this.models.slide2[0].vertices[i]]));
            //console.log(transformedVerticies);
        }
        this.drawConvexPolygon(transformedVerticies, teal);

        // polygon 2
        transformedVerticies = [];
        for(let i = 0; i < this.models.slide2[1].vertices.length; i++){
            //console.log(this.models.slide0[0].transform)
            transformedVerticies.push(Matrix.multiply([this.models.slide2[1].transform, this.models.slide2[1].vertices[i]]));
            //console.log(transformedVerticies);
        }
        this.drawConvexPolygon(transformedVerticies, teal);

    }

    //
    drawSlide3() {
        // TODO: get creative!
        //   - animation should involve all three basic transformation types
        //     (translation, scaling, and rotation)
        
        
    }
    
    // vertex_list:  array of object [Matrix(3, 1), Matrix(3, 1), ..., Matrix(3, 1)]
    // color:        array of int [R, G, B, A]
    drawConvexPolygon(vertex_list, color) {
        this.ctx.fillStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3] / 255) + ')';
        this.ctx.beginPath();
        let x = vertex_list[0].values[0][0] / vertex_list[0].values[2][0];
        let y = vertex_list[0].values[1][0] / vertex_list[0].values[2][0];
        this.ctx.moveTo(x, y);
        for (let i = 1; i < vertex_list.length; i++) {
            x = vertex_list[i].values[0][0] / vertex_list[i].values[2][0];
            y = vertex_list[i].values[1][0] / vertex_list[i].values[2][0];
            this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
};

export { Renderer };
