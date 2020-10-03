<template>
  <div class="status">
    <div class="col-lg-2 sidebar float-left d-none d-lg-block">
      <side-bar
        username="Dwight Watson"
        userrole="Project Manager"
        projects="12"
        teams="7"
        activeList="status"
      />
    </div>
    <div class="col-lg-10 content float-left">
      <header>
        <div class="text-left col-md-12 m-auto d-lg-none">
          <b-button v-b-toggle.sidebar class="float-left mb-3">☰</b-button>
          <b-sidebar id="sidebar" shadow>
            <div class="px-3 py-2">
              <side-bar
                username="Dwight Watson"
                userrole="Project Manager"
                projects="12"
                teams="7"
                activeList="status"
                class="text-center"
              />
            </div>
          </b-sidebar>
        </div>
        <div class="text-left col-md-6 float-left">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93751 20.6615C4.78168 20.9883 4.65701 21.2218 4.56351 21.3619C4.47001 21.5019 4.30249 21.6615 4.06094 21.8405C3.8194 22.0195 3.49994 22.1518 3.10256 22.2374C2.70518 22.323 2.18703 22.3735 1.54811 22.3891C1.56369 21.8911 1.59875 21.4669 1.6533 21.1167C1.70784 20.7665 1.76628 20.4903 1.82861 20.2879C1.89094 20.0856 1.99613 19.9066 2.14418 19.751C2.29222 19.5953 2.42468 19.4825 2.54155 19.4125C2.65843 19.3424 2.83374 19.2451 3.0675 19.1206C3.67525 18.8249 4.15834 18.537 4.51676 18.2568L3.60513 17.0895C3.37137 17.2607 2.9662 17.4942 2.38961 17.7899C1.79744 18.0856 1.34942 18.3891 1.04554 18.7004C0.741662 19.0117 0.496222 19.5214 0.309221 20.2296C0.122219 20.9377 0.0287181 21.8988 0.0287181 23.1128L0.0520933 23.8833L0.776725 23.8599C1.7429 23.8599 2.54545 23.8132 3.18437 23.7198C3.82329 23.6265 4.33755 23.4591 4.72714 23.2179C5.11672 22.9767 5.41281 22.7315 5.61539 22.4825C5.81798 22.2335 6.02836 21.8833 6.24653 21.4319C6.48028 20.9494 6.6517 20.607 6.76078 20.4047L5.66215 19.4008C5.55306 19.5409 5.44787 19.6926 5.34658 19.856C5.24529 20.0195 5.17127 20.1518 5.12452 20.2529C5.07776 20.3541 5.01543 20.4903 4.93751 20.6615ZM16.5082 4.45914C15.6823 4.45914 14.9772 4.75097 14.3928 5.33463C13.8084 5.91829 13.5162 6.62257 13.5162 7.44747C13.5162 7.99222 13.6487 8.49416 13.9136 8.95331C14.1785 9.41245 14.5408 9.77432 15.0005 10.0389C15.4603 10.3035 15.9628 10.4358 16.5082 10.4358C17.0537 10.4358 17.5562 10.3035 18.0159 10.0389C18.4757 9.77432 18.838 9.41245 19.1029 8.95331C19.3678 8.49416 19.5003 7.99222 19.5003 7.44747C19.5003 7.12062 19.4496 6.80545 19.3483 6.50195C19.247 6.19844 19.1068 5.92218 18.9276 5.67315C18.7484 5.42412 18.5341 5.21012 18.2848 5.03113C18.0354 4.85214 17.7588 4.71206 17.4549 4.61089C17.1511 4.50973 16.8355 4.45914 16.5082 4.45914ZM16.4966 8.94163C16.0836 8.94163 15.733 8.79377 15.4447 8.49805C15.1564 8.20233 15.0122 7.85214 15.0122 7.44747C15.0122 7.0428 15.1564 6.69261 15.4447 6.39689C15.733 6.10117 16.0875 5.95331 16.5082 5.95331C16.7732 5.95331 17.0225 6.01945 17.2563 6.15175C17.49 6.28405 17.6731 6.46693 17.8056 6.70039C17.938 6.93385 18.0043 7.18288 18.0043 7.44747C18.0043 7.85214 17.8562 8.20233 17.5601 8.49805C17.264 8.79377 16.9095 8.94163 16.4966 8.94163ZM23.9649 0.723735C23.9494 0.536965 23.8753 0.377432 23.7429 0.245136C23.6104 0.11284 23.4507 0.0389105 23.2637 0.0233463C23.2013 0.0233463 23.1195 0.0194553 23.0182 0.0116732C22.917 0.00389105 22.6949 0 22.352 0C22.0092 0 21.6586 0.0077821 21.3002 0.0233463C20.9417 0.0389105 20.5015 0.07393 19.9795 0.128405C19.4574 0.182879 18.9432 0.252918 18.4367 0.338521C17.9302 0.424125 17.377 0.544747 16.7771 0.700389C16.1771 0.856031 15.6044 1.03502 15.059 1.23735C13.6253 1.76654 12.3552 2.67704 11.2488 3.96887C11.1086 4.12451 10.9722 4.29183 10.8398 4.47082C10.7073 4.64981 10.5709 4.86381 10.4307 5.11284C10.2904 5.36187 10.1658 5.57588 10.0567 5.75486C9.9476 5.93385 9.81125 6.18288 9.64762 6.50195C9.48399 6.82101 9.36322 7.05837 9.2853 7.21401C9.20739 7.36965 9.07493 7.63035 8.88793 7.99611C8.70092 8.36187 8.58405 8.59144 8.5373 8.68482L8.37367 9.01167L8.23342 9.3035L8.06979 9.61868L7.92954 9.88716L7.78929 10.1673L7.64904 10.4125H3.48825C3.27008 10.4125 3.08308 10.4903 2.92724 10.6459L0.192345 13.6342C0.00534292 13.8366 -0.0453034 14.0739 0.0404057 14.3463C0.126115 14.6187 0.309221 14.786 0.589723 14.8482L5.05439 15.8755C5.24139 16.1089 5.77902 16.716 6.66728 17.6965L8.3503 19.5642L9.26193 23.4163C9.32426 23.6965 9.49568 23.8755 9.77618 23.9533C9.79177 23.9689 9.81125 23.9767 9.83462 23.9767C9.858 23.9767 9.88527 23.9805 9.91643 23.9883C9.9476 23.9961 9.97098 24 9.98656 24C10.1736 24 10.3372 23.9377 10.4774 23.8132L13.2591 21.0584C13.2903 21.0272 13.3253 20.9883 13.3643 20.9416C13.4032 20.8949 13.4344 20.8482 13.4578 20.8016C13.4812 20.7549 13.4967 20.7043 13.5045 20.6498C13.5123 20.5953 13.5162 20.5447 13.5162 20.4981V16.6459C13.6253 16.5681 13.7617 16.4825 13.9253 16.3891C14.0889 16.2957 14.3149 16.1712 14.6032 16.0156C14.8915 15.8599 15.0824 15.7588 15.1759 15.7121C15.4564 15.5409 16.0407 15.2257 16.929 14.7665C17.8173 14.3074 18.5458 13.9105 19.1146 13.5759C19.6834 13.2412 20.1236 12.9339 20.4353 12.6537C21.1365 12.0311 21.6664 11.4514 22.0248 10.9144C22.3832 10.3774 22.7027 9.72763 22.9832 8.96498C23.2169 8.32685 23.4117 7.61089 23.5676 6.81712C23.7234 6.02335 23.8286 5.30739 23.8831 4.66926C23.9377 4.03113 23.9727 3.38521 23.9883 2.73152C24.0039 2.07782 24.0039 1.61868 23.9883 1.35409C23.9727 1.08949 23.9649 0.879377 23.9649 0.723735ZM21.5807 8.42802C21.3313 9.09728 21.0625 9.64981 20.7742 10.0856C20.4859 10.5214 20.0457 11.0039 19.4535 11.5331C19.173 11.7821 18.7523 12.07 18.1913 12.3969C17.6303 12.7237 16.9368 13.0973 16.1109 13.5175C15.2849 13.9377 14.7317 14.2335 14.4512 14.4047C13.189 15.1051 12.4721 15.5253 12.3007 15.6654C12.254 15.6965 12.215 15.7354 12.1838 15.7821C12.1527 15.8288 12.1254 15.8755 12.102 15.9222C12.0786 15.9689 12.0592 16.0195 12.0436 16.0739C12.028 16.1284 12.0202 16.1868 12.0202 16.249V20.1479L10.4307 21.8755L9.77618 19.0506C9.72943 18.9105 9.6671 18.8016 9.58918 18.7237C7.32958 16.2023 6.12965 14.8638 5.9894 14.7082C5.92706 14.6459 5.86083 14.5914 5.79071 14.5447C5.72058 14.4981 5.64656 14.4669 5.56864 14.4514L2.15586 13.6809L3.83888 11.9066H8.09317C8.12433 11.9066 8.16329 11.9027 8.21004 11.8949C8.25679 11.8872 8.29965 11.8755 8.33861 11.8599C8.37757 11.8444 8.41652 11.8249 8.45548 11.8016C8.49444 11.7782 8.5295 11.7549 8.56067 11.7315C8.59184 11.7082 8.61911 11.6809 8.64248 11.6498C8.66586 11.6187 8.69313 11.5798 8.7243 11.5331C8.94247 11.1907 9.32426 10.4669 9.86968 9.36187C9.91643 9.28405 10.045 9.03502 10.2554 8.61479C10.4658 8.19455 10.6099 7.90272 10.6878 7.7393C10.7657 7.57588 10.8982 7.31907 11.0852 6.96887C11.2722 6.61868 11.4241 6.3463 11.541 6.15175C11.6579 5.9572 11.7942 5.74319 11.9501 5.50973C12.1059 5.27626 12.2462 5.08171 12.3708 4.92607C13.3058 3.83658 14.3733 3.07393 15.5732 2.63813C17.6458 1.85992 19.9522 1.4786 22.4923 1.49416C22.5391 4.35798 22.2352 6.66926 21.5807 8.42802Z"
              fill="#002958"
            />
          </svg>
          <h2>Status Dashboard</h2>
        </div>
        <div class="text-left col-md-6 float-left">
          <div class="share float-right">
            <label>Share</label>
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content>
                <span>
                  <svg
                    width="13"
                    height="17"
                    viewBox="0 0 13 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1"
                  >
                    <path
                      d="M6.85639 9.425L6.86193 9.39915C6.96903 8.95781 7.10384 8.40753 6.99858 7.90895C6.92841 7.51562 6.63849 7.36236 6.39105 7.35128C6.09929 7.33835 5.83892 7.50455 5.77429 7.74645C5.65241 8.18963 5.76136 8.79531 5.96079 9.56719C5.70966 10.1655 5.30895 11.0352 5.01534 11.5523C4.46875 11.8348 3.73565 12.2706 3.6267 12.8209C3.60455 12.9224 3.6304 13.0517 3.69133 13.168C3.75966 13.2973 3.86861 13.397 3.99602 13.445C4.05142 13.4653 4.1179 13.482 4.19545 13.482C4.52045 13.482 5.04673 13.2197 5.74844 12.0158C5.85554 11.9807 5.96633 11.9438 6.07344 11.9068C6.57571 11.7369 7.09645 11.5597 7.56733 11.4803C8.08807 11.7591 8.68082 11.9382 9.08338 11.9382C9.48224 11.9382 9.6392 11.7018 9.6983 11.5597C9.8017 11.3104 9.75185 10.9964 9.58381 10.8284C9.34006 10.5884 8.7473 10.5256 7.82401 10.6401C7.36974 10.3631 7.07244 9.98636 6.85639 9.425ZM4.83068 12.23C4.57401 12.603 4.38011 12.7895 4.27486 12.8707C4.39858 12.6436 4.64048 12.4036 4.83068 12.23ZM6.4483 7.88125C6.54432 8.0456 6.53139 8.54233 6.45753 8.79347C6.36705 8.42599 6.35412 7.90526 6.40767 7.84432C6.42244 7.84617 6.43537 7.85724 6.4483 7.88125ZM6.41875 10.1064C6.61633 10.448 6.86562 10.7416 7.14077 10.9595C6.7419 11.05 6.37812 11.1996 6.05312 11.3325C5.97557 11.3639 5.89986 11.3953 5.82599 11.4249C6.07159 10.9798 6.27656 10.4757 6.41875 10.1064ZM9.29205 11.3159C9.29389 11.3196 9.29574 11.3251 9.28466 11.3325H9.28096L9.27727 11.3381C9.2625 11.3473 9.11108 11.4359 8.45923 11.1793C9.20895 11.1442 9.2902 11.3141 9.29205 11.3159ZM12.8264 4.14744L8.85256 0.17358C8.74176 0.0627841 8.59219 0 8.43523 0H0.590909C0.264062 0 0 0.264062 0 0.590909V15.9545C0 16.2814 0.264062 16.5455 0.590909 16.5455H12.4091C12.7359 16.5455 13 16.2814 13 15.9545V4.56662C13 4.40966 12.9372 4.25824 12.8264 4.14744ZM11.6372 4.83807H8.16193V1.36278L11.6372 4.83807ZM11.6705 15.2159H1.32955V1.32955H6.90625V5.31818C6.90625 5.52388 6.98796 5.72114 7.13341 5.86659C7.27886 6.01204 7.47612 6.09375 7.68182 6.09375H11.6705V15.2159Z"
                      fill="#002958"
                    />
                  </svg>
                  PDF
                  <svg
                    width="14"
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
              <!--<b-dropdown-item><span>JSON</span></b-dropdown-item>
              <b-dropdown-item><span>TXT</span></b-dropdown-item>-->
            </b-dropdown>
          </div>
          <b-button class="savebtn float-right">save</b-button>
        </div>
      </header>
      <div class="col-md-12 rowPart">
        <div class="col-md-6 p-0 pr-md-2 float-left mb-2 md-md-0">
          <program-name-sponsor
            programName=""
            programSponser=""
            programManager="John Market"
            health="100"
            currentStage="deployment"
            statusAsOf="12 Feb 2020"
            trend="upward"
            targetStart="01 Jan 2020"
            targetEnd="22 Apr 2020"
          />
        </div>
        <div class="col-md-6 p-0 pl-md-2 float-left">
          <percent-complete />
        </div>
      </div>
      <div class="col-md-12 rowPart">
        <scope-component />
      </div>
      <div class="col-md-12 rowPart">
        <div class="col-md-4 p-0 pr-md-2 float-left">
          <status-detail param="false" title="Status" />
        </div>
        <div class="col-md-4 p-0 pl-md-2 pr-md-2 float-left">
          <status-detail param="true" title="Accomplishments" />
        </div>
        <div class="col-md-4 p-0 pl-md-2 float-left">
          <status-detail param="true" title="Upcoming Activities" />
        </div>
      </div>
      <div class="col-md-12 rowPart">
        <impediment-component />
      </div>
      <div class="col-md-12 rowPart">
        <div class="col-md-6 p-0 p-md-1 float-left mb-2 mb-md-0">
          <milestone-component />
        </div>
        <div class="col-md-6 p-0 p-md-1 float-left mb-2 mb-md-0">
          <month-plan />
        </div>
      </div>
      <div class="col-md-12 rowPart">
        <div class="col-md-6 p-0 p-md-1 float-left mb-2 mb-md-0">
          <project-component />
        </div>
        <div class="col-md-6 p-0 p-md-1 float-left mb-2 mb-md-0">
          <budget-resource />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import ProgramNameSponsor from "../components/ProgramNameSponsor.vue";
import PercentComplete from "../components/PercentComplete.vue";
import ScopeComponent from "../components/Scope.vue";
import StatusDetail from "../components/StatusDetail.vue";
import ImpedimentComponent from "../components/Impediment.vue";
import MilestoneComponent from "../components/Milestone.vue";
import MonthPlan from "../components/MonthPlan.vue";
import ProjectComponent from "../components/Project.vue";
import BudgetResource from "../components/BudgetResource.vue";

export default {
  name: "Status",
  data() {
    return {};
  },
  components: {
    "side-bar": Sidebar,
    "program-name-sponsor": ProgramNameSponsor,
    "percent-complete": PercentComplete,
    "scope-component": ScopeComponent,
    "status-detail": StatusDetail,
    "impediment-component": ImpedimentComponent,
    "milestone-component": MilestoneComponent,
    "month-plan": MonthPlan,
    "project-component": ProjectComponent,
    "budget-resource": BudgetResource
  },
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
@import "../../node_modules/typeface-roboto/index.css";
.status {
  font-family: "Roboto";
  #sidebar {
    z-index: 99999;
  }
  .content {
    position: relative;
    z-index: 9;
    padding: 40px;
    background: #e7f2f8;
    header {
      margin-bottom: 90px;
      h2 {
        font-size: 24px;
        color: #002958;
        margin-left: 40px;
        display: inline-block;
      }
      svg {
        position: relative;
        top: -5px;
      }
      .savebtn {
        font-size: 16px;
        color: #002958;
        padding: 5px 20px;
        border-radius: 15px;
        background: #fff;
        border: none;
        margin-right: 50px;
        margin-top: 5px;
      }
      .share {
        label {
          font-size: 24px;
          color: #002958;
        }
        span {
          padding: 5px 15px;
          color: #002958;
          border-radius: 15px;
          background: #fff;
          border: none;
          font-size: 16px;
          position: relative;
          top: -4px;
          svg {
            padding: 1px;
            top: -1px;
          }
        }
      }
    }
    .rowPart {
      margin-top: 50px;
      overflow: auto;
    }
  }
}
@media (max-width: 767px) {
  .content {
    padding-left: 15px !important;
    padding-right: 15px !important;
    padding-bottom: 15px !important;
  }
  .status {
    .content {
      header {
        h2 {
          font-size: 20px !important;
          margin-left: 12px !important;
        }
        .share {
          label {
            font-size: 17px !important;
          }
          span {
            font-size: 11px !important;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .content {
    padding: 0 !important;
    padding-top: 40px !important;
    padding-bottom: 15px !important;
  }
}
</style>
