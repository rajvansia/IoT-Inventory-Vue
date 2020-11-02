<style>
      .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-bottom: -1px;
        margin-right: -1px;
      }
      .tab-button:hover {
        background: #e0e0e0;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        border: 1px solid #ccc;
        padding: 10px;
      }
    </style>
<template>

  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <v-spacer></v-spacer>
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>
      <v-btn
        href="/"
        text
      >
        <span class="mr-3">BMDI Inventory</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <component v-bind:is="currentTab" class="tab"></component>
    </v-main>
  </v-app>
</template>

<script>

import Home from './components/Home';
import Fetalink from './components/Fetalink';
import ORs from './components/ORs';
import Infusion from './components/Infusion';
import Vitalslink from './components/Vitalslink';
import BmdiGateway from './components/BmdiGateway';


export default {
  name: 'App',

  components: {
    Home,Fetalink,ORs, Infusion, Vitalslink, BmdiGateway
  },

  data: () => ({
  currentTab: "Home",
  tabs: ["Home", "Fetalink", "ORs","Infusion","Vitalslink","BmdiGateway"],
  computed: {
   currentTabComponent: function() {
     return this.currentTab;
   }
 }
    //
  }),
};
</script>
