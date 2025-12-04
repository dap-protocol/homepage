<script lang="ts">
  /*** UTILITY ------------------------------------------ ***/
  import favicon from "$lib/asset/favicon.svg";
  import Footer from "$lib/component/Footer.svelte";

  /*** STATE -------------------------------------------- ***/
  let { children } = $props();
</script>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    font-family: "dap sans", system-ui, sans-serif;
  }

  main {
    flex: 1;
  }

  :global(.soon) {
    position: relative;

    &::before {
      top: -7px; right: -7px;

      background-color: var(--uchu-red-4);
      color: var(--uchu-yang);
      content: "soon";
      font-size: 8px;
      line-height: 1;
      padding: 2px 5px;
      position: absolute;
      transform: rotate(9deg);
      z-index: -1;
    }
  }
</style>

<svelte:head>
  <meta name="description" content="Dap is a decentralized naming system and certificate authority. It aims to be the secure DNS upgrade for everyone."/>
  <title>Dap &bull; The DNS upgrade for everyone</title>
  <link rel="icon" href={favicon}/>
</svelte:head>

<main>
  {@render children()}
</main>

<Footer/>
