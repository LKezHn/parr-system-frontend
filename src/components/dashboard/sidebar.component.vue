<template>

<v-navigation-drawer
  app
  width="260"
  elevation="1"
>

  <!-- Logo / título -->

  <div class="pa-4 d-flex align-center">

    <v-avatar
      color="primary"
      size="36"
      rounded="lg"
      class="mr-3"
    >
      <v-icon icon="mdi-church" color="white"></v-icon>
    </v-avatar>

    <span class="text-subtitle-1 font-weight-bold">
      Sistema Parroquial
    </span>

  </div>

  <v-divider></v-divider>

  <!-- Menu -->

  <v-list density="comfortable" nav color="primary">

    <v-list-item
      prepend-icon="mdi-view-dashboard"
      title="Dashboard"
      to="/dashboard"
      rounded="lg"
    />

    <v-list-item
      prepend-icon="mdi-account-group"
      title="Personas"
      to="/dashboard/personas"
      rounded="lg"
    />

    <!-- Sacramentos -->

    <v-list-group value="sacramentos">

      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-book-open-page-variant"
          title="Sacramentos"
          rounded="lg"
        />
      </template>

      <v-list-item
        title="Bautismos"
        prepend-icon="mdi-water"
        to="/dashboard/bautismos"
        rounded="lg"
        class="pl-4"
      />

      <v-list-item
        title="Confirmaciones"
        prepend-icon="mdi-fire"
        to="/dashboard/confirmaciones"
        rounded="lg"
        class="pl-4"
      />

      <v-list-item
        title="Matrimonios"
        prepend-icon="mdi-ring"
        to="/dashboard/matrimonios"
        rounded="lg"
        class="pl-4"
      />

    </v-list-group>

    <v-list-item
      prepend-icon="mdi-account-cog"
      title="Usuarios"
      to="/dashboard/usuarios"
      rounded="lg"
    />

    <v-list-item
      prepend-icon="mdi-chart-box"
      title="Reportes"
      to="/dashboard/reportes"
      rounded="lg"
    />

    <v-list-item
      prepend-icon="mdi-cog"
      title="Configuración"
      to="/dashboard/configuracion"
      rounded="lg"
    />

  </v-list>

</v-navigation-drawer>

</template>
<script setup>
</script>
