var java = require("java");
var path = require("path");
var jarPath = path.join(process.cwd(), './lib/ssuio.jar');
java.classpath.push(jarPath);
console.log('start');
var p1 = getPerson('Mike', 9);
console.log(p1.fullName('Chou'));
console.log(p1.growth(2));

function getPerson(name, age) {
    var instance = java.newInstanceSync('com.ssuio.Person', name, age);
    return {
        fullName: (lastName) => { return java.callMethodSync(instance, 'fullName', lastName) },
        growth: (num) => { return java.callMethodSync(instance, 'growth', num) }
    };
}