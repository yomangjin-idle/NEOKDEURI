import React, { useEffect, useRef } from "react";
const { kakao } = window;

export default function MapContainer({ lat = 12, lng = 12 }) {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(lat, lng);
        const options = {
          center,
          level: 5,
        };

        const map = new kakao.maps.Map(container.current, options);

        var markerPosition = new kakao.maps.LatLng(lat, lng);

        var marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };
  }, [container]);

  return (
    <>
      <div
        id="map"
        ref={container}
        style={{ width: "100%", height: "175px" }}
      ></div>
    </>
  );
}
