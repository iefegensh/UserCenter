<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">Shen</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="80px">
        <div class="user-login-status">
          <a-button type="primary" href="/user/login">Login</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";

const router = useRouter();

// After clicking menu, Router Jump Event
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>(["mail"]);
// Listen for route changes and update the current menu selection status.
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});

const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "Home",
    title: "Home",
  },
  {
    key: "/user/login",
    label: "User Login",
    title: "User Login",
  },
  {
    key: "/user/register",
    label: "User Register",
    title: "User Register",
  },
  {
    key: "/admin/userMange",
    icon: () => h(CrownOutlined),
    label: "User Management",
    title: "User Management",
  },
  {
    key: "others",
    label: h(
      "a",
      { href: "https://iefegensh.github.io/GefeiShen/", target: "_blank" },
      "Gefei Shen's Personal Webpage"
    ),
    title: "Gefei Shen's Personal Webpage",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
