const provinsiList = require("../data/provinsi.json");
const kabupatenList = require("../data/kabupaten.json");
const kecamatanList = require("../data/kecamatan.json");
const kelurahanList = require("../data/kelurahan.json");

/**
 * @namespace daerah
 */
class Daerah {
  constructor() {}
  /**
   * Dapetin semua provinsi yang ada di Indonesia. Jika parameter dikosongkan, maka akan mencari semua provinsi yang ada
   *
   * ### Contoh:
   *
   *      const daerah = require('daerah-indonesia');
   *
   *      // Dapetin semua provinsi di Indonesia
   *      const semuaProvinsi = daerah.getProvinsi();
   *
   *      // Dapetin data provinsi Jakarta berdasarkan id provinsi Jakarta (31)
   *      const jakarta = daerah.getProvinsi(31);
   *
   * @method daerah.getProvinsi
   * @api public
   * @param {Number | String} [id] Cari berdasarkan id provinsinya (opsional)
   * @return {Object} API return object dengan properties {id: `Number`, nama: `String`}
   */
  getProvinsi(id) {
    const options = id ? id.toString() : undefined;
    if (typeof options === "undefined") {
      return provinsiList;
    }

    return provinsiList.find((value, index) => value.id === parseInt(id));
  }
  /**
   * Dapetin data kabupaten/kota yang ada di Indonesia. Jika parameter dikosongkan, maka akan mencari semua kabupaten/kota yang tersedia.
   *
   * ### Contoh:
   *
   *      const daerah = require('daerah-indonesia');
   *
   *      // Dapetin semua provinsi/kota di Indonesia
   *      const semuaKabupaten = daerah.getKabupaten();
   *
   *      // Dapetin kabupaten/kota di Jakarta berdasarkan id provinsinya (31)
   *      const kotaDiJakarta = daerah.getKabupaten(31);
   *
   *      // Dapetin data Kota Jakarta Selatan berdsarkan id kabupaten/kotanya (3171)
   *      const jakartaSelatan = daerah.getKabupaten(3171);
   *
   * @method daerah.getKabupaten
   * @param {Number | String} [id] (opsional) Cari berdasarkan id daerah yang diingingkan. Jika id 2 digit, maka akan mencari semua kabupaten/kota berdasarkan provinsinya, sedangkan jika id 4 digit, maka akan mencari data singular kabupaten/kota yang sesuai dengan id tersebut.
   * @api public
   */
  getKabupaten(id) {
    const options = id ? id.toString() : undefined;

    // Andaikata id tidak disertakan, maka akan menampilkan semua kabupaten yang ada
    if (typeof options === "undefined") {
      return kabupatenList;
    }

    // Cari 1 kabupaten aja
    if (options.length === 4) {
      return kabupatenList.find((value, index) =>
        value.id.toString().startsWith(options)
      );
    }

    // filter kabupaten berdasarkan id provinsinya
    return kabupatenList.filter((value, index) =>
      value.id.toString().startsWith(options)
    );
  }
  /**
   * Dapetin data kecamatan yang ada di Indonesia. Jika parameter dikosongkan, maka akan mencari semua kecamatan yang tersedia.
   *
   * ### Contoh:
   *
   *      const daerah = require('daerah-indonesia');
   *
   *      // Dapetin semua kecamatan di Indonesia
   *      const semuaKecamatan = daerah.getKecamatan();
   *
   *      // Dapetin kecamatan di Jakarta berdasarkan id provinsinya (31)
   *      const kecamatanDiJakarta = daerah.getKecamatan(31);
   *
   *      // Dapetin data kecamatan di Kota Jakarta Selatan berdsarkan id kabupaten/kotanya (3171)
   *      const kecamatanDiJakartaSelatan = daerah.getKabupaten(3171);
   *
   *      // Dapetin data kecamatan Pancoran berdasarkan idnya (3171080)
   *      const kecamatanDiJakartaSelatan = daerah.getKabupaten(3171080);
   *
   * @method daerah.getKecamatan
   * @param {Number | String} [id] (opsional) Cari berdasarkan id daerah yang diingingkan. Jika id 2 digit, maka akan mencari semua kecamatan berdasarkan id provinsinya, jika id 4 digit, maka akan mencari data kecamatan yang sesuai dengan id kabupaten/kotanya, sedangkan jika 7 digit, maka akan menampilkan data singular kecamatan berdasarkan idnya.
   * @api public
   */
  getKecamatan(id) {
    const options = id ? id.toString() : undefined;
    if (typeof options === "undefined") {
      return kecamatanList;
    }

    // Cari 1 kecamatan spesifik
    if (options.length === 7) {
      return kecamatanList.find((value, index) =>
        value.id.toString().startsWith(options)
      );
    }

    // Filter kabupaten berdasarkan idnya
    return kecamatanList.filter((value, index) =>
      value.id.toString().startsWith(options)
    );
  }
  /**
   * Dapetin data kelurahan yang ada di Indonesia. Jika parameter dikosongkan, maka akan mencari semua kelurahan yang tersedia.
   *
   * ### Contoh:
   *
   *      const daerah = require('daerah-indonesia');
   *
   *      // Dapetin semua Kelurahan di Indonesia
   *      const semuaKelurahan = daerah.getKelurahan();
   *
   *      // Dapetin Kelurahan di Jakarta berdasarkan id provinsinya (31)
   *      const kelurahanDiJakarta = daerah.getKelurahan(31);
   *
   *      // Dapetin data Kelurahan di Kota Jakarta Selatan berdsarkan id kabupaten/kotanya (3171)
   *      const kelurahanDiJakartaSelatan = daerah.getKelurahan(3171);
   *
   *      // Dapetin data kelurahan di kecamatan Pancoran berdasarkan id kecamatannya (3171080)
   *      const kelurahanDiPancoran = daerah.getKelurahan(3171080);
   *
   *      // Dapetin data kelurahan Kalibata berdasarkan id kelurahannya (3171080001)
   *      const kelurahanKalibata = daerah.getKelurahan(3171080001);
   *
   * @method daerah.getKelurahan
   * @param {Number | String} [id] (opsional) Cari berdasarkan id daerah yang diingingkan. Jika id 2 digit, maka akan mencari semua kelurahan berdasarkan id provinsinya, jika id 4 digit, maka akan mencari data kelurahan yang sesuai dengan id kabupaten/kotanya, jika 7 digit, maka akan menampilkan data kelurahan yang sesuai dengan id kabupaten/kotanya, sedangkan jika 10 digit, maka akan data singular kelurahan berdasarkan idnya.
   * @api public
   */
  getKelurahan(id) {
    const options = id ? id.toString() : undefined;
    if (typeof options === "undefined") {
      return kelurahanList;
    }

    // Cari 1 kelurahan saja
    if (options.length === 10) {
      return kelurahanList.find((value, index) =>
        value.id.toString().startsWith(options)
      );
    }

    // Filter kelurahan berdasarkan id nya
    return kelurahanList.filter((value, index) =>
      value.id.toString().startsWith(options)
    );
  }
}

module.exports = exports = new Daerah();
