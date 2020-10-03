<template>
  <div class="card">
    <div>
      <div class="p-3">
        <h2>Project Timeline</h2>
        <span class="drop">
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template v-slot:button-content class="p-0">
              <span class="dropMonth">
                Febrary
                <svg
                  width="9"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2"
                >
                  <path
                    d="M1 1L7 6L13 1"
                    stroke="#002958"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </template>
          </b-dropdown>
        </span>
        <div class="timeline">
          <table>
            <thead>
              <tr>
                <td v-for="(item, key) in dateArr" :key="key">
                  <span class="datenumber">{{ item.date }}</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td :colspan="numberDays + 1" class="td-relative">
                  <div class="fc-bg">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                    </table>
                  </div>
                  <div class="fc-content">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                      <tr>
                        <td colspan="4">
                          <div class="plan">
                            <b-progress
                              :max="100"
                              height="25px"
                              variant="warning"
                            >
                              <b-progress-bar :value="100">
                                <span>Discovery - 100%</span>
                              </b-progress-bar>
                            </b-progress>
                            <img
                              src="../assets/images/photo/photo5.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo4.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td :colspan="numberDays + 1" class="td-relative">
                  <div class="fc-bg">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                    </table>
                  </div>
                  <div class="fc-content">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td colspan="4">
                          <div class="plan">
                            <b-progress :max="100" height="25px">
                              <b-progress-bar :value="81" class="health">
                                <span>Planning - 81%</span>
                              </b-progress-bar>
                            </b-progress>
                            <img
                              src="../assets/images/photo/photo5.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo4.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td :colspan="numberDays + 1" class="td-relative">
                  <div class="fc-bg">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                    </table>
                  </div>
                  <div class="fc-content">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                      <tr>
                        <td colspan="4"></td>
                        <td colspan="4">
                          <div class="plan">
                            <b-progress
                              :max="100"
                              height="25px"
                              variant="danger"
                            >
                              <b-progress-bar :value="57">
                                <span>Brief - 57%</span>
                              </b-progress-bar>
                            </b-progress>
                            <img
                              src="../assets/images/photo/photo5.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo4.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo3.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td :colspan="numberDays + 1" class="td-relative">
                  <div class="fc-bg">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                    </table>
                  </div>
                  <div class="fc-content">
                    <table>
                      <tr>
                        <td v-for="(item, key) in dateArr" :key="key"></td>
                      </tr>
                      <tr>
                        <td colspan="6"></td>
                        <td colspan="4">
                          <div class="plan">
                            <b-progress
                              :max="100"
                              height="25px"
                              variant="warning"
                            >
                              <b-progress-bar :value="37">
                                <span>Designing - 37%</span>
                              </b-progress-bar>
                            </b-progress>
                            <img
                              src="../assets/images/photo/photo5.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo4.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo3.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTimeline",
  data() {
    return {
      dateArr: [],
      numberDays: 0
    };
  },
  props: {
    title: String
  },
  components: {},
  mounted() {
    this.createDateArr();
  },
  created() {},
  methods: {
    createDateArr() {
      let numberDays = new Date(2020, 2, 0).getDate();
      for (let i = 0; i < numberDays; i++) {
        this.dateArr.push({
          date: i + 1
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  padding: 0 !important;
  h2 {
    font-size: 18px;
    color: #002958;
  }
  .drop {
    position: relative;
    top: -2px;
    .dropMonth {
      color: #002958;
      font-size: 14px;
    }
  }
  .timeline {
    height: 230px;
    overflow: auto;
    table {
      tr {
        td {
          font-size: 12px;
          text-align: center;
          color: #6896cc;
          min-width: 40px;
          .datenumber {
            position: relative;
            left: -20px;
          }
        }
      }
    }
    .td-relative {
      position: relative;
      height: 40px;
    }
    .fc-bg {
      position: absolute;
      top: 5px;
      td {
        border: 1px solid #deecf3;
        border-top: none;
        border-bottom: none;
        height: 40px;
      }
    }
    .fc-content {
      position: absolute;
      top: 5px;
      td {
        text-align: center;
        padding: 0;
      }
      .plan {
        margin-top: 14px;
        border-radius: 12px;
        position: relative;
        .progress {
          border-radius: 20px;
        }
        .progress-bar {
          text-align: left !important;
          font-size: 10px;
          padding-left: 10px;
        }
        .devphoto {
          position: relative;
          top: -24px;
          border-radius: 15px;
          margin-left: -10px;
        }
      }
    }
  }
}
</style>
