class Paper{

    constructor(width){

        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
        }
        
        
        
                this.body = Bodies.circle(mouseX,mouseY,width,options);
                this.width=width;
            
                this.image=loadImage("paper(1).png");
               this.image.Scale=0.1;
                World.add(world,this.body)
                }
                
                display(){
                var pos=this.body.position;
                imageMode(CENTER);
                
                
                
                
                image(this.image,pos.x,pos.y,this.width)
                }
                
                
        








}