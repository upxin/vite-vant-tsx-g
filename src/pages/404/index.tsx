import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
  emits: [],
  setup() {
    return () => {
      return <>404</>;
    };
  },
});
