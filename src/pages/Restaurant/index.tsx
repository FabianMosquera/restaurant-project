import { Context } from "../../context/context";
import { useContext } from "react";
import getRestaurante from "../../services/firebase";

function Restaurant(props: any) {
  const { userLogin } = useContext(Context);
  (async () => {
    console.log(await getRestaurante());
  })();
  return (
    <>
      <h1>RESTAURANTE:</h1>
      <div className="Barra-busqueda">
        <input type="text" placeholder="buscar restaurante" />
        <button></button>
      </div>
      <h2>{userLogin}</h2>
    </>
  );
}

export default Restaurant;
