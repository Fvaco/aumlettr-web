<template>
  <div>
    <v-toolbar extension-height="65" scroll-threshold="100" scroll-toolbar-off-screen v-bind="$attrs" ref="mobileToolbar" 
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
    console.log(this);
  }
};
</script>

<style>
</style>
