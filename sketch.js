let t = 0;
let xs = [];
let ys = [];
let s;

// options
let shape = true;
let axis = true;
let triangle = true;
let coordinates = true;
let autoReplay = false;

// parameters
let a = 1;
let b = 1;
let m1 = 7;
let m2 = 7;
let n1 = 2;
let n2 = 8;
let n3 = 4;

let init = false;

function getRadius(t) {
	return pow(pow(abs(cos(m1 * t / 4) / a), n2) + pow(abs(sin(m2 * t / 4) / b), n3), -1 / n1);
}
function replay() {
	t = 0;
	xs = [];
	ys = [];
}
function setup() {
	let m = 0;
	let container = "canvas-container";
	let cnv;
	if (window.innerWidth < window.innerHeight) {
		cnv = createCanvas(window.innerWidth, window.innerWidth);
	} else {
		cnv = createCanvas(window.innerHeight, window.innerHeight);
	}
	let div = document.querySelector("#" + container);
	div.style.height = height + 2 + "px";
	cnv.parent(container);
	s = width;
	if (!init) {
		setOptions();
	}
	for (let j = 0; j < TWO_PI; j += 0.01) {
		const tr = getRadius(j);
		if (tr > m) {
			m = tr;
		}
	}
	while (m * s > height / 2) {
		s--;
	}
	init = true;
}
function draw() {
	const r = getRadius(t);
	const x = s * r * cos(t);
	const y = s * r * sin(t);
	background(0);
	translate(width * 0.5, height * 0.5);
	noFill();
	stroke(255);
	beginShape();
	for (let i = 0; i < xs.length; i++) {
		vertex(xs[i], ys[i]);
	}
	endShape();
	stroke(255, 100);
	if (t < TWO_PI) {
		if (shape) {
			beginShape();
			for (let j = 0; j < TWO_PI; j += 0.01) {
				const tr = getRadius(j);
				const tx = s * tr * cos(j);
				const ty = s * tr * sin(j);
				vertex(tx, ty);
			}
			endShape();
		}
		if (triangle) {
			stroke(255, 0, 0);
			line(x, y, x, 0);
			stroke(0, 255, 0);
			line(0, 0, x, 0);
			stroke(0, 0, 255);
			line(0, 0, x, y);
		}
		if (axis) {
			stroke(255, 100);
			line(-width * 0.5, 0, width * 0.5, 0);
			line(0, -height * 0.5, 0, height * 0.5);
		}
		if (coordinates) {
			let a = y / r;
			stroke(255);
			text(`y = ${round(s * y)}`, x, y + 30);
			text(`x = ${round(s * x)}`, x, y + 20);
			text(`r = ${round(s * r)}`, x, y + 10);
			text(`a = ${round(a)}°`, -15, 5);
		}
		if (autoReplay) {
			if (t % TWO_PI >= floor(TWO_PI) && round(y / r) == -1) {
				replay();
			}
		}
		
		xs.push(x);
		ys.push(y);
		t += 0.01;
	}
}
