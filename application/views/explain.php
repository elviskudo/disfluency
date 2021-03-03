    <div class="row"></div>
    <div class="row">
        <div class="col-2"></div>
        <div class="col">
            <div class="card">
                <div class="card-header text-white bg-primary mb-3">Hi "<?php echo $model->name ?>", berikut lembar persetujuan</div>
                <div class="card-body">
                    <form id="form-explain" method="POST" action="<?php echo base_url() ?>card/choose">
                        <div class="mb-3">
                            <p>
                                Saya menyatakan setuju dan bersedia untuk terlibat dan berpartisipasi secara aktif dalam eksperimen yang dilakukan secara daring ini dengan sadar dan tanpa paksaan. Dalam mengikuti eksperimen ini, saya menerima dan bersedia untuk:
                            </p>
                            <ul>
                                <li>
                                    Terlibat secara aktif selama proses eksperimen berlangsung sesuai dengan petunjuk yang diberikan;
                                </li>
                                <li>
                                    Tidak melakukan kegiatan lain ketika mengikuti eksperimen ini;
                                </li>
                                <li>
                                    Memberikan informasi yang sebenar-benarnya, berkaitan dengan identitas diri maupun pertanyaan mengenai proses kognitif yang terjadi pada diri saya; dan
                                </li>
                                <li>
                                    Menyetujui perahasiaan identitas diri saya dan segala informasi yang saya sampaikan
                                </li>
                            </ul>
                            <p>
                                Dengan mencentang surat perjanjian ini, saya bersedia untuk mengikuti eksperimen dari awal hingga selesai, serta menerima segala hal yang terkait dengan pelaksanaan eksperimen ini.
                            </p>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" name="aggrement" id="aggreement" required>
                            <label class="form-check-label" for="aggreement">Aggreement</label>
                        </div>
                        <button type="submit" class="btn btn-primary">&#8594; Next</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-2"></div>
    </div>
</div>
