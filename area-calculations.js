function calculateRectangleArea(length, width) {

  let areaOfRect = length * width;

  if (areaOfRect > 0) {

    return areaOfRect;
  }
}
function calculateTriangleArea(base, height) {

  let areaOfTriangle = (base * height) / 2;

  if (areaOfTriangle > 0) {
    return areaOfTriangle;
  }
}

function calculateCircleArea(radius) {
  let areaOfCircle = Math.PI * (radius * radius);

  if (radius > 0) {
    return areaOfCircle;
  }
}

console.log(calculateCircleArea(10)); // should print undefined