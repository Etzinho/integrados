const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: "public/images/",
  filename: function (req, file, cb) {
    let name = file.originalname.split(".");
    let extension = name[name.length-1];
    cb(null, file.fieldname + '-' + Date.now() + "." + extension);
  }
})

const upload = multer({ storage: storage })
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir('public/images/', (err, items) => {
    if (err) {
      console.error(err);
      return res.status(500).send({mensagem: "Serviço indisponivel no momento"});
    }
    const files = items.filter((item) => item !== "." && item !== "..");
    return res.send({files, path: "public/images/"});
  })
});

router.post('/upload', upload.single("image"), function(req, res, next) {
  if (req.file) {
    return res.send({ mensagem: "Arquivo salvo com sucesso!"});
  } else {
    return res.status(500).send({ mensagem: "Não foi possivel salvar o arquivo!" });
  }
});

module.exports = router;
