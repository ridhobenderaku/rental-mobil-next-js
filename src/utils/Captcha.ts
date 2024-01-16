export function GenerateCaptcha(captchaElement: HTMLDivElement) {
  var alpha = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  );
  var i;
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  for (i = 0; i < 6; i++) {
    a = alpha[Math.floor(Math.random() * alpha.length)];
    b = alpha[Math.floor(Math.random() * alpha.length)];
    c = alpha[Math.floor(Math.random() * alpha.length)];
    d = alpha[Math.floor(Math.random() * alpha.length)];
    e = alpha[Math.floor(Math.random() * alpha.length)];
    f = alpha[Math.floor(Math.random() * alpha.length)];
    g = alpha[Math.floor(Math.random() * alpha.length)];
  }
  var code =
    a + " " + b + " " + " " + c + " " + d + " " + e + " " + f + " " + g;
  captchaElement.innerHTML = code;
}

function removeSpaces(string: string) {
  return string.split(" ").join("");
}

export function ValidCaptcha(
  captchaElement: HTMLDivElement,
  inputElement: HTMLInputElement
) {
  var string1 = removeSpaces(captchaElement.innerHTML);
  var string2 = removeSpaces(inputElement.value);
  if (string1 == string2) {
    return true;
  } else {
    return false;
  }
}
