"use strict";
function do_physics() {
	save_traces();
	collapse(); // collide

	var l = planets.length;

	if (planets.length == 0) {return;}
	if (planets.length == 1) {
		planets[0].x += planets[0].v_x*dt;
		planets[0].y += planets[0].v_y*dt;
		return;
	}

	var k1 = new Array(planets.length);
	var k2 = new Array(planets.length);
	var k3 = new Array(planets.length);
	var k4 = new Array(planets.length);

	// calculating k1
	for (var i = 0; i < planets.length; ++i) {
		var p = planets[i];
		p.F_x = 0;
		p.F_y = 0;
		for (var j = 0; j < planets.length; ++j) {
			if (i!=j){
				var f = gravity(p, planets[j]);
				p.F_x += f.x;
				p.F_y += f.y;
			}
		}

		k1[i] = {
			x: p.v_x,
			y: p.v_y,
			v_x: p.F_x/p.m,
			v_y: p.F_y/p.m,
		}
	}

	// calculating k2
	for (var i = 0; i < planets.length; ++i) {
		var p = planets[i];
		p.F_x = 0;
		p.F_y = 0;
		for (var j = 0; j < planets.length; ++j) {
			if (i!=j){
				var f = gravity(p_add(p,k1[i],0.5*dt),
								p_add(planets[j],k1[j],0.5*dt));
				p.F_x += f.x;
				p.F_y += f.y;
			}
		}
		k2[i] = {
			x: p.v_x+0.5*dt*k1[i].v_x,
			y: p.v_y+0.5*dt*k1[i].v_y,
			v_x: p.F_x/p.m,
			v_y: p.F_y/p.m,
		};
	}

	// calculating k3
	for (var i = 0; i < planets.length; ++i) {
		var p = planets[i];
		p.F_x = 0;
		p.F_y = 0;
		for (var j = 0; j < planets.length; ++j) {
			if (i!=j){
				var f = gravity(p_add(p,k2[i],0.5*dt),
								p_add(planets[j],k2[j],0.5*dt));
				p.F_x += f.x;
				p.F_y += f.y;
			}
		}

		k3[i] = {
			x: p.v_x+0.5*dt*k2[i].v_x,
			y: p.v_y+0.5*dt*k2[i].v_y,
			v_x: p.F_x/p.m,
			v_y: p.F_y/p.m,
		}
	}

	// calculating k4
	for (var i = 0; i < planets.length; ++i) {
		var p = planets[i];
		p.F_x = 0;
		p.F_y = 0;
		for (var j = 0; j < planets.length; ++j) {
			if (i!=j){
				var f = gravity(p_add(p,k3[i],dt),
								p_add(planets[j],k3[j],dt));
				p.F_x += f.x;
				p.F_y += f.y;
			}
		}

		k4[i] = {
			x: p.v_x+dt*k3[i].v_x,
			y: p.v_y+dt*k3[i].v_y,
			v_x: p.F_x/p.m,
			v_y: p.F_y/p.m,
		}
	}

	for (var i = 0; i < planets.length; ++i) {
		var p = planets[i];

		p.x += dt*(k1[i].x+2*k2[i].x+2*k3[i].x+k4[i].x)/6;
		p.y += dt*(k1[i].y+2*k2[i].y+2*k3[i].y+k4[i].y)/6;
		p.v_x += dt*(k1[i].v_x+2*k2[i].v_x+2*k3[i].v_x+k4[i].v_x)/6;
		p.v_y += dt*(k1[i].v_y+2*k2[i].v_y+2*k3[i].v_y+k4[i].v_y)/6;
	}
}


function p_add(p, k, dx) { //this represents planet at intermediate step
	return {
		x: p.x+k.x*dx,
		y: p.y+k.y*dx,
		v_x: p.v_x+k.v_x*dx,
		v_y: p.v_y+k.v_y*dx,
		m: p.m
	};
}
