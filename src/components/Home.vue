<template>
  <v-container>

    <v-row>
      <CardInfo
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
      v-bind:count="post.count"
      />
    </v-row>
  </v-container>

</template>

<script>
  import CardInfo from './CardInfo';

  export default {
    name: 'Home',
    components: {
      CardInfo,
    },
    data: () => ({
      posts: [
        { id: 1, title: 'Infusion', count: 1422 },
        { id: 2, title: 'ORs' ,count: 320},
        { id: 3, title: 'Vitalslink', count: 155 },
        { id: 4, title: 'Fetalink' ,count: 620},
        { id: 5, title: 'Bedside Gateway' ,count: 1220},
            ],

      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Raj',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Easily add components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      search: '',
       headers: [
         {
           text: 'Dessert (100g serving)',
           align: 'start',
           sortable: false,
           value: 'name',
         },
         { text: 'Calories', value: 'calories' },
         { text: 'Fat (g)', value: 'fat' },
         { text: 'Carbs (g)', value: 'carbs' },
         { text: 'Protein (g)', value: 'protein' },
         { text: 'Iron (%)', value: 'iron' },
       ],
       desserts: [
         {
           name: 'Frozen Yogurt',
           calories: 159,
           fat: 6.0,
           carbs: 24,
           protein: 4.0,
           iron: '1%',
         },
         {
           name: 'Ice cream sandwich',
           calories: 237,
           fat: 9.0,
           carbs: 37,
           protein: 4.3,
           iron: '1%',
         },
         {
           name: 'Eclair',
           calories: 262,
           fat: 16.0,
           carbs: 23,
           protein: 6.0,
           iron: '7%',
         },
         {
           name: 'Cupcake',
           calories: 305,
           fat: 3.7,
           carbs: 67,
           protein: 4.3,
           iron: '8%',
         },
         {
           name: 'Gingerbread',
           calories: 356,
           fat: 16.0,
           carbs: 49,
           protein: 3.9,
           iron: '16%',
         },
         {
           name: 'Jelly bean',
           calories: 375,
           fat: 0.0,
           carbs: 94,
           protein: 0.0,
           iron: '0%',
         },
         {
           name: 'Lollipop',
           calories: 392,
           fat: 0.2,
           carbs: 98,
           protein: 0,
           iron: '2%',
         },
         {
           name: 'Honeycomb',
           calories: 408,
           fat: 3.2,
           carbs: 87,
           protein: 6.5,
           iron: '45%',
         },
         {
           name: 'Donut',
           calories: 452,
           fat: 25.0,
           carbs: 51,
           protein: 4.9,
           iron: '22%',
         },
         {
           name: 'KitKat',
           calories: 518,
           fat: 26.0,
           carbs: 65,
           protein: 7,
           iron: '6%',
         },
       ],
    }),
  }
</script>
