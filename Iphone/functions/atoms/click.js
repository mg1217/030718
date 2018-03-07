function click(aX, aY, diameterB, diameterB){

  	// Evaluate mouse Over

  	var overX = mouseX > orgX && mouseX < orgX + diameterA;
  	var overY = mouseY > orgY && mouseY < orgY + diameterA;


  	if ( overX && overY ){

  		// Over color

		if (mouseIsPressed){

			fill(250,150,0,100);
			diameterB = 100
			orgX = mouseX;

		} else {
			fill(250,0,0,100);
		}


	} else {

		// NO over color

		fill(250,0,0,10);

	}

	ellipse(aX, aY, diameterB, diameterB);

}