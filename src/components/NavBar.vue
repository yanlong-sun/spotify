<template>
  <div class="navContainer">
    <div class="logo">{{ $t('spotify') }}</div>
    <ul class="navItems">
      <li>{{ $t('locations') }}</li>
      <li>{{ $t('beingHere') }}</li>
      <li>{{ $t('diversityEquityAndImpact') }}</li>
      <li>{{ $t('Student') }}</li>
      <li>{{ $t('howWeHire') }}</li>
    </ul>
    <div class="allJobs">{{ $t('allJobs') }}</div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.navContainer {
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  .logo {
    font-weight: 700;
    font-size: 24px;
  }
  .navItems {
    font-size: 18px;
    list-style: none;
    display: flex;
    gap: 32px;
  }
  .allJobs {
    font-size: 22px;
    font-weight: 400;
  }
}
</style>
