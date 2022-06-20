<template>
  <router-view v-slot="{ Component, route }">
    <transition appear :name="animation">
      <!-- 不加盒子 和key动画加不上上去 -->
      <div :key="route.path" style="height: 100%; width: 100%; overflow: auto">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
const animation = ref('slide-left');

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  // 这样写 就要求路由定义route的时候 区分一下层级  比如我们定义father 去子路由就应该是father/child
  animation.value = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});
</script>
