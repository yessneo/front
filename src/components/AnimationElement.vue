<template>
    <div @click="inspect">
        <slot>
        </slot>
    </div>
</template>
<script>
export default {
    methods: {
    inspect() {
      this.$emit("inspect");
    }
  }
}
</script>