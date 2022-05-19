//===================Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n < 10000===================//
function result() {
  var i = 1;
  var total = 0;
  while (total < 10000) {
    i++;
    total += i;
  }
  document.getElementById("ketQua1").style.display = "block";
  document.getElementById(
    "spanKetQua1"
  ).innerHTML = `Số nguyên dương nhỏ nhất: ${i}`;
}
result();

//===================Bài 2: Tính tổng===================//
function calculateTotal() {
  var getX = +document.getElementById("getX").value;
  var getN = +document.getElementById("getN").value;
  var totalS = 0;
  for (var i = 1; i <= getN; i++) {
    totalS += getX ** i;
  }
  document.getElementById("ketQua2").style.display = "block";
  document.getElementById("spanKetQua2").innerHTML = `Tổng: ${totalS}`;
}

//===================Bài 2: Tính tổng===================//

//===================Bài 3: Tính giai thừa===================//
function calculate() {
  var getNumber = +document.getElementById("getNumber").value;
  var total = 1;
  for (var i = 1; i <= getNumber; i++) {
    total *= i;
  }
  document.getElementById("ketQua3").style.display = "block";
  document.getElementById("spanKetQua3").innerHTML = `Giai thừa: ${total}`;
}
//===================Bài 3: Tính giai thừa===================//

//===================Bài 4: Tạo thẻ div===================//
function createDiv() {
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      var divChan = document.createElement("div");
      divChan.innerHTML = `Div chẵn ${i}`;
      divChan.style.backgroundColor = "red";
      divChan.style.color = "white";
      divChan.style.padding = "12px";
      document.getElementById("spanKetQua4").appendChild(divChan);
    } else {
      var divLe = document.createElement("div");
      divLe.innerHTML = `Div lẻ ${i}`;
      divLe.style.backgroundColor = "blue";
      divLe.style.color = "white";
      divLe.style.padding = "12px";
      document.getElementById("spanKetQua4").appendChild(divLe);
    }
  }
}

//===================Bài 4: Tạo thẻ div===================//
