<template>
  <div class="card">
    <table class="table table-curved responsive-sm text-center">
      <thead>
        <th>Impediment</th>
        <th>Impact</th>
        <th>Health</th>
        <th>Risks</th>
        <th>Issues</th>
        <th>Mitigation</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
          <td>
            <div class="inner">Awesome</div>
          </td>
          <td>
            <div class="inner">
              <b-progress :value="100" class="health impediment"></b-progress>
            </div>
          </td>
          <td>
            <div class="inner health">Low Risk</div>
          </td>
          <td>
            <div class="inner">Not yet</div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
          <td>
            <div class="inner">Average</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="impediment"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">Medium Risk</div>
          </td>
          <td>
            <div class="inner">UX is not reliable</div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
          <td>
            <div class="inner">Average</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="10"
                class="impediment"
                variant="danger"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-danger">High Risk</div>
          </td>
          <td>
            <div class="inner">Need to work more</div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
          <td>
            <div class="inner">Average</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="impediment"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">Medium Risk</div>
          </td>
          <td>
            <div class="inner">UX is not reliable</div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
          <td>
            <div class="inner">Average</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="impediment"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">Medium Risk</div>
          </td>
          <td>
            <div class="inner">UX is not reliable</div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Impediment",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.card {
  height: 300px;
  overflow-y: auto;
}
table {
  color: #002958;
  th {
    font-size: 14px;
    border: none !important;
  }
  tr {
    font-size: 12px;
    td {
      padding: 5px 0;
      border: none;
      .inner {
        border-top: 1px solid #dee2e6;
        border-bottom: 1px solid #dee2e6;
        padding-top: 8px;
        min-height: 30px;
        &.health {
          color: #5aea16;
        }
      }
      &:first-child {
        .inner {
          border-left: 1px solid #dee2e6;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
      &:last-child {
        .inner {
          border-right: 1px solid #dee2e6;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .inner {
    min-height: 46px !important;
  }
}
</style>
