import { defineComponent, onBeforeMount, ref } from 'vue';
import { Button, Calendar, Cell, ActionSheet } from 'vant';
import { useTitle, useMouse, useFetch, createFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { Api } from '@/api/url';
import styles from './style/index.module.scss';
import { fetch } from '@/utils/request';

export default defineComponent({
  name: `Index`,
  setup() {
    const title = useTitle();
    const date = ref('');
    const show = ref<boolean>(false);
    const popup = ref(false);
    const formatDate = (d: any) => `${d.getMonth() + 1}/${d.getDate()}`;
    const onConfirm = (value: any) => {
      show.value = false;
      date.value = formatDate(value);
    };
    const router = useRouter();
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
    const select = (res: any) => {
      console.log(res);
      res.color = 'red';
    };
    const getData = () => {
      const { isFetching, error, data } = fetch(Api.GET_REST);
    };
    onBeforeMount(() => {
      title.value = '123';
      // "x" and "y" are refs
      const { x, y } = useMouse();
    });
    return () => {
      return (
        <>
          <div class={styles.test}>Test Vant</div>
          <div class={styles.test}>Test Vant</div>
          <div class={styles.test}>Test Vant</div>
          <Button
            type="primary"
            onClick={() => {
              router.push({ path: '/home/test' });
            }}>
            Test
          </Button>
          <Button
            type="primary"
            onClick={() => {
              router.push({ path: '/home/goods' });
            }}>
            Goods
          </Button>
          <Button type="success" onClick={getData}>
            成功按钮
          </Button>
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
