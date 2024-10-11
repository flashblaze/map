// https://github.com/visgl/deck.gl/tree/9.0-release/examples/website/heatmap
import { Map } from "react-map-gl/maplibre";
import { DeckGL } from "deck.gl";
import { HeatmapLayer } from "deck.gl";

import type { MapViewState } from "deck.gl";

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -20.959,
  latitude: 20.5699,
  zoom: 2.8,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

type DataPoint = [longitude: number, latitude: number, count: number];

export default function App({
  data,
  intensity = 1,
  threshold = 0.03,
  radiusPixels = 30,
  mapStyle = MAP_STYLE,
}: {
  data?: string | DataPoint[];
  intensity?: number;
  threshold?: number;
  radiusPixels?: number;
  mapStyle?: string;
}) {
  const layers = [
    new HeatmapLayer<DataPoint>({
      data,
      id: "heatmap-layer",
      pickable: false,
      getPosition: (d) => [d[0], d[1]],
      getWeight: (d) => d[2],
      radiusPixels,
      intensity,
      threshold,
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map reuseMaps mapStyle={mapStyle} />
    </DeckGL>
  );
}
