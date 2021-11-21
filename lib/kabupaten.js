const Daerah = require("../lib/index");

function Kabupaten(kabupaten_id) {
  this.kabupaten_id = kabupaten_id;
  this.kecamatan = () => {
    const kecamatan = new Daerah().getKabupaten(this.kabupaten_id);
    const kecamatanList = new Daerah().getKecamatan(this.kabupaten_id);
    return { ...kecamatan, kecamatan: kecamatanList };
  };
}

module.exports = Kabupaten;
