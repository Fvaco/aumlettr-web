<template>
  <div>
    <v-toolbar ref="mobileToolbar" 
      fixed 
      flat>
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot"></slot>
    </v-toolbar>
    <div :style="{marginBottom: toolbarHeight}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolbarHeight: 0
    };
  },
  methods: {
    checkToolbarPadding() {
      if (this.$refs.mobileToolbar)
        this.toolbarHeight = this.$refs.mobileToolbar.$el.clientHeight + "px";
    }
  },
  mounted() {
    this.checkToolbarPadding();
  }
};
</script>

<style>
</style>
