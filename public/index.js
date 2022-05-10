const ball = document.querySelector("#ball");

let x = 0;
let y = 0;

const data = {
  x: 0,
  y: 0,
};

if (x !== data.x || y !== data.y) {
  ball.style.left = data.x + "px";
  ball.style.top = data.y + "px";
}

const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
};

ball.onmousedown = (e) => {
  const coords = getCoords(ball);
  const shiftX = e.pageX - coords.left;
  const shiftY = e.pageY - coords.top;

  const moveAt = (e) => {
    ball.style.left = e.pageX - shiftX + "px";
    ball.style.top = e.pageY - shiftY + "px";
  };

  document.onmousemove = (e) => {
    moveAt(e);
  };

  ball.onmouseup = function () {
    console.log(e.x, e.y);
    console.log("current ===>", " x =", x, "y =", y);
    console.log("data ===>", "x = ", x, "y = ", y);

    document.onmousemove = null;
    ball.onmouseup = null;
  };

  ball.ondragstart = function () {
    return false;
  };
};
