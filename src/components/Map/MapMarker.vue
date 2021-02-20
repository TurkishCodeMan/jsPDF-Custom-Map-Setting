<template>
  <div class="container"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      positionMid: [],
    };
  },
  computed: {
    google() {
      return this.getGoogle();
    },
  },
  methods: {
    ...mapGetters({ getGoogle: "getGoogle" }),
  },
  props: {
    map: { type: Object },
    markerInfo: { type: Object },
  },
  mounted() {
      let bounds=new this.google.maps.LatLngBounds();
    let marker = new this.google.maps.Marker({
      position: this.markerInfo.position,
      marker: this.markerInfo,
      map: this.map,
      draggable: true,
      animation: this.google.maps.Animation.DROP,
    });
      bounds.extend(marker.position);
    this.map.setZoom(6)
    this.map.panToBounds(bounds);

  },
};
</script>

<style>
</style>