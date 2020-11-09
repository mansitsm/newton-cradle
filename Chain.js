class Chain{
constructor(bodyA,bodyB,pointB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:pointB,
        stiffness:0.04,
        length:400
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);

}

display(){
    var pointA=this.chain.bodyA.position
    var pointBx=this.chain.bodyB.position.x+this.chain.pointB.x
    var pointBy=this.chain.bodyB.position.y+this.chain.pointB.y

    strokeWeight(3);
    line(pointA.x,pointA.y,pointBx,pointBy);
}

}