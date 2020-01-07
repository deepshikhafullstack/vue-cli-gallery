<template>
  <b-navbar type="dark" variant="secondary">
    <b-navbar-brand href="#" class="m-auto">{{ title }}</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: 'Blog'
        }
    }
};
</script>

<style></style>
