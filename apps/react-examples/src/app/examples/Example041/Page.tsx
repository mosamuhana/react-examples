import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as L from 'leaflet';

import { createMapWidget, addPopupToMapWidget } from './map-widget';

export function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [popupContainer, setPopupContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current);
      mapRef.current = map;
      const popupDiv = addPopupToMapWidget(map);
      setPopupContainer(popupDiv);
    }
  }, []);

  return (
    <div style={{ width: 500, height: 400 }} ref={containerRef}>
      {popupContainer !== null && createPortal(
        <p>Hello from React!</p>,
        popupContainer
      )}
    </div>
  );
}
