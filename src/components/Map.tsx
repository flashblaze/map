// https://github.com/visgl/deck.gl/tree/9.0-release/examples/website/heatmap
import { Map } from "react-map-gl/maplibre";
import { DeckGL } from "deck.gl";
import { HeatmapLayer } from "deck.gl";

import type { MapViewState } from "deck.gl";
import { useEffect, useState } from "preact/hooks";

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
  longitude,
  latitude,
}: {
  data?: string | DataPoint[];
  longitude?: number;
  latitude?: number;
}) {
  const [initialViewState, setInitialViewState] = useState(INITIAL_VIEW_STATE);

  useEffect(() => {
    if (longitude && latitude) {
      setInitialViewState({
        ...INITIAL_VIEW_STATE,
        longitude,
        latitude,
        zoom: 5,
      });
    }
  }, [longitude, latitude]);

  const layers = [
    new HeatmapLayer<DataPoint>({
      data,
      id: "heatmap-layer",
      pickable: false,
      getPosition: (d) => [d[0], d[1]],
      getWeight: (d) => d[2],
      radiusPixels: 30,
      intensity: 1,
      threshold: 0.03,
    }),
  ];

  return (
    <DeckGL
      initialViewState={initialViewState}
      controller={true}
      layers={layers}
    >
      <Map reuseMaps mapStyle={MAP_STYLE} />
    </DeckGL>
  );
}
