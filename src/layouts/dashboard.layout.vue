<template>

<v-app>

  <SidebarComponent/>

  <v-main>

    <TopbarComponent />
    <v-container fluid>
      <router-view />
    </v-container>

  </v-main>

</v-app>

</template>

<script setup>
import SidebarComponent from "@/components/dashboard/sidebar.component.vue";
import TopbarComponent from "@/components/dashboard/topbar.component.vue";
</script>