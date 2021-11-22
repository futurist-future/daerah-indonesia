declare namespace daerah {
  interface IDaerah {
    id: number;
    name: string;
  }

  interface Daerah {
    getProvinsi(id: string | number): IDaerah[] | IDaerah;
    /** test LMAO */
    // getKabupaten(id: string | number): IDaerah[] | IDaerah;
  }
}

declare const daerah: daerah.Daerah;

export = daerah;
