
const tabelBody = document.getElementById('tabelStokBody');
const formStok = document.getElementById('formStok');

function renderTable() {
  tabelBody.innerHTML = ''; 

  dataBahanAjar.forEach((item) => {
    tambahBarisKeTabel(item);
  });
}


function tambahBarisKeTabel(data) {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${data.kode}</td>
    <td>${data.nama}</td>
    <td>${data.stok}</td>
    <td>${data.harga}</td>
  `;

  tabelBody.appendChild(tr);
}


formStok.addEventListener('submit', function (event) {
  event.preventDefault(); 

 
  const baru = {
    kode: document.getElementById('inputKode').value.trim().toUpperCase(),
    nama: document.getElementById('inputNama').value.trim(),
    stok: parseInt(document.getElementById('inputStok').value),
    harga: document.getElementById('inputHarga').value.trim()
  };


  dataBahanAjar.push(baru);


  tambahBarisKeTabel(baru);


  formStok.reset();
});

document.addEventListener('DOMContentLoaded', renderTable);