<template>
  <div class="skeletonContainer row items-center q-col-gutter-sm">
    <div class="col-12 col-sm-4">
      <q-responsive :ratio="1">
        <q-skeleton class="rounded-borders" />
      </q-responsive>
    </div>
    <div class="col-12 col-sm-8">
      <q-skeleton class="rounded-borders" height="150px" />
    </div>
    <div class="row q-gutter-sm">
      <q-skeleton type="QChip" width="100px" v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.skeletonContainer {
  width: 100%;
}
</style>
