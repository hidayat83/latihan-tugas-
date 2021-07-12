const express = require('express');

const app = express();
const port = 3000 ;

const Sekolah = [
  {
    Jabatan : "Guru",
    Guru_id: 1,
    First_Name: "sinung",
    Last_Name: "hidayat",
    Guru_kelas :6
  },
  {
    Jabatan:"Guru",
    Guru_id: "2",
    First_Name :"Ibnu",
    Last_Name: "Fitra",
    Guru_kelas :5
  },
  {
    Jabatan:"Guru",
    Guru_id: 3,
    First_Name :"Ahmad",
    Last_Name: "Ridwan",
    Guru_kelas  :4
  },
  {
    Jabatan:"Murid",
    Murid_id: 1,
    First_Name :"fano",
    Last_Name: "Hidayat",
    Murid_kelas : 6
  },
  {
    Jabatan:"Murid" , 
    Murid_id: 2,
    First_Name :"fino",
    Last_Name: "fitra",
    Murid_kelas : 5
  },
  {
    Jabatan:"Murid"  ,
    Murid_id: 3,
    First_Name :"faldo",
    Last_Name: "Ridwan",
    Murid_kelas : 4
  }
]


app.get('/Sekolah', (req, res) => {
  res.json(Sekolah)
})


app.get('/Sekolah/filter/:Jabatan', (req, res) => {
    const jabatan = req.params.Jabatan;
    const productDetail = Sekolah.filter((item) => {
      return item.Jabatan === jabatan
    });
    res.json(productDetail);
  })

app.listen(port, () => console.log(`App sudah berjalan di port ${port}`));
 