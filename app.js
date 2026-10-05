// Mengambil elemen DOM
const tabelBody = document.getElementById('tabelStokBody');
const formStok = document.getElementById('formStok');

// Fungsi untuk menampilkan seluruh data ke tabel
function renderTable() {
  tabelBody.innerHTML = ''; // Bersihkan tabel terlebih dahulu

  dataBahanAjar.forEach((item) => {
    tambahBarisKeTabel(item);
  });
}

// Fungsi DOM untuk membuat baris <tr> baru secara dinamis
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

// Event Handler saat Form Tambah Stok di-submit
formStok.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input form
  const baru = {
    kode: document.getElementById('inputKode').value.trim().toUpperCase(),
    nama: document.getElementById('inputNama').value.trim(),
    stok: parseInt(document.getElementById('inputStok').value),
    harga: document.getElementById('inputHarga').value.trim()
  };

  // 1. Tambahkan data ke array konstanta dataBahanAjar
  dataBahanAjar.push(baru);

  // 2. Tambahkan baris secara dinamis ke DOM tabel
  tambahBarisKeTabel(baru);

  // 3. Reset form input
  formStok.reset();
});

// Jalankan fungsi render awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderTable);