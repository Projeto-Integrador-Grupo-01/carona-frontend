import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

/* Ícone custom (L.Icon) */
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

/* Componente para setar view/zoom no map (react-leaflet v5 requer isso) */
function SetView({ position, zoom = 12 }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.setView(position, zoom);
  }, [map, position, zoom]);
  return null;
}

/* Componente que cria um L.marker diretamente no mapa */
function CustomMarker({ position, icon, popupContent }) {
  const map = useMap();

  useEffect(() => {
    if (!position) return;

    const marker = L.marker(position, { icon }).addTo(map);

    if (popupContent) marker.bindPopup(popupContent);

     marker.openPopup();

    return () => {
      map.removeLayer(marker);
    };
  }, [map, position, icon, popupContent]);

  return null; 
}

export default function MapaViagem({ partida, destino }) {
  const [coords, setCoords] = useState(null);

  async function pegarCoordenadas(endereco) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      endereco
    )}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  }

  useEffect(() => {
    let mounted = true;
    async function carregar() {
      const origem = await pegarCoordenadas(partida);
      const destinoCoords = await pegarCoordenadas(destino);

      if (mounted && origem && destinoCoords) {
        setCoords({ origem, destino: destinoCoords });
      }
    }
    carregar();
    return () => { mounted = false; };
  }, [partida, destino]);

  if (!coords) return <p className="text-lime-950">Carregando mapa...</p>;

  const { origem, destino: destinoCoords } = coords;

  return (
    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md">
      <MapContainer style={{ height: "100%", width: "100%" }}>
        <SetView position={origem} zoom={10} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Marcadores criados via CustomMarker */}
        <CustomMarker
          position={origem}
          icon={customIcon}
          popupContent={"Origem: " + partida}
        />
        <CustomMarker
          position={destinoCoords}
          icon={customIcon}
          popupContent={"Destino: " + destino}
        />

        {/* Linha entre pontos usando Polyline do react-leaflet */}
        <Polyline positions={[origem, destinoCoords]} />
      </MapContainer>
    </div>
  );
}
