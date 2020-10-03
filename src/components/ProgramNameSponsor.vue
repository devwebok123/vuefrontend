<template>
  <div class="card">
    <div class="col-lg-6 p-0 float-left">
      <input
        v-if="programName == ''"
        class="namesponsor"
        type="text"
        placeholder="Enter Program Name"
      />
      <p v-else class="title">{{ programName }}</p>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Program Manager</div>
        <div class="w-50 float-left value">{{ programManager }}</div>
      </div>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Health</div>
        <div class="w-50 float-left value">
          <b-progress :value="health" class="health"></b-progress>
        </div>
      </div>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Current Stage</div>
        <div class="w-50 float-left value">{{ currentStage }}</div>
      </div>
    </div>
    <div class="col-lg-6 p-0 float-left mt-3 mt-lg-0">
      <input
        v-if="programSponser == ''"
        class="namesponsor"
        type="text"
        placeholder="Enter Program Sponsor"
      />
      <p v-else class="title">{{ programSponser }}</p>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Status as Of</div>
        <div class="w-50 float-left value">
          {{ statusAsOf }}
          <svg
            width="12"
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
        </div>
      </div>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Trend</div>
        <div class="w-50 float-left value">
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M4.13397 0.5C4.51887 -0.166667 5.48113 -0.166666 5.86603 0.5L9.33013 6.5C9.71503 7.16667 9.2339 8 8.4641 8H1.5359C0.766098 8 0.284973 7.16667 0.669873 6.5L4.13397 0.5Z"
              fill="#5AEA16"
            />
          </svg>
          {{ trend }}
        </div>
      </div>
      <div class="p-1 mt-4">
        <div class="w-50 float-left key">Target Start:</div>
        <div class="w-50 float-left value">{{ targetStart }}</div>
      </div>
      <div class="p-1 mt-1">
        <div class="w-50 float-left key end">End:</div>
        <div class="w-50 float-left value">{{ targetEnd }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramNameSponsor",
  data() {
    return {};
  },
  props: {
    programName: String,
    programSponser: String,
    programManager: String,
    health: String,
    currentStage: String,
    statusAsOf: String,
    trend: String,
    targetStart: String,
    targetEnd: String
  },
  components: {},
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.namesponsor {
  background: #eff5f9;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: #6896cc;
  padding: 12px;
}
.title {
  margin-top: 20px;
  font-size: 14px;
  color: #6693c8;
}
.key {
  font-size: 12px;
  color: #6896cc;
}
.value {
  font-size: 12px;
  color: #002958;
}
.key.end {
  padding-left: 44px;
}
</style>
