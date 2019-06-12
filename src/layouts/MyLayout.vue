<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar class="bg-black">
        <div class="container q-my-sm">
          <div class="row items-center justify-between">
            <div class="col-xl-2">
              <div class="row items-center q-gutter-sm">
                <div v-if="$q.platform.is.mobile">
                  <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
                </div>
                <div class="brand">
                  <a href="javascript:" class="row items-center" @click="$router.push('/')">
                    <img src="../assets/logo.svg" v-if="$q.platform.is.desktop" width="80" alt="">
                    <img src="../assets/logo.svg" v-if="$q.platform.is.mobile" width="60" alt="">
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-5" v-if="$q.platform.is.desktop">
              <div class="search">
                <q-input value="" dark filled dense placeholder="Search for products..."></q-input>
              </div>
            </div>
            <div class="action">
              <div class="action__buttons">
                <q-btn round class="q-mr-sm" icon="mdi-magnify" v-if="$q.platform.is.mobile"></q-btn>
                <q-btn round class="q-mr-sm" icon="mdi-heart-outline"></q-btn>
                <q-btn-dropdown v-model="menu" rounded icon="mdi-account-circle-outline">
                  <q-list>
                    <q-item clickable v-close-popup @click="$router.push('/login')">
                      <q-item-section avatar>
                        <q-avatar size="28px" icon="mdi-key-variant" color="blue" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Login</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item clickable v-close-popup @click="$router.push('/register')">
                      <q-item-section avatar>
                        <q-avatar size="28px" icon="mdi-account-plus" color="secondary" text-color="white" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>Register</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </div>
        </div>
      </q-toolbar>

      <div class="container" v-if="$q.platform.is.desktop">
        <q-tabs align="justify" indicator-color="secondary">
          <q-route-tab to = "/" class="text-capitalize" label = "Computer Repair" />
          <q-route-tab to = "/" class="text-capitalize" label = "Networking" />
          <q-route-tab to = "/" class="text-capitalize" label = "Reformatting" />
          <q-route-tab to = "/" class="text-capitalize" label = "Logo Design" />
          <q-route-tab to = "/" class="text-capitalize" label = "Web Development" />
          <q-route-tab to = "/" class="text-capitalize" label = "Ecommerce" />
        </q-tabs>
      </div>
    </q-header>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',

  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop
      menu: false,
      leftDrawer: false
    }
  },

  methods: {
    openURL,
    onItemClick () {
      alert('Clicked on an Item')
    }
  }

}
</script>

<style lang="stylus">
.brand
  img
    filter invert(100%)
</style>
