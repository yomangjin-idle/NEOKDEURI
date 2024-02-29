import React, { useEffect, useRef, useState } from "react";
/* global kakao */
const { kakao } = window;

export default function MapContainer({ lat = 12, lng = 12 }) {
    const [kakaoMap, setKakaoMap] = useState(null);
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
          `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAKO_API_KEY}&autoload=false`;
        document.head.appendChild(script);
    
        script.onload = () => {
          kakao.maps.load(() => {
            const center = new kakao.maps.LatLng(lat, lng);
            const options = {
              center,
              level: 5
            };

            const map = new kakao.maps.Map(container.current, options);

            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(lat, lng); 
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition

            });
            
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            setKakaoMap(map);
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
