import { defineComponent, onBeforeMount, ref } from 'vue';
import { Button, Calendar, Cell, ActionSheet } from 'vant';
import { useTitle } from '@vueuse/core';
import styles from './style/index.module.scss';

export default defineComponent({
  name: `Home`,
  setup() {
    document.title = import.meta.env.VITE_APP_TITLE;
    const title = useTitle();
    const date = ref('');
    const show = ref<boolean>(false);
    const popup = ref(false);
    const formatDate = (d) => `${d.getMonth() + 1}/${d.getDate()}`;
    const onConfirm = (value) => {
      show.value = false;
      date.value = formatDate(value);
    };
    const actions = [
      { name: '着色选项', color: '' },
      { name: '着色选项', color: '' },
      { name: '着色选项', color: '' },
      { name: '着色选项', color: '' },
      { name: '着色选项', color: '' },
    ];
    const slots = {
      default: () => (
        <>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </>
      ),
    };
    const select = (res) => {
      console.log(res);
      res.color = 'red';
    };
    onBeforeMount(() => {
      console.log('title', title.value);
      title.value = '123';
      console.log('title', title.value);
    });
    return () => {
      return (
        <>
          <div class={styles.test}>Test Vant</div>
          <div class={styles.test}>Test Vant</div>
          <div class={styles.test}>Test Vant</div>

          <Button type="primary">主要按钮</Button>
          <Button type="success">成功按钮</Button>
          <Cell
            title="选择单个日期"
            value={date.value}
            onClick={() => {
              show.value = true;
            }}
          />
          <Calendar v-model:show={show.value} onConfirm={onConfirm} />
          <Cell
            isLink
            title={'show Popup'}
            onClick={() => {
              popup.value = true;
            }}></Cell>
          <ActionSheet
            style={{ height: '30%' }}
            actions={actions}
            // vSlots={slots}
            v-model:show={popup.value}
            close-on-click-action
            onSelect={select}
            title="标题"
          />
        </>
      );
    };
  },
});
