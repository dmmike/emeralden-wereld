<template>
    <div class="ability">
      <p><strong>{{ability.name}}:</strong> <i>{{ability.description}}</i></p>
      <p v-html="ability.effect"></p>
    </div>
</template>

<script>
    export default {
        name: 'aos-ability',
        props: {
          ability: {
            type: Object
          }
        },
    }
</script>

<style scoped>
  .ability {
    text-align: left;
    margin-bottom: 15px;
  }

  p {
    margin-block-start: 5px;
    margin-block-end: 5px;
  }

</style>
