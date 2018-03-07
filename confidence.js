function rank (ups,downs)
{
  this.ups=0;
  this.downs=0;
  this.getrank = function(){
    var n = this.ups + this.downs;
  	if(n === 0) {
  		return 0;
  	}
  	var z = 1.281551565545;
  	var p = parseFloat(this.ups) / n;
  	var left = p + 1 / (2 * n) * z * z;
  	var right = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n));
  	var under = 1 + 1 / n * z * z;

  	return (left - right) / under;
  };
  this.upvote = function()
  {
    this.ups= ++ups;
  };
  this.downvote= function()
  {
    this.downs=++downs;
  };
}
ups=0;
downs=0;
var q1 = new rank(ups,downs);
function q1show()
{
  document.getElementById("demo1").innerHTML = "q1 up votes:"+q1.ups;
  document.getElementById("demo2").innerHTML = "q1 down votes:"+q1.downs;
  document.getElementById("demo3").innerHTML = "hotness q1:"+q1.getrank();
}
function q1up()
{
  q1.upvote();
  q1show();
}

function q1down()
{
  q1.downvote();
  q1show();
}



var q2 = new rank(ups,downs);
function q2show()
{
  document.getElementById("demo4").innerHTML = "q2 up votes:"+q2.ups;
  document.getElementById("demo5").innerHTML = "q2 down votes:"+q2.downs;
  document.getElementById("demo6").innerHTML = "hotness q2:"+q2.getrank();
}
function q2up()
{
  q2.upvote();
  q2show();
}
function q2down()
{
  q2.downvote();
  q2show();
}
