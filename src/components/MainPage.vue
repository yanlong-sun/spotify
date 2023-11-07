<template>
  <div class="mainContainer">
    <div class="items">
      <div class="headLine">{{ $t('joinTheBand') }}</div>
      <button class="btn-allJobs">{{ $t('exploreAllJobs') }}</button>
      <div class="searchBar">
        <input class="inputBox" type="text" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.mainContainer {
  min-height: 100vh;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: 20% 90%;
  background-repeat: no-repeat;
  .items {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    left: 30px;
    top .headLine {
      font-size: 72px;
      font-weight: bold;
      color: #ffffff;
      flex: 3;
      text-justify: end;
    }
    .btn-allJobs {
      flex: 3;
      height: 72px;
      width: 220px;
      border: none;
      border-radius: 40px;
      background-color: #191414;
      font-size: 20px;
      font-weight: 500;
      color: #ffffff;
    }
    .btn-allJobs:hover {
      background-color: #ff4632;
      border: 1px #191414 solid;
      transition: all ease 0.2s;
      color: #191414;
    }
    .searchBar {
      flex: 3;
      height: 64px;
    }
  }
}
</style>
