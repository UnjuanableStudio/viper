<template>
  <unj-scroll-page :size="3" scrollbar>
    <template #page1>
      <div style="background-color: bisque; height: 100%">
        page1
      </div>
    </template>
    <template #page2>
      <div style="background-color: olivedrab; height: 100%">
        page2
      </div>
    </template>
    <template #page3>
      <div style="background-color: blue; height: 100%">
        page3
      </div>
    </template>
    <template #footer>
      <div style="background-color: red; height: 300%">
        <p v-for="n in 100">{{ n }}</p>
      </div>
    </template>
  </unj-scroll-page>
</template>

<script>
export default {
  name: "TestScrollPage"
}
</script>

<style scoped>

</style>