var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eaglel = Object.create(bird);
console.log("eaglel: ", eaglel);
console.log("eaglel.hasWings: ", eaglel.hasWings);
console.log("eaglel.canFly: ", eaglel.canFly);
console.log("eaglel.hasFeathers: ", eaglel.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
console.log("penguin1 has wings: ", penguin1.hasWings);
console.log("penguin1 can fly: ", penguin1.canFly);
console.log("penguin1 has feathers: ", penguin1.hasFeathers);
