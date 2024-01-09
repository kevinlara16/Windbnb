import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
/* import "./index.css"; */

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);

  const handleChange = (e) => {
    let keyWord = e.target.value.toLowerCase();

    let arr = data.filter((city) => {
      let name = city.city.toLowerCase(); // 
      return name.includes(keyWord);
    });
    setFiltered(arr);
  };

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFiltered(data.slice(0, 6));
  }, [data]);

  // Puedes ver la variable data en consola.
  console.log(data);

  return (
    <section className="container">
      <Nav filtered={filtered} handleChange={handleChange} />
      <div className="titleStays">
        <h1 className="titulo">Stays in Finland</h1>
        <p className="stays">12+ stays</p>
      </div>
      <div className="containerCards">
        {filtered.slice(0, 6).map((el, i) => (
          <Card key={i} el={el} />
        ))}  
      </div>
    </section>
  );
}

export default App;
