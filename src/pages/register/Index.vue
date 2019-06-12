<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <div class="container">
          <h4 class="text-center">Register</h4>
          <div class="row justify-center">
            <div class="col-xl-5">
              <div class="form-container">
                <q-input dense outlined label="First Name"></q-input>
                <q-input dense class="q-mt-md" outlined label="Last Name"></q-input>
                <q-input dense class="q-mt-md" outlined label="Username"></q-input>
                <q-input dense class="q-mt-md" outlined label="Email Address"></q-input>
                <q-input dense class="q-mt-md" type="password" outlined label="Password"></q-input>
                <q-input dense class="q-mt-md" type="password" outlined label="Re-type Password"></q-input>
                <q-btn class="full-width q-mt-md text-capitalize no-shadow" color="secondary" label="Register"></q-btn>
                <div class="text-center q-mt-lg">
                  Already have an account? <span class="text-weight-bold link-btn" @click="$router.push('/login')">Login</span>.
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
  name: 'RegisterPage'
}
</script>
