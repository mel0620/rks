<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="container">
          <h4 class="text-center">Login</h4>
          <div class="row justify-center">
            <div class="col-xl-5">
              <div class="form-container">
                <q-input dense outlined label="Username or Email Address"></q-input>
                <q-input dense class="q-mt-md" type="password" outlined label="Password"></q-input>
                <q-btn class="full-width q-mt-md text-capitalize no-shadow" color="secondary" label="Login"></q-btn>
                <div class="text-center q-mt-lg">
                  Don't have an account yet? <span class="text-weight-bold link-btn" @click="$router.push('/register')">Register Here</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
