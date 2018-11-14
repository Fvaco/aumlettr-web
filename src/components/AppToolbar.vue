

<script>
import AppMobileToolbar from './AppMobileToolbar.vue';
export default {
  functional: true,
  render(h, context){
    if(context.parent.$vuetify.breakpoint.smAndDown){
      let betterChildren = context.children.map(child => {
          if(!!child.data.slot) return h("div", child.data, context.slots()[child.data.slot])
          return child;
        });
        console.log(context.children);
        console.log(betterChildren);
        console.log(context.data);
      return h(
        AppMobileToolbar,
        betterChildren
      )
    }
    
  },
}
</script>