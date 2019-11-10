
function gravity_energy(o1,o2) {
	// Gravitational potential
	var dx = o1.x - o2.x;
	var dy = o1.y - o2.y;
	var r = Math.sqrt(dx*dx + dy*dy);
	var GmM = G*o1.m*o2.m;
	return GmM/r;
}
function gravity_gradient(o1,o2) {
	// for more precise numerical methods
	var dx = o1.x - o2.x;
	var dy = o1.y - o2.y;
	var r5 = Math.pow(dx*dx + dy*dy, 5); // r^5
	var GmM = G*o1.m*o2.m;
	return {
		x: {x: GmM*(2*dx*dx-dy*dy)/r5, y: 3*GmM*dx*dy/r5},
		y: {x: 3*GmM*dx*dy/r5, y: GmM*(2*dy*dy-dx*dx)/r5}
	};
}
