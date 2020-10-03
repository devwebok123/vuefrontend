<template>
  <div class="card">
    <table>
      <thead>
        <tr>
          <td>
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content>
                <span class="dropMonth">
                  January
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
          </td>
          <td v-for="(item, key) in dateArr" :key="key">
            {{ item.date }}
            <br />
            {{ item.week }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td :colspan="numberDays + 1" class="td-relative">
            <div class="fc-bg">
              <table>
                <tr>
                  <td class="firstTD lefttop">Analysis</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">
                    <div class="plan warning">Wed 01 Jan-Fri</div>
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
                <tr class="secondary">
                  <td class="firstTD">Build</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="2">
                    <div class="plan success">Mon 06 Jan-Tue</div>
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
                  <td class="firstTD">Test Case</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="3">
                    <div class="plan danger">Wed 08 Jan-Fri</div>
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
                <tr class="secondary">
                  <td class="firstTD">Testing</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                  <td class="firstTD">Implement</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                <tr class="secondary">
                  <td class="firstTD">Close</td>
                  <td
                    v-for="(item, key) in dateArr"
                    :key="key"
                    :class="{
                      holiday: item.week == 'Sat' || item.week == 'Sun'
                    }"
                  ></td>
                </tr>
              </table>
            </div>
            <div class="fc-content">
              <table>
                <tr>
                  <td v-for="(item, key) in dateArr" :key="key"></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
</template>

<script>
export default {
  name: "MonthPlan",
  data() {
    return {
      dateArr: [],
      numberDays: 0
    };
  },
  props: {},
  components: {},
  mounted() {
    this.createDateArr();
  },
  created() {},
  methods: {
    createDateArr() {
      var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let numberDays = new Date(2020, 1, 0).getDate();
      this.numberDays = numberDays;
      for (let i = 0; i < numberDays; i++) {
        let weeknumber = new Date(2020, 0, i + 1).getDay();
        this.dateArr.push({
          date: i + 1,
          week: days[weeknumber]
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  height: 340px;
  overflow: auto;
  table {
    tr {
      td {
        font-size: 12px;
        text-align: center;
        color: #6896cc;
        min-width: 40px;
      }
      td:first-child {
        color: #002958;
        min-width: 100px;
        padding: 0;
        .dropMonth {
          color: #002958;
          font-size: 12px;
        }
      }
    }
  }
  .td-relative {
    position: relative;
    top: 0;
    height: 40px;
  }
  .fc-bg {
    position: absolute;
    top: 0;
    tr.secondary {
      background: #f0f0f0;
    }
    td {
      border: 1px solid #deecf3;
      border-left: none;
      height: 40px;
      padding: 0 9px;
      &.holiday {
        background: #e7f2f8;
        border: none;
      }
    }
    .firstTD {
      background: #f0f0f0;
      border: none;
      min-width: 100px;
      &.lefttop {
        border-top-left-radius: 10px;
      }
    }
  }
  .fc-content {
    position: absolute;
    td {
      text-align: center;
      padding: 0;
    }
    .plan {
      font-size: 10px;
      color: #fff;
      padding: 6px;
      margin-top: -13px;
      border-radius: 12px;
    }
    .warning {
      background: #ff9900;
    }
    .success {
      background: #5aea16;
    }
    .danger {
      background: #f93149;
    }
  }
}
</style>
