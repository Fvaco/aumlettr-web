<template>
  <v-layout column :style="{ marginBottom: toolbarHeight }">
    <v-flex>
      <v-toolbar
      extension-height="70"
      :scroll-threshold="100"
      scroll-toolbar-off-screen
      v-bind="$attrs"
      ref="mobileToolbar"
      fixed
      
      flat>
      <slot
        v-for="slot in Object.keys($slots)"
        :name="slot"
        :slot="slot"
      ></slot>
    </v-toolbar>

    </v-flex>
  </v-layout>
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
