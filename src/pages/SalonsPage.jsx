import styles from "./SalonsPage.module.css";
import Salon from "../components/Salon";

import poznan from "../img/poznan.jpg";
import warsaw from "../img/warsaw.jpg";
import cracow from "../img/cracow.jpg";
import useFetch from "../hooks/useFetch";

const salonsImg = {
  poznan: {
    img: `${poznan}`,
  },
  warsaw: {
    img: `${warsaw}`,
  },
  cracow: {
    img: `${cracow}`,
  },
};

const SalonsPage = () => {
  const { data } = useFetch(
    "https://pirx-dfe1d-default-rtdb.europe-west1.firebasedatabase.app/salons.json"
  );

  return (
    <section className={styles.salonsContainer} id="salons">
      <h2 className={styles.salonsHeading}>Salony</h2>
      <p className={styles.salonsText}>
        Nasze salony zlokalizowane są w największych miastach w Polsce. Przyjdź
        i przekonaj się, który model Pirxa pasuje do Ciebie najlepiej!
      </p>
      <div className={styles.salons}>
        {data && <Salon data={data.s1} img={salonsImg.poznan.img} />}
        {data && <Salon data={data.s2} img={salonsImg.warsaw.img} />}
        {data && <Salon data={data.s3} img={salonsImg.cracow.img} />}
      </div>
    </section>
  );
};

export default SalonsPage;
