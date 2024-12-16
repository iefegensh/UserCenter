<template>
  <div id="globalHeader">
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";

const current = ref<string[]>(["mail"]);
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
