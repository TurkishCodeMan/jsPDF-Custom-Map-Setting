<template>
  <body>
    <div id="app">
      <div class="row">
        <div class="col-md-12">
          <!--JSPDF COMPONENT -->
        </div>
        <div class="col-md-12">
          <Map></Map>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import jsPDF from "./components/jsPDF";
import Map from "./components/Map";
export default {
  name: "App",
  components: {
    appPdf: jsPDF,
    Map,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
