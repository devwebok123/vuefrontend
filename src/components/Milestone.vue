<template>
  <div class="card">
    <table class="table table-curved responsive-sm text-center">
      <thead>
        <th>Milestone</th>
        <th>Target Completion</th>
        <th>Health</th>
        <th>State</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress :value="100" class="health health"></b-progress>
            </div>
          </td>
          <td>
            <div class="inner health">
              <span class="status">Completed</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="health"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">
              <span class="status">In Review</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="10"
                class="health"
                variant="danger"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-danger">
              <span class="status">Not Started</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="health"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">
              <span class="status">In Review</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="50"
                class="health"
                variant="warning"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-warning">
              <span class="status">In Review</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="inner">Lorem ipsum</div>
          </td>
          <td>
            <div class="inner">10/01/20</div>
          </td>
          <td>
            <div class="inner">
              <b-progress
                :value="10"
                class="health"
                variant="danger"
              ></b-progress>
            </div>
          </td>
          <td>
            <div class="inner text-danger">
              <span class="status">Not Started</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Milestone",
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
  height: 330px;
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
        .status {
          font-size: 10px;
          border: 1px solid;
          border-radius: 15px;
          padding: 2px 6px;
          min-height: auto;
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
  .status {
    font-size: 8px !important;
  }
}
</style>
