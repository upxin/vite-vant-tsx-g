import { defineComponent, onBeforeMount, ref } from 'vue';
import { Button, Calendar, Cell } from 'vant';
import { useTitle } from '@vueuse/core';
import styles from './style/index.module.scss';

export default defineComponent({
  name: `Home`,
  setup() {
    document.title = import.meta.env.VITE_APP_TITLE;
    const title = useTitle();
    const date = ref('');
    const show = ref<boolean>(false);
    onBeforeMount(() => {
      console.log('title', title.value);
      title.value = '123';
      console.log('title', title.value);
    });
    const formatDate = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
    const onConfirm = (value) => {
      show.value = false;
      date.value = formatDate(value);
    };
    return () => {
      return (
        <>
          <div class={styles.test}>Test Vant</div>
          <Button plain type="primary">
            主要按钮
          </Button>
          <Button type="success">成功按钮</Button>
          <Cell
            title="选择单个日期"
            value={date.value}
            onClick={() => {
              show.value = true;
            }}
          />
          <Calendar v-model:show={show.value} onConfirm={onConfirm} />
        </>
      );
    };
  },
});
