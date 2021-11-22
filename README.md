# Daerah-indonesia

Package untuk daerah-daerah di Indonesia yang meliputi Provinsi, Kabupaten/Kota, Kecamatan, dan Kelurahan. 

## Instalasi

Dengan npm 
```zsh
npm i daerah-indonesia
```

## Pengunaan

Untuk menggunakan package daerah-indonesia, pertama import package terlebih dahulu:
```js
const daerah = require('daerah-indonesia');
```

Untuk menampilkan seluruh data mengenai daerah yang ada, data menggunakan build-in function tanpa parameter
```js
// function akan menampilkan array data daerah dengan format {id: number, nama: string}
const provinsi = daerah.getProvinsi()
const kabupaten = daerah.getKabupaten()
const kecamatan = daerah.getKecamatan()
const kelurahan = daerah.getKelurahan()
```

Untuk menampilkan data tertentu saja, dapat menggunakan parameter dalam functionnya. Katakanlah saya mengetahui bahwa id provinsi DKI Jakarta adalah 31, dan saya ingin menampilkan kabupaten/kota yang ada di DKI Jakarta maka saya dapat menuliskan:
```js
// 31 di parameter .getKabupaten menandakan id dari DKI Jakarta
const kotaDiJakarta = daerah.getKabupaten(31)
```

Apabila saya mengetahui id dari Kota Jakarta Selatan dan hanya ingin menampilkan data kota itu saja, maka saya dapat menggunakan
```js
// 3171 adalah id dari Kota Jakarta Selatan
const jakartaSelatan = daerah.getKabupaten(3171)
```

## Kontribusi

Ketentuan kontribusi masi dalam penyusunan, dipersilahkan untuk PR apa saja yang menurut anda layak

## Lisensi

[MIT](LICENSE)
