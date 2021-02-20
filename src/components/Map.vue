<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div id="map" ref="myMap">
          <div class="marker" v-if="google && map">
            <MapMarker
              v-for="markerInfo in markers"
              :key="markerInfo.id"
              :map="map"
              :markerInfo="markerInfo"
            >
            </MapMarker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MapMarker from "./Map/MapMarker";
export default {
  data() {
    return {
      map: "",
      mapConfig: {
        center: { lat: 38.356869, lng: 38.309669 },
        zoom: 8,
        mapTypeId: "hybrid",
      },
      markers: [
        {
          id: "a",
          position: { lat: 38.366869, lng: 38.309669 },
          info: "Güzell",
        },
        {
          id: "b",
          position: { lat: 38.80, lng: 38.65 },
          info: "Güzell Hoss",
        },
        {
          id: "c",
          position: { lat: 41.20, lng: 38.10 },
          info: "Güzell",
        },
      ],
    };
  },
  computed: {
    google() {
      return this.getGoogle();
    },
  },
  components: { MapMarker },
  methods: {
    ...mapActions(["initGoogle"]),
    ...mapGetters(["getGoogle"]),

    initializeMap() {
      const mapContainer = this.$refs.myMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
  },
  async created() {
    try {
      await this.initGoogle();
      this.initializeMap();
    } catch (error) {
      return error;
    }
  },
};
</script>

<style lang='scss'>
#map {
  width: 100%;
  height: 500px;
  padding: 1rem;
}
</style>