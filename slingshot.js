class Slingshot{

constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1.5,
length:20
}
this.pointB=pointB
this.rope=Constraint.create(options)
World.add(world,this.rope)
}

display(){
var pointA=this.rope.bodyA.position
var pointB=this.pointB
strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}