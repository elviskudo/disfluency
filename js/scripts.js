'use strict'

$('#form-test').on('submit', function () {
    const name = $(this).find('#name').val()
    const email = $(this).find('#email').val()

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)

    window.location.replace($(this).attr('action'))
})

function timer () {
    const limitedTime = 315
    const limitPer = Math.round(limitedTime / 10)
    
    let arrLimit = []
    let i = 0
    while (i < limitedTime) {
        arrLimit.push(i)
        i += limitPer
    }

    clearInterval()
    localStorage.setItem('stop', 0)

    let inc = 0
    let idx = 0
    let popupShow = false
    setInterval(function () {
        if (inc == arrLimit[idx]) {
            // popup show up
            if (idx > 0 && idx < (arrLimit.length - 1)) {
                if (popupShow == false) {
                    popupShow = true
                    $('.modal').show('fade')
                    $('.modal').find('.close, .yes-a, .no-a, .yes-b, .no-b').on('click', function (e) {
                        e.preventDefault()

                        popupShow = false

                        $('.modal').hide()
                    })
                }
            }

            idx++
        }

        inc++

        if (inc > limitedTime) {
            localStorage.setItem('stop', inc)
            clearInterval()
        } else {
            $('#timer').html(inc)
            localStorage.setItem('stop', inc)
        }
    }, 1000)
}

const arrText = [
    'Nose Breather adalah makhluk yang menghabiskan sepertiga dari kehidupan mereka yang pendek untuk tidur.',
    'Mereka naik ke atas ranjang mereka yang nyaman, menutup mata sipit mereka, dan tidak melakukan apapun—setiap hari selama hidup mereka! Eh, sebetulnya setiap malam, tapi pokoknya begitu.',
    'Nose Breather yang masih muda bahkan tidur lebih lama!',
    'Dan, ketika mereka tidur, terkadang mereka membuat suara seperti seseorang yang meneguk air, yang terdengar seperti bahasa Fuath, ZZZyAYYZZ.',
    'Dan tahukah kamu makhluk apa yang paling sedikit tidur dibandingkan dengan makhluk lainnya? Mahasiswa yang harus mengikuti ujian keesokan harinya.',
    'Mereka begadang semalaman dan sama sekali tidak tidur.',
    'Alasan mereka begadang adalah agar mereka dapat belajar dan mendapatkan nilai yang bagus untuk ujian mereka.',
    'Pada akhirnya, Fuath tidak paham (dan tidak peduli!) mengenai urusan per-tidur-an ini.',
    'Tapi coba tebak apa? Sebuah penelitian menguji kebiasaan tidur 111 mahasiswa untuk mengetahui apakah ada hubungan antara kebiasaan tidur dengan nilai ujian para mahasiswa ini.',
    'Hasilnya, mahasiswa yang begadang dan belajar semalaman sebelum ujian cenderung memiliki nilai yang lebih rendah dibandingkan mahasiswa yang memiliki lebih banyak jadwal tidur yang normal.',
    'Rasa-rasanya, bagi makhluk bernama mahasiswa, kesimpulan dari penelitian ini adalah begadang semalaman membuat nilai ujian mereka buruk.',
    'Menurutmu bagaimana?',
    'Meski kedengarannya seperti kesimpulan dari penelitian tersebut adalah “begadang semalaman membuat makhluk bernama mahasiswa mendapatkan nilai ujian yang buruk,” faktanya, kesimpulan ini salah.',
    'Di mana letak kesalahannya?',
    'Coba pikirkan mengenai hubungan sebab-akibat.',
    'Jika seorang peneliti ingin mengatakan bahwa begadang menyebabkan mahasiswa mendapatkan nilai yang buruk, peneliti harus membuat mahasiswa berada dalam berbagai kondisi tidur yang berbeda secara acak (sebagai variabel bebas), kemudian melihat apakah rata-rata mahasiswa yang lebih sedikit tidur memiliki nilai yang rendah.',
    'Tapi dalam penelitian di atas, bukan itu yang dilakukan oleh peneliti; desain penelitiannya adalah penelitian korelasional.',
    'Artinya, kesimpulan dari penelitian tersebut adalah bahwa ada hubungan antara begadang dengan nilai yang buruk.',
    'Tetapi, kita tidak bisa mengatakan bahwa begadang menyebabkan nilai yang buruk.',
    'Penelitian korelasional hanya dapat mengarah pada kesimpulan tentang hubungan antar variabel yang diteliti.',
    'Penelitian korelasional tidak bisa memberitahukan kepada kita apakah ada hubungan sebab-akibat antar variabel, atau jika memang ada hubungan sebab-akibat, penelitian korelasional tidak bisa memberi tahu kita apa yang menyebabkan apa.',
    'Contohnya, bisa saja tidur memberi waktu bagi otak dari makhluk bernama mahasiswa ini untuk menyimpan informasi mengenai apa yang dipelajari, sehingga mahasiswa yang begadang tidak dapat menyimpan informasi sebanyak mereka yang tidur cukup.',
    'Akhirnya, mahasiswa yang begadang memiliki nilai yang buruk.',
    'Bagaimanapun, ada kemungkinan lain bahwa mahasiswa yang memiliki nilai buruk khawatir mengenai nilai ujian mereka, dan kekhawatiran itu yang menyebabkan mereka kesulitan tidur.',
    'Atau bisa juga, ada variabel ekstranous, variabel ketiga yang tidak kita ketahui, yang menyebabkan nilai mahasiswa buruk atau menyebabkan mahasiswa lebih sedikit tidur.',
    'Mungkin beberapa mahasiswa yang ngerumpi dan ngopi sampai larut cenderung memiliki waktu tidur yang lebih sedikit dan nilai buruk karena tidak cukup tidur atau tidak belajar.',
    'Ketika partisipan tidak diposisikan pada beberapa kelompok berbeda secara acak, kita tidak bisa mengetahui apa yang menyebabkan apa.',
    'Kita hanya dapat mengetahui bahwa begadang memiliki hubungan dengan nilai yang buruk.',
    'Pada contoh ini, jika melihat desain penelitian yang dilakukan, kesimpulan bahwa begadang menyebabkan siswa mendapatkan nilai yang buruk adalah tidak tepat.',
    'Penelitian mengenai kebiasaan tidur ini adalah contoh yang bagus dari hasil penelitian yang jika diinterpretasi dengan benar, akan sangat informatif.',
    'Meski kita tidak yakin apakah begadang dan kurang tidur menyebabkan nilai menjadi buruk bagi mahasiswa, tetapi kita tahu ada hubungan antara kebiasaan tidur dan nilai ujian, dan itu penting.',
    'Coba kita lihat contoh penelitian lain yang dapat diklaim sebagai hubungan sebab-akibat yang seharusnya kita hindari.',
    'Apakah kalian pernah berandai-andai bahwa orang-orang yang cakep lebih bahagia dibanding mereka yang biasa saja atau bahkan bisa dibilang burik? Coba pikirkan pertanyaan ini dari sudut pandang Nose Breather.',
    'Siapa yang akan mereka anggap menarik? Misalkan saat ini kita menemukan sekumpulan orang yang menjadi model pakaian atau aksesoris di majalah.',
    'Mereka seharusnya masuk kategori cakep.',
    'Kita minta mereka mengisi kuesioner tentang kebahagiaan.',
    'Kemudian kita mencari kelompok orang yang tampangnya rata-rata atau di bawah rata-rata, lalu minta mereka untuk mengisi kuesioner kebahagiaan yang sama.',
    'Sekarang, jika hasilnya menunjukkan bahwa model-model yang cakep terbukti lebih bahagia berdasarkan skala kebahagiaan yang kita gunakan, bukankah kita bisa mengatakan bahwa tampang cakep memang bikin bahagia?',
    'Jawabannya tidak.',
    'Pada contoh ini, kita mengambil kelompok orang yang sudah ada, bukan menempatkan mereka dalam beberapa kelompok secara acak.',
    'Lagipula, kita tidak akan mengelompokkan mereka yang cakep dari lahir dalam “kelompok buruk rupa” dan sebaliknya—setidaknya tanpa melakukan operasi plastik.',
    'Jadi, kita tidak bisa menyimpulkan bahwa tampang cakep bisa bikin bahagia.',
    'Mungkin saja berbahagia membuat seseorang menjadi lebih menarik atau ada variabel ketiga yang tidak kita ketahui yang menyebabkan seseorang menjadi bahagia dan lebih menarik, atau tidak bahagia dan tidak menarik.',
    'Bisa jadi kekayaan memiliki pengaruh besar terhadap keduanya.',
    'Salah satu kesalahpahaman yang paling umum adalah bahwa penelitian yang melibatkan kelompok yang sudah ada (misal laki-laki dan perempuan, menarik dan tidak menarik) harus selalu korelasional.',
    'Padahal tidak begitu.',
    'Ketika kita melakukan penelitian menggunakan kelompok yang sudah ada, kita menyebutnya sebagai desain kuasi-eksperimental.',
    'Penelitian kuasi-eksperimen sebetulnya mirip dengan eksperimen biasa, karena kita membandingkan beberapa kelompok yang berbeda.',
    'Tetapi, kuasi-eksperimen bukan eksperimen sungguhan, karena kita tidak menempatkan partisipan dalam kelompok secara acak, sehingga kita tidak dapat menyimpulkan bahwa perubahan pada satu variabel (menarik vs tidak menarik) menyebabkan perubahan pada variabel lain (bahagia vs tidak bahagia).',
    'Jadi, sebagai contoh, penelitian di bidang medis bisa melakukan penelitian kuasi-eksperimen untuk menguji efektivitas suatu obat jerawat dengan membandingkan dosisnya (kelompok kontrol, kelompok yang menggunakan obat sekali sehari, kelompok yang menggunakan obat sehari dua kali) pada partisipan laki-laki dan perempuan.', 
    'Peneliti mungkin menemukan perbedaan efektivitas obat pada laki-laki dan perempuan, tetapi tidak bisa memasukkan jenis kelamin sebagai variabel yang menyebabkan perbedaan.', 
    'Klaim hubungan sebab-akibat tidak tepat untuk dilakukan pada penelitian kuasi eksperimen karena kelompok partisipan tidak acak.', 
    'Meski begitu, hasil dari penelitian kuasi-eksperimen dapat sangat relevan dan informatif.',
    'Penting untuk mampu mengidentifikasi kapan hubungan sebab-akibat dalam suatu penelitian dapat digunakan.',
    'Termasuk juga kapan klaim tersebut dianggap cukup kuat, dan kapan klaim hubungan sebab-akibat tadi tidak tepat.'
]

let index = 0
$('.card-c').find('p').html(arrText[0])
$('.card-d').find('p').html(arrText[0])

function nextC (obj, index) {
    $('.card-' + obj).find('p').html(arrText[index])
    index++

    if (index < arrText.length)
        $('#next-c').data('id', index)
    else
        window.location.replace('../link.html')
}

$('#next-c').on('click', function (e) {
    e.preventDefault()

    nextC('c', $(this).data('id'))
})

function nextD (obj, index) {
    $('.card-' + obj).find('p').html(arrText[index])
    index++
    
    if (index < arrText.length)
        $('#next-d').data('id', index)
    else
        window.location.replace('../link.html')
}

$('#next-d').on('click', function (e) {
    e.preventDefault()

    nextD('d', $(this).data('id'))
})

// function randomQuestion (obj) {
//     $('.card-' + obj).find('p').html(arrText[0])

//     const limitedTime = 315
//     const limitPer = Math.round(limitedTime / 10)
    
//     let arrLimit = []
//     let i = 0
//     while (i < limitedTime) {
//         arrLimit.push(i)
//         i += limitPer
//     }

//     clearInterval()
//     localStorage.setItem('stop', 0)

//     let inc = 0
//     let idx = 0
//     let popupShow = false
//     setInterval(function () {
//         if (inc == arrLimit[idx]) {
//             // popup show up
//             if (idx > 0 && idx < (arrLimit.length - 1)) {
//                 if (popupShow == false) {
//                     popupShow = true
//                     $('.modal').show('fade')
//                     $('.modal').find('.close, .no-' + obj).on('click', function (e) {
//                         e.preventDefault()

//                         popupShow = false

//                         $('.modal').hide()
//                     })

//                     $('.modal').find('.yes-' + obj).on('click', function (e) {
//                         e.preventDefault()

//                         $('.card-' + obj).find('p').html(arrText[Math.floor(Math.random() * arrText.length)])

//                         popupShow = false

//                         $('.modal').hide()
//                     })
//                 }
//             }

//             idx++
//         }

//         inc++

//         if (inc > limitedTime) {
//             localStorage.setItem('stop', inc)
//             clearInterval()
//         } else {
//             $('#timer').html(inc)
//             localStorage.setItem('stop', inc)
//         }
//     }, 1000)
// }

$('.form-cards').on('submit', function () {
    clearInterval()
})

if (localStorage.getItem('stop') !== undefined) {
    $('#timer-stop').html(localStorage.getItem('stop'))
}