import { MapContainer } from "react-leaflet";
import { TileLayerWrapper } from "./Helpers/TileLayerWrapper";
import { CustomCRS } from "./Types/CustomCRS";
import styled, { keyframes } from "styled-components";

import "./InteractiveMap.css";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 100;
    }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.7s;
  background-color: #0fa7d0;
`;

interface InteractiveMapProps {
  assetUrl?: string;
  minZoom?: number;
  maxZoom?: number;
}

export const InteractiveMap = ({
  assetUrl = "/assets/maps/atlas",
  minZoom = 0,
  maxZoom = 5,
}: InteractiveMapProps) => {
  return (
    <Wrapper>
      <MapContainer
        style={{ height: "100%", width: "100%", backgroundColor: "inherit" }}
        crs={CustomCRS}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={[0, 0]}
        preferCanvas={true}
        zoom={3}
      >
        <TileLayerWrapper
          keepBuffer={64}
          noWrap={true}
          url={`${assetUrl}/{z}/{x}/{y}.jpg`}
          minZoom={minZoom}
          maxZoom={maxZoom}
        />
        {/* {players &&
          players?.map((player) => (
            <PlayerMarker player={player} key={player.name} />
          ))} */}
      </MapContainer>
    </Wrapper>
  );
};
