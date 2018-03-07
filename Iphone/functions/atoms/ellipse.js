 var proximityA = dist(aX, aY, mouseX, mouseY);
	// detect over
	if (proximityA < diameterA/2) {
		fill(250,0,0,200); //red
	} else {
		fill(250,0,0,10);
	}
		ellipse(aX, aY, diameterA, diameterA);