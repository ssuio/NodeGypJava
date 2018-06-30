var java = require("java");
var path = require("path");
var fs = require("fs");

var content = fs.readFileSync(path.resolve(__dirname, './lib/ssuio.jar')).toString();
fs.writeFileSync('ssuio.jar', content);
java.classpath.push('ssuio.jar');

var charArray = java.newArray("char", "hello world\n".split(''));
console.log(charArray);

java.newInstance("com.ssuio.Person",'Mike', 9, function(err, p1) {
    if(err) { console.error(err); return; }
    console.log(p1);
});