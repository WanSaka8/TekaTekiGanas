export const questions = [
  {
    type: 'riddle',
    text: 'Aku selalu di depanmu tetapi tidak pernah terlihat. Apakah aku?',
    answer: 'Masa depan',
    hint: 'Berkaitan dengan waktu'
  },
  {
    type: 'multiple-choice',
    text: 'Seorang pria melihat foto seseorang dan berkata, "Saudara laki-laki dan perempuan aku tidak memiliki saudara laki-laki. Siapakah orang dalam foto itu?"',
    options: ['Ayahnya', 'Anaknya', 'Sepupunya', 'Diri sendiri'],
    answer: 'Anaknya',
    explanation: 'Orang tersebut berbicara tentang anaknya, karena dia tidak punya saudara laki-laki berarti dia anak tunggal, sehingga anaknya juga tidak punya paman dari pihak ayah'
  },
  {
    type: 'riddle',
    text: 'Aku punya kota tapi tidak ada bangunan, punya hutan tapi tidak ada pohon, punya sungai tapi tidak ada air. Apakah aku?',
    answer: 'Peta',
    hint: 'Berkaitan dengan geografi'
  },
  {
    type: 'multiple-choice',
    text: 'Jika 1=3, 2=3, 3=5, 4=4, 5=4, maka 6=?',
    options: ['3', '5', '6', '4'],
    answer: '3',
    explanation: 'Ini adalah jumlah huruf dalam kata angka tersebut (satu=3 huruf, dua=3 huruf, tiga=4 huruf, dst)'
  },
  {
    type: 'riddle',
    text: 'Aku bisa berjalan tanpa kaki, menangis tanpa mata. Apakah aku?',
    answer: 'Awan',
    hint: 'Berkaitan dengan cuaca'
  },
  {
    type: 'multiple-choice',
    text: 'Apa yang selalu datang tetapi tidak pernah tiba?',
    options: ['Besok', 'Kereta', 'Mimpi', 'Angin'],
    answer: 'Besok',
    explanation: 'Ketika besok tiba, itu sudah menjadi hari ini'
  },
  {
    type: 'riddle',
    text: 'Semakin banyak kamu mengambil, semakin banyak kamu meninggalkan. Apakah aku?',
    answer: 'Langkah',
    hint: 'Berkaitan dengan perjalanan'
  },
  {
    type: 'multiple-choice',
    text: 'Sebuah keluarga memiliki dua anak kembar yang lahir pada hari yang sama di tahun yang sama, tetapi mereka bukan saudara kembar. Bagaimana mungkin?',
    options: ['Anak angkat', 'Kembar tiga', 'Anak dari pernikahan berbeda', 'Anak dari ibu yang sama'],
    answer: 'Kembar tiga',
    explanation: 'Mereka adalah bagian dari kembar tiga (atau lebih)'
  },
  {
    type: 'riddle',
    text: 'Aku bukan sayap tapi bisa terbang, bukan sungai tapi bisa mengalir, bukan matahari tapi bisa bersinar. Apakah aku?',
    answer: 'Waktu',
    hint: 'Berkaitan dengan konsep abstrak'
  },
  {
    type: 'multiple-choice',
    text: 'Apa yang bisa menembus kaca tanpa memecahkannya?',
    options: ['Sinar matahari', 'Air', 'Suara', 'Cahaya'],
    answer: 'Cahaya',
    explanation: 'Cahaya bisa menembus kaca tanpa merusaknya'
  },
  {
    type: 'riddle',
    text: 'Aku punya gigi tapi tidak bisa makan. Apakah aku?',
    answer: 'Gergaji',
    hint: 'Alat perkakas'
  },
  {
    type: 'multiple-choice',
    text: 'Jika di Jakarta pukul 12 siang, di London pukul 5 pagi, di mana matahari tepat di atas kepala?',
    options: ['Jakarta', 'London', 'Antara Jakarta-London', 'Tidak ada yang benar'],
    answer: 'Tidak ada yang benar',
    explanation: 'Matahari tidak pernah tepat di atas kepala di London atau Jakarta karena kedua kota berada di luar zona tropis'
  },
  {
    type: 'riddle',
    text: 'Bisa mengisi ruangan tetapi tidak memakan tempat. Apakah aku?',
    answer: 'Cahaya',
    hint: 'Fenomena fisika'
  },
  {
    type: 'multiple-choice',
    text: 'Apa yang bisa kamu pegang tanpa menyentuhnya?',
    options: ['Napas', 'Pikiran', 'Pembicaraan', 'Bayangan'],
    answer: 'Napas',
    explanation: 'Kamu bisa menahan napas tanpa benar-benar memegangnya'
  },
  {
    type: 'riddle',
    text: 'Dibawa ke tempat gelap agar bisa bersinar. Apakah aku?',
    answer: 'Korek api',
    hint: 'Benda kecil yang menghasilkan api'
  },
  {
    type: 'multiple-choice',
    text: 'Jika semua Ane adalah Bune dan semua Bune adalah Cane, maka:',
    options: [
      'Semua Ane pasti Cane',
      'Semua Cane pasti Ane',
      'Beberapa Cane bukan Bune',
      'Beberapa Ane bukan Cane'
    ],
    answer: 'Semua Ane pasti Cane',
    explanation: 'Ini adalah logika silogisme dasar'
  },
  {
    type: 'riddle',
    text: 'Bisa membuat orang hidup, membuat orang mati, selalu berubah bentuk tetapi tidak pernah bergerak. Apakah aku?',
    answer: 'Waktu',
    hint: 'Konsep abstrak yang mengatur kehidupan'
  },
  {
    type: 'multiple-choice',
    text: 'Apa yang memiliki 13 hati tetapi tidak memiliki organ tubuh lainnya?',
    options: ['Deck kartu', 'Manusia robot', 'Alien', 'Tas'],
    answer: 'Deck kartu',
    explanation: 'Mengacu pada 13 hati dalam satu set kartu remi'
  },
  {
    type: 'riddle',
    text: 'Dibutuhkan oleh yang hidup, diberikan oleh yang mati. Apakah aku?',
    answer: 'Nasihat',
    hint: 'Berkaitan dengan pengetahuan'
  },
  {
    type: 'multiple-choice',
    text: 'Jika kamu melempar batu biru ke Laut Merah, apa yang akan terjadi?',
    options: [
      'Batu akan tenggelam',
      'Batu akan berubah warna',
      'Laut akan berubah warna',
      'Tidak ada yang terjadi'
    ],
    answer: 'Batu akan tenggelam',
    explanation: 'Fisika dasar - batu akan tenggelam terlepas dari warnanya'
  }
];