function setOptions() {
	let ai = createInput(1);
	let bi = createInput(1);
	let m1i = createInput(7);
	let m2i = createInput(7);
	let n1i = createInput(2);
	let n2i = createInput(8);
	let n3i = createInput(4);
	let saveBtn = createButton("Save");
	let replayBtn = createButton("Replay");
	let shapeBtn = createCheckbox("Shape", true);
	let axisBtn = createCheckbox("Axes", true);
	let triangleBtn = createCheckbox("Triangle", true);
	let coords = createCheckbox("Coordinates", true);
	let autoReplayBtn = createCheckbox("Auto Replay", false);
	let elements = [shapeBtn, coords, triangleBtn, axisBtn, autoReplayBtn, ai, bi, m1i, m2i, n1i, n2i, n3i, replayBtn, saveBtn];
	let label = ["", "", "", "", "", "a", "b", "m1", "m2", "n1", "n2", "n3", "", ""];
	for (let i = 0; i < label.length; i++) {
		if (label[i]) {
			let l = createSpan(label[i]);
			l.parent("settings");
			l.class("col-2");
		}
		elements[i].parent("settings");
		if (i == 12 || i == 13) {
			elements[i].class("col-5 m-2 btn btn-primary");
		} else if (i < 4) {
			elements[i].class("col-6 text-nowrap");
		} else if (i == 4) {
			elements[i].class("col-12 text-nowrap");
		} else {
			elements[i].class("col-10 form-control");
		}
	}
	saveBtn.mousePressed(() => {
		a = ai.value();
		b = bi.value();
		m1 = m1i.value();
		m2 = m2i.value();
		n1 = n1i.value();
		n2 = n2i.value();
		n3 = n3i.value();
		replay();
		setup();
	});
	replayBtn.mousePressed(replay);
	shapeBtn.changed(() => {
		if (shapeBtn.checked()) {
			shape = true;
		} else {
			shape = false;
		}
	});
	coords.changed(() => {
		if (coords.checked()) {
			coordinates = true;
		} else {
			coordinates = false;
		}
	});
	axisBtn.changed(() => {
		if (axisBtn.checked()) {
			axis = true;
		} else {
			axis = false;
		}
	});
	triangleBtn.changed(() => {
		if (triangleBtn.checked()) {
			triangle = true;
		} else {
			triangle = false;
		}
	});
	autoReplayBtn.changed(() => {
		if (autoReplayBtn.checked()) {
			autoReplay = true;
		} else {
			autoReplay = false;
		}
	});
}
