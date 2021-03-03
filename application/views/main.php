<div class="row"></div>
<div class="row">
        <div class="col-2"></div>
        <div class="col">
            <div class="card">
                <div class="card-header text-white bg-primary mb-3">Psiko Test Name &amp; Email</div>
                <div class="card-body">
                    <p>
                        Selamat Datang!<br>
                        Perkenalkan, saya <strong>Awa Fauzia</strong>, mahasiswa Psikologi UIN Sunan Kalijaga. <br>
                        Saat ini, saya sedang melakukan studi pendahuluan (pilot experiment) mengenai kemampuan membaca mahasiswa semester akhir di Yogyakarta. <br>
                        Apabila Anda memenuhi kriteria berikut dan bersedia mengikuti eksperimen ini, silakan mengisi nama dan email. <br>
                        Setiap partisipan yang menyelesaikan eksperimen ini akan mendapatkan kompensasi.<br>
                        <ul>
                            <li>
                                Mahasiswa semua jurusan minimal semester 7 di Daerah Istimewa Yogyakarta
                            </li>
                            <li>
                                Telah mengambil mata kuliah Metodologi Penelitian
                            </li>
                            <li>
                                Bersedia mengerjakan secara sungguh-sungguh sesuai dengan petunjuk yang diberikan
                            </li>
                        </ul>
                    </p>
                    <form id="form-test" method="POST" action="main/explain">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="name" class="form-control" name="name" id="name" aria-describedby="nameHelp" required>
                            <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" required>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" class="btn btn-primary">&#8594; Next</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-2"></div>
    </div>
</div>
