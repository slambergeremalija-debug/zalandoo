function addToCart() {
  alert("Izdelek je dodan v košarico! (Ni res, to je učna stran.)");
}

function fakeCheckout(event) {
  event.preventDefault();
  alert("Napaka: plačila trenutno ni mogoče izvesti.");
  window.location.href = "order-error.html";
}

function fakeLogin(event) {
  if (event.preventDefault) event.preventDefault();
  alert("Prijava ni uspela. Strežnik trenutno ni dosegljiv.");
}
