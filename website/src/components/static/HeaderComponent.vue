<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">Sign in</router-link> |
    <router-link to="/signup">Sign up</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>