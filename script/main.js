document.getElementById('pendaftaranForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari setiap input
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const peminatan = document.getElementById('peminatan').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    // Tampilkan nilai-nilai menggunakan SweetAlert
    Swal.fire({
        title: 'Konfirmasi Pendaftaran',
        html: `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Umur:</strong> ${umur}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
            <p><strong>Peminatan:</strong> ${peminatan}</p>
            <p><strong>Setuju dengan syarat dan ketentuan:</strong> ${agreeTerms ? 'Ya' : 'Tidak'}</p>
        `,
        icon: 'info'
    });
});
