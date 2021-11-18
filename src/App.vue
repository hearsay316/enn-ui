<template>
  <div id="app">
    <enn-button>按钮</enn-button>

    <enn-button type="primary">按钮</enn-button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const sentence = "The quick brown fox jumps over the lazy dog.";

    let index = 5;

    console.log(
      `Using an index of ${index} the character returned is ${sentence.at(
        index
      )}`
    );
    console.log(String.prototype.at, [1, 2, 3].at(1));
  },
};
</script>

<style lang="scss">
#app {
}
</style>
