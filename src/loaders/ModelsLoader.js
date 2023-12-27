const ModelsLoader = () => {
  return fetch(
    "https://pirx-dfe1d-default-rtdb.europe-west1.firebasedatabase.app/models.json"
  );
};

export default ModelsLoader;
