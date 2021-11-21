const { provinsi } = require("..");
const Daerah = require("../lib/index");

function Provinsi(provinsi_id) {
  this.provinsi_id = provinsi_id;
  this.kabupaten = () => {
    const object = new Daerah().getProvinsi(this.provinsi_id);
    const kabupatenList = new Daerah().getKabupaten(this.provinsi_id);
    return { ...object, kabupaten: kabupatenList };
  };
}

module.exports = Provinsi;
