import { Context } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import getRestaurante from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { ContainerCard, Content, ImagenStyle, NameTitle, ReseñaStyle, ContentContainer } from "./StyledRestaurant";

function Restaurant(props: any) {
  const { userLogin } = useContext(Context);
  const [filtro, setFiltro] = useState("");
  const [dato, setDato] = useState([{}]);
  const [datofil, setDatofil] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) return navigate("/Login")
    const getData = async () => {
      const restaurante = await getRestaurante();
      setDato(restaurante);
    };
    getData();
  }, []);

  const handleChange = (e: any) => {
    setFiltro(e.target.value);
    if (e.target.value == "") {
      setDatofil("");
    }
  };

  const handleClick = () => {
    setDatofil(filtro);
  };

  return (
    <>
      <h1>RESTAURANTE:</h1>
      <div className="Barra-busqueda">
        <input
          name="buscador"
          type="text"
          value={filtro}
          onChange={handleChange}
          placeholder="buscar restaurante"
        />
        <button onClick={handleClick}>Buscar</button>
      </div>
      <ContainerCard>
        {dato
          .filter((item: any) =>
            datofil != ""
              ? item.ciudad.toLowerCase() === datofil.toLowerCase()
              : true
          )
          .map(({ Imagen, Direccion, Reseña, nombre }: any, index: number) => (
            <Content key={index}>
              <ContentContainer>
              <ImagenStyle src={Imagen} alt="" />
              <NameTitle>Nombre: {nombre}</NameTitle>
              <NameTitle>Dirección: {Direccion}</NameTitle>
              <ReseñaStyle>Reseña: {Reseña}</ReseñaStyle>
              </ContentContainer>
            </Content>
          ))}
      </ContainerCard>
    </>
  );
}

export default Restaurant;
