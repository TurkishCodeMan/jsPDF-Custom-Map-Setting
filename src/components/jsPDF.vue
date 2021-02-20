<template>
  <div class="container">
    <div class="my-table">
      <h3 class="text-center text-warning">My Persons</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in array" :key="person.index">
            <td>{{ person.name }}</td>
            <td>{{ person.surname }}</td>
            <td>{{ person.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center">
        <button class="btn btn-warning" @click="generatePDF">
          PDF Download
        </button>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <button class="btn btn-info" @click="generateXLS">XLS Download</button>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <button class="btn btn-danger">PNG Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  data() {
    return {
      array: [
        {
          name: "Ahmet",
          surname: "Denek",
          age: "35",
        },
        {
          name: "Mehmet",
          surname: "Deniz",
          age: "85",
        },

        {
          name: "Can",
          surname: "Koç",
          age: "15",
        },

        {
          name: "Berk",
          surname: "Bedir",
          age: "25",
        },
      ],
    };
  },
  methods: {
    generatePDF() {
      let doc = new jsPDF();
      doc.setLineWidth(2);

      doc.autoTable({
        html: ".table-striped",
        styles: {
          theme: "striped",
        },
        startY: 30,
        didDrawPage: function (data) {
          doc.setTextColor(100, 200, 68);
          doc.text("Header", 20, 20);
        },

        headStyles: {
          fillColor: [100, 200, 68],
        },
        didDrawCell: function (data) {
          if (data.column.index == 3 && data.cell.section == "body") {
            var td = data.cell.raw;
            var img = require("../assets/logo.png");
            var dim = data.cell.height;

            doc.addImage(img, data.cell.x, data.cell.y, dim, dim);
          }
        },
      });
      doc.save("Table.pdf");
    },
    generateXLS() {
      let doc = new jsPDF();
      doc.setLineWidth(2);

      doc.autoTable({
        html: ".table-striped",
        styles: {
          theme: "striped",
        },
        startY: 30,
        didDrawPage: function (data) {
          doc.setTextColor(100, 200, 68);
          doc.text("Header", 20, 20);
        },

        headStyles: {
          fillColor: [100, 200, 68],
        },
      });
      doc.save("Table.xls");
    },
  },
};
</script>

<style>
</style>