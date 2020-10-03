<template>
  <div class="card">
    <table class="table table-curved responsive-sm text-center">
      <thead>
        <th>Project</th>
        <th>Stage</th>
        <th>Health</th>
        <th>Target Completion</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="inner">Dashboard UI</div>
          </td>
          <td>
            <div class="inner">Testing</div>
          </td>
          <td>
            <div class="inner">
              <b-progress :value="100" class="health impediment"></b-progress>
            </div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Dashboard UI</div>
          </td>
          <td>
            <div class="inner">Testing</div>
          </td>
          <td>
            <div class="inner">
              <b-progress :value="100" class="health impediment"></b-progress>
            </div>
          </td>
          <td>
            <div class="inner">Lorem ipsum dolor sit amet</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Dashboard UI</div>
          </td>
          <td>
            <div class="inner">Testing</div>
          </td>
          <td>
            <div class="inner">
              <b-progress :value="100" class="health impediment"></b-progress>
            </div>
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
  name: "Project",
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
  height: 220px;
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
  .card {
    height: 336px !important;
  }
  .inner {
    min-height: 49px !important;
  }
}
</style>
