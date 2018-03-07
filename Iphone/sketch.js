var phone1;

var dp;

setup = function() {
  createCanvas(1200, 1200);
  dp = 8;
  // Inialize phone 1
  phone1 = new iPhoneX();
  phone1.setup();
  diameterA = 50;
  diameterB = 100;
  aX = 260;
  aY = 800;
};

draw = function() {
 background(255);
 phone1.show(50 , 10);
 //vertKeylines(phone1.screenX, phone1.screenY );
 //hrzKeylines(phone1.screenX , phone1.screenY );
 //spacers(phone1.screenX, phone1.screenY);

 drawText(mouseX, mouseY, "hello");

 var proximityA = dist(aX, aY, mouseX, mouseY);
	// detect over
	if (proximityA < diameterA/2) {
		fill(250,0,0,200); //red
	} else {
		fill(250,0,0,10);
	}
		ellipse(aX, aY, diameterA, diameterA);


  //click(260,800,50,50);

}



