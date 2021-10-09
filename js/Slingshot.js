class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10,
             
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        /*this.sling1 = loadImage("sprites/sling1.png")
        this.sling2= loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")*/
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach (bodyA){
        this.sling.bodyA = bodyA;
    }
    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("white");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            strokeWeight(7);
                
        }
    }
}
        