<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <transition
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutLeft"
        appear
        :duration="380"
      >
        <router-view />
      </transition>
    </q-page-container>
    <q-footer reveal bordered class="bg-white text-white">
      <q-toolbar>

          <q-tabs align="center" style="margin: 0 auto;" class="text-teal" indicator-color="transparent" active-color="blue" v-model="tab">
            <q-route-tab icon="post_add" label="Registro" to="form"></q-route-tab>
          </q-tabs>

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
    }
  }
}
</script>
