<template>
  <div class="mainContainer">
    <div class="items">
      <div class="headLine">{{ $t('joinTheBand') }}</div>
      <button class="btn-allJobs">{{ $t('exploreAllJobs') }}</button>
      <div class="searchBox">
        <img
          class="searchIcon"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjM4NyAxNC42MjNBOC40NyA4LjQ3IDAgMDAxNyA4LjUgOC41IDguNSAwIDEwOC41IDE3YTguNDU0IDguNDU0IDAgMDA1LjEyNS0xLjczbDQuNDAxIDUuMTUzLjc2LS42NDktNC4zOTktNS4xNTF6TTguNSAxNkM0LjM2NCAxNiAxIDEyLjYzNiAxIDguNVM0LjM2NCAxIDguNSAxIDE2IDQuMzY0IDE2IDguNSAxMi42MzYgMTYgOC41IDE2eiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg=="
        />
        <input class="inputBox" type="text" :placeholder="$t('searchJobs')" />
        <button class="btn-search">&rarr;</button>
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
    width: 90%;
    position: absolute;
    top: 30%;
    left: 5%;
    .headLine {
      font-size: 72px;
      font-weight: bold;
      margin-bottom: 28px;
      color: #ffffff;
    }
    .btn-allJobs {
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
    .searchBox {
      width: 95%;
      position: relative;
      .searchIcon {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 22px;
        bottom: 20px;
        color: #ffffff;
      }

      .inputBox {
        margin-top: 10%;
        width: 100%;
        height: 64px;
        border-radius: 40px;
        border: none;
        background-color: #ff4632;
        font-size: 22px;
        padding-left: 64px;
      }
      ::placeholder {
        color: #ffffff;
      }
      .inputBox:focus {
        outline-width: 0;
        background-color: #ffffff;
        outline: 1px solid #191414;
        .btn-search {
          border: 1px solid #191414;
        }
      }
      .btn-search {
        position: absolute;
        right: -55px;
        bottom: 6px;
        height: 58px;
        width: 58px;
        border-radius: 50%;
        border: none;
        font-size: 28px;
        background-color: #ffffff;
      }
    }
  }
}
</style>
