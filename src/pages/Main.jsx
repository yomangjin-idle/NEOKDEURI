import React, { useEffect, useState } from "react";
import jejumap from "assets/main_island.svg";
import jejuBackGroundNight from "assets/main_background_night.svg";
import jejuBackGroundSun from "assets/main_background_sun.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled, { keyframes } from "styled-components";
import { DUMMY } from "./dummy";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.svg";
import ModalBottom from "components/atoms/ModalBottom";
import ModalDescription from "components/molecules/ModalDescription";
import { getTourInfoAPI } from "services/tour";

export const Main = () => {
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(false);
  const [open, setOpen] = useState(false);
  const [placeId, setPlaceId] = useState(0);
  const [list, setList] = useState(DUMMY);
  const [check, setCheck] = useState(false);

  const onClickCloseModalHandler = () => {
    setOpen(false);
  };

  const handleZoomChange = (transform) => {
    if (transform.state.scale > 2.0) {
      setShowTitle(true);
    } else {
      setShowTitle(false);
    }
  };

  const onClickHandler = (e) => {
    const id = e.currentTarget.getAttribute("id");
    setPlaceId(id);
    setOpen(true);
  };

  const onClickButtonHandler = () => {
    navigate(`/details/${placeId}`);
  };

  useEffect(() => {
    const getTourInfo = async () => {
      try {
        const response = await getTourInfoAPI();
        const data = response?.data;

        setList(
          list.map((item) => {
            return { ...item, address: data[item.id - 1].address };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    getTourInfo();
  }, []);

  useEffect(() => {
    let ids = [];

    for (let i = 0; i < localStorage.length; i++) {
      const id = localStorage.key(i);
      ids.push(id);
    }

    const arrays = list.map((item) => {
      if (ids.includes(String(item.id))) {
        item.status = true;
        return item;
      } else return item;
    });

    setList([...arrays]);

    if (list.filter((el) => el.status === true).length === 15) {
      setCheck(true);
    }
  }, []);

  return (
    <>
      <Container check={check ? jejuBackGroundSun : jejuBackGroundNight}>
        <MapLayout>
          <TransformWrapper
            centerOnInit
            initialScale={1}
            onZoom={handleZoomChange}
          >
            <Logo src={logo} />
            <TransformComponent
              wrapperStyle={{ width: "375px", height: "667px" }}
              contentStyle={{ width: "100%", height: "192px" }}
            >
              <img src={jejumap} width={"100%"} alt="map" id="jejuMap" />
              {list.map(
                ({
                  px,
                  py,
                  name,
                  id,
                  imageLink,
                  scale,
                  fontPx,
                  fontPy,
                  status,
                }) => {
                  return (
                    <>
                      <Spot
                        link={
                          status
                            ? `/landmarks_visit/${imageLink}.svg`
                            : `/landmarks/${imageLink}.svg`
                        }
                        px={px}
                        py={py}
                        id={id}
                        name={name}
                        key={name}
                        scale={scale}
                        onClick={(e) => onClickHandler(e)}
                      />
                      {showTitle && (
                        <Text
                          fontPx={fontPx}
                          fontPy={fontPy}
                          id={id}
                          len={name.length}
                          name={name}
                          key={name}
                          fontSize={"1rem"}
                        >
                          {name}
                        </Text>
                      )}
                    </>
                  );
                }
              )}
            </TransformComponent>
          </TransformWrapper>
          <ModalBottom open={open} onClickCloseModal={onClickCloseModalHandler}>
            <ModalDescription
              onClickHandler={onClickButtonHandler}
              placeId={placeId}
            />
          </ModalBottom>
        </MapLayout>
      </Container>
    </>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 128px;
  left: 19px;
  z-index: 10;
`;

const slideInUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(50%);
  }
`;

const Container = styled.div`
  position: relative;
  width: 375px;
  height: 667px;
  background-image: url(${(props) => props.check});
`;

const MapLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Spot = styled.div`
  position: absolute;
  left: ${(props) => props.px + 25}px;
  top: ${(props) => props.py}px;
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.link});
  background-repeat: no-repeat;
  background-size: contain;
  transform: scale(${(props) => props.scale});
  cursor: pointer;

  &:hover {
    animation: scaleUp 0.5s ease forwards;
  }

  @keyframes scaleUp {
    from {
      transform: scale(${(props) => props.scale});
    }
    to {
      transform: scale(2, 2);
    }
  }
`;

const Text = styled.div`
  position: absolute;
  left: ${(props) => props.fontPx + 25}px;
  top: ${(props) => props.fontPy + 35}px;
  z-index: 100;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0.2, 0.2, 0.2, 0.3);
  font-size: 0.5rem;
  z-index: 10;
  color: white;
  animation: ${slideInUp} 1s ease forwards;
`;

export default Main;
