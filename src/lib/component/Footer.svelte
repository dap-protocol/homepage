<script lang="ts">
  /*** IMPORT ------------------------------------------- ***/
  import { onMount } from "svelte";

  /*** UTILITY ------------------------------------------ ***/
  const backronyms = [
    "Decentralized Access Points",
    "Distributed Area Portals",
    "Dat Aura Power",
    "Destiny Awaits, Peons!",
    "Dastardly Audacious Personas",
    "Dark Augments Privacy",
    "DNS And Providence",
    "Decentralization Always Prudent"
  ];

  /*** STATE -------------------------------------------- ***/
  let tagline = $state("");

  /*** PROGRAM ------------------------------------------ ***/
  onMount(() => {
    tagline = backronyms[Math.floor(Math.random() * backronyms.length)];
  });
</script>

<style lang="scss">
  footer {
    background-color: var(--uchu-gray-1);
    color: var(--uchu-yin-5);
    line-height: 1;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;

    @media (max-width: 1300px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    @media (min-width: 601px) {
      font-size: 1.25rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: end;
    }

    a {
      flex: 1;
      position: relative;
      z-index: 1;

      @media (min-width: 601px) {
        text-align: right;
      }

      @media (max-width: 600px) {
        text-align: center;
      }

      &::after {
        width: calc(100% + 2px); height: calc(100% + 4px);
        top: -2px; left: -1px;

        content: "";
        position: absolute;
        z-index: -1;
      }

      &:not(:hover) {
        color: var(--uchu-yin-5);
      }

      &:hover {
        color: var(--uchu-yang);

        &::after {
          background-color: var(--uchu-yin);
        }
      }
    }
  }
</style>

<footer>
  <div class="undershirt">
    <a href="/">{String(tagline).toLowerCase()} /// dap</a>
  </div>
</footer>
