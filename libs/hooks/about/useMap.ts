import { useEffect, useRef } from 'react';

export default function useMap() {
  const kakaoMap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      const coords = new (window as any).daum.maps.LatLng(
        37.613030445578595,
        127.1535812801483
      );
      const options = { center: coords, level: 2 };
      const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
      const marker = new (window as any).daum.maps.Marker({
        position: coords,
        map,
      });
      const mapTypeControl = new (window as any).daum.maps.MapTypeControl();
      const zoomControl = new (window as any).daum.maps.ZoomControl();

      // Moving Center
      map.relayout();
      map.setCenter(coords);
      marker.setPosition(coords);
      map.addControl(
        mapTypeControl,
        (window as any).kakao.maps.ControlPosition.TOPRIGHT
      );
      map.addControl(
        zoomControl,
        (window as any).daum.maps.ControlPosition.RIGHT
      );
    }
  }, [kakaoMap]);

  return kakaoMap;
}
