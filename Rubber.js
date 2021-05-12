class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		var options={

			restitution:0.3,
			density:2,
			friction:2

		}

		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			ellipseMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(rubberpos.x,rubberpos.y,this.r,this.r)
			pop()
	}

}