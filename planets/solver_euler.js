function do_physics() {
	save_traces();
	collapse(); //collide 
	for (var i = 0; i < planets.length; ++i) {
		planets[i].F_x = 0;
		planets[i].F_y = 0;
		planets[i].dFxx = 0;
		planets[i].dFxy = 0;
		planets[i].dFyx = 0;
		planets[i].dFyy = 0;
		for (var j = 0; j < planets.length; ++j) {
			if (i!=j){
				var f = gravity(planets[i], planets[j]);
				//var df = gravity_gradient(planets[i], planets[j])
				planets[i].F_x += f.x;
				planets[i].F_y += f.y;
				//planets[i].dFxx += df.x.x;
				//planets[i].dFxy += df.x.y;
				//planets[i].dFyx += df.y.x;
				//planets[i].dFxy += df.x.y;
			}
		}
	}
	for (var i = 0; i < planets.length; ++i) {
		move(planets[i]);
	}
}

function move(object) {
	// TODO: use more precise model
	// Newton's second law
	object.a_x = object.F_x/object.m;
	object.a_y = object.F_y/object.m;

	object.x += object.v_x*dt;
	object.y += object.v_y*dt;

	object.v_x += object.a_x*dt;
	object.v_y += object.a_y*dt;
}