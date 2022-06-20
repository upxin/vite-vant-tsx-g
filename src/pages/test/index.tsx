import { defineComponent, ref } from 'vue';
import { PullRefresh, Cell, List } from 'vant';

export default defineComponent({
  name: `Index`,
  setup() {
    const list = ref<any[]>([]);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);

    const onLoad = () => {
      console.log(999);
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }
        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
    const slots = {
      default: () => (
        <>
          <div>123</div>
        </>
      ),
    };
    return () => {
      return (
        <>
          {' '}
          <PullRefresh v-model={refreshing.value} onRefresh={onRefresh}>
            <List
              v-model:loading={loading.value}
              finished={finished.value}
              finished-text="没有更多了"
              onLoad={onLoad}>
              {list.value?.map((item) => {
                return <Cell>{item}</Cell>;
              })}
            </List>
          </PullRefresh>
        </>
      );
    };
  },
});
