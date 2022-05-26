import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px 18px;
  padding: 50px 6px;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  text-align: center;
  display: flex;
  overflow: hidden;
  width: 280px;
  border-radius: 0.5rem;
  color: white;
  background: linear-gradient(45deg, #858585, #111111);
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
  text-align: center;
  text-overflow: ellipsis;
  width: 100%;
`;

export const ImagenStyle = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin-bottom: 2rem;
  border-radius: 40%;
`;

export const NameTitle = styled.h2`
  font-size: 1.25rem;
`;

export const ReseñaStyle = styled.p`
  font-size: 1rem;
`;
