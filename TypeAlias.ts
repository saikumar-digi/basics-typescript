type Point = {
    x:number,
    y: number
};

let coordinates: Point = {x:65,y:23}

function randomCoordinates():Point{
return {x: Math.random() , y:Math.random()}
}

function doublePoint (point: Point): Point{
    return {x:point.x*2 , y:point.y*2};
}


type sai = number;
let age : sai = 27;
