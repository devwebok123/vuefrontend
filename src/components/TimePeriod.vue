<template>
  <div class="card">
    <div class="col-lg-9 borderright float-left">
      <div class="p-3">
        <span class="card-title">Time Periode</span>
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
                        <td colspan="8">
                          <div class="plan warning">
                            Redesign UI Dashboard
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
                            <img
                              src="../assets/images/photo/photo2.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                            <img
                              src="../assets/images/photo/photo1.png"
                              class="float-right devphoto"
                              width="25"
                              height="25"
                            />
                          </div>
                        </td>
                        <td></td>
                        <td></td>
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
                        <td colspan="6">
                          <div class="plan warning">
                            Redesign UI Dashboard
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
                        <td colspan="8"></td>
                        <td colspan="7">
                          <div class="plan warning">
                            Redesign UI Dashboard
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
                        <td colspan="12"></td>
                        <td colspan="12">
                          <div class="plan warning">
                            Redesign UI Dashboard
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
                        <td></td>
                        <td></td>
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
    <div class="col-lg-3 float-left">
      <div class="p-3">
        <span class="all pl-2">All projects</span>
        <span class="searchspan float-right">
          <input type="text" class="search" placeholder="search" />
        </span>
      </div>
      <div class="fiveteam text-center">
        <div>
          <h4>Redesign UI Dashboard</h4>
          <p>5 team members</p>
        </div>
      </div>
      <div class="threeteam text-center m-3">
        <div>
          <h4>React Web Design</h4>
          <p>3 team members</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimePeriod",
  data() {
    return {
      dateArr: [],
      numberDays: 0
    };
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
  .card-title {
    font-size: 14px;
    color: #6896cc;
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
    height: 256px;
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
        text-align: left;
        font-size: 10px;
        color: #fff;
        padding: 5px 0 5px 12px;
        margin-top: 14px;
        border-radius: 12px;
        .devphoto {
          position: relative;
          top: -5px;
          border-radius: 15px;
          margin-left: -10px;
        }
      }
      .warning {
        background: #ff9900;
      }
    }
  }
  .all {
    font-size: 12px;
    color: #002958;
  }
  .borderleft {
    border-left: 1px solid #deecf3;
  }
  .borderright {
    border-right: 1px solid #deecf3;
  }
  .searchspan {
    position: relative;
    .search {
      width: 110px;
      padding: 5px 15px;
      font-size: 12px;
      color: #002958;
      border: none;
      border-radius: 15px;
      background: #f4fafd;
    }
    &:after {
      content: "";
      width: 13px;
      height: 13px;
      background: url("../assets/images/search.png") no-repeat;
      background-size: 100%;
      position: absolute;
      left: 85px;
      top: 7px;
    }
  }
  .fiveteam {
    background: #0f5bce;
    padding: 5px;
    border-radius: 10px;
    margin-top: 15px;
    div {
      text-align: left;
      width: 150px;
      margin: auto;
      position: relative;
      padding: 6px 0;
      &:after {
        position: absolute;
        left: -35px;
        top: 5px;
        content: "";
        width: 35px;
        height: 35px;
        background: url("../assets/images/fiveteam.png") no-repeat;
        background-size: 100%;
      }
    }
    h4 {
      font-size: 14px;
      color: #fff;
      margin: 0;
    }
    p {
      font-size: 12px;
      color: #82b4ff;
      margin: 0;
    }
  }
  .threeteam {
    background: #fff;
    padding: 5px;
    border: 1px solid #82b4ff;
    border-radius: 10px;
    margin-top: 15px;
    div {
      text-align: left;
      width: 115px;
      margin: auto;
      position: relative;
      padding: 6px 0;
      &:after {
        position: absolute;
        left: -35px;
        top: 5px;
        content: "";
        width: 30px;
        height: 35px;
        background: url("../assets/images/threeteam.png") no-repeat;
        background-size: 100%;
      }
    }
    h4 {
      font-size: 14px;
      color: #002958;
      margin: 0;
    }
    p {
      font-size: 12px;
      color: #82b4ff;
      margin: 0;
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .content {
    .fiveteam {
      padding-left: 25px !important;
      h4 {
        font-size: 12px !important;
        width: 130px !important;
      }
      p {
        font-size: 10px !important;
      }
      div {
        &:after {
          left: -22px !important;
          width: 20px !important;
          height: 20px !important;
        }
      }
    }
    .threeteam {
      padding-left: 28px !important;
      h4 {
        font-size: 11px !important;
      }
      p {
        font-size: 10px !important;
      }
      div {
        &:after {
          left: -22px !important;
          width: 20px !important;
          height: 20px !important;
        }
      }
    }
  }
}
</style>
