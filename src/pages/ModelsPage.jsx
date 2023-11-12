import styles from "./ModelsPage.module.css";
import Model from "../components/Model";

import lena1 from "../img/lena1.jpg";
import lena2 from "../img/lena2.jpg";
import lena3 from "../img/lena3.jpg";

import anna1 from "../img/ana1.jpg";
import anna2 from "../img/ana2.jpg";
import anna3 from "../img/ana3.jpg";

import nostromo1 from "../img/nostromo1.jpg";
import nostromo2 from "../img/nostromo2.jpg";
import nostromo3 from "../img/nostromo3.jpg";
import useFetch from "../hooks/useFetch";

const modelsImg = {
  lena: {
    img1: `${lena1}`,
    img2: `${lena2}`,
    img3: `${lena3}`,
  },
  anna: {
    img1: `${anna1}`,
    img2: `${anna2}`,
    img3: `${anna3}`,
  },
  nostromo: {
    img1: `${nostromo1}`,
    img2: `${nostromo2}`,
    img3: `${nostromo3}`,
  },
};

const ModelsPage = () => {
  const { data } = useFetch(
    "https://pirx-dfe1d-default-rtdb.europe-west1.firebasedatabase.app/models.json"
  );

  return (
    <section className={styles.modelsContainer} id="models">
      <h2 className={styles.modelsHeading}>Modele</h2>
      <p className={styles.modelsText}>
        PIRX odpowiada na wyzwania dzisiejszego świata i jego mieszkańców.
        Niezależnie jakie pokolenie reprezentujesz, jakie zawód wykonujesz, czy
        o czym marzysz, nasze samochody dopasują się do Ciebie idealnie. Poznaj
        nasze modele aut i umów się na jazdę próbną.{" "}
      </p>

      {data && <Model data={data.m1} img={modelsImg.lena}></Model>}

      {data && <Model data={data.m2} img={modelsImg.anna}></Model>}

      {data && <Model data={data.m3} img={modelsImg.nostromo}></Model>}
    </section>
  );
};

export default ModelsPage;
