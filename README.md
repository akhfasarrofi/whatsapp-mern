<h1 align="center"> Whatsapp MERN 🔥 </h1>

<p align="center"> 
    <img src="images/banner.JPG" align="center"></img>
</p>

<p align="center">
  <a href="https://nodejs.org/en/blog/release/v12.13.0/"><img alt="NodeJS" src="https://img.shields.io/badge/node-12.14.1-important?style=flat-square" /></a>
  <a href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/npm/v/6.13.4"><img alt="NPM" src="https://img.shields.io/badge/npm-6.13.7-blueviolet?style=flat-square" /></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/express-js-lightgrey" /></a>
  <a href="https://pusher.com/"><img src="https://img.shields.io/badge/pusher-developer-ff69b4" /></a>
</p>

## Clone dan Gunakan 📋

- Clone ke sistem lokal Anda menggunakan perintah di bawah ini:

```python
    git clone https://github.com/akhfasarrofi/whatsapp-mern.git
    git clone https://github.com/akhfasarrofi/whatsapp-mern-backend.git
```

- Jalankan perintah berikut di direktori ```whatsapp-mern``` untuk menambahkan dependensi:
```python
    npm install
```

## Buat database di **[monggodb](https://docs.mongodb.com/manual/tutorial/getting-started/)**

<p align="center"> 
    <img src="images/mongo.JPG" align="center"></img>
</p>

- Setelah anda membuat akun di monggodb, anda akan melihat menu `Clusters` dan pilih `connect`

Copy koneksi dan jangan lupa ganti `<password>` dan `<dbname>` nya.

- Buka file `server.js` di folde `whatsapp-mern-backend`, anda akan menemukan code seperti dibawah ini:

```javascript
    /* DB Config */
const connection_url = "KONEKSI MONGGODB ANDA"
```
- Jalankan perintah `nodemon` untuk menjalankan servernya di folder `whatsapp-mern-backend` dan jalankan `npm start` di folede `whatsapp-mern`

