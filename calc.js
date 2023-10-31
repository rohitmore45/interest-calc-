function getAmount() {
  let p, r, t, si, total; //local variables

  //data collecting from input elements
  p = pamt.value;
  r = roi.value;
  t = time.value;

  // calculations
  si = (p * r * t) / 100;
  total = +p + si;

  //displaying values in the browser
  interest.value = "Interest Amount: " + si.toFixed(2) + " ₹";
  totalamt.value = "Total Amount: " + total.toFixed(2) + ` ₹`;
}

function clearScreen() {
  pamt.value = "";
  roi.value = "";
  time.value = "";
  interest.value = "";
  totalamt.value = "";
}
