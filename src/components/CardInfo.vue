<template>
    <v-card
  color="light"

  class="mx-auto"
  max-width="344"
>
  <v-list-item three-line>
    <v-list-item-content>

      <v-list-item-title class="headline mb-1">
        {{title}} {{count}}
      </v-list-item-title>
     </v-list-item-content>

  </v-list-item>

  <v-card-actions>

  </v-card-actions>
</v-card>

</template>

<script>
  export default {
    name: 'CardInfo',
    props: ['title','count'],

  }
</script>
