<script>
import AppMobileToolbar from "./AppMobileToolbar.vue";
export default {
  functional: true,
  render(h, context) {
    if (context.parent.$vuetify.breakpoint.smAndDown) {
      let parsedChildren = context.children.map(child => {
        if (child.data.slot)
          return h("div", child.data, context.slots()[child.data.slot]);
        return child;
      });
      return h(AppMobileToolbar, parsedChildren);
    }
  }
};
</script>
