// animation for promise
function showCircle(cx, cy, radius, callback) {

}

showCircle(150, 150, 100).then(div => {
  div.classLis.add('message-ball');
  div.append("Hello, world!");
});