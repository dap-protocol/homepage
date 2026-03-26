<script lang="ts">
  /*** IMPORT ------------------------------------------- ***/
  import { onMount } from "svelte";

  /*** UTILITY ------------------------------------------ ***/
  import Navigation from "$lib/component/Navigation.svelte";

  /*** STATE -------------------------------------------- ***/
  let feature1: HTMLDetailsElement;
  let feature1open = $state(true);
  let feature2: HTMLDetailsElement;
  let feature2open = $state(false);
  let feature3: HTMLDetailsElement;
  let feature3open = $state(false);
  let feature4: HTMLDetailsElement;
  let feature4open = $state(false);
  let windowWidth = $state(0);

  /*** PROGRAM ------------------------------------------ ***/
  onMount(() => {
    windowWidth = document.body.clientWidth;
  });

  /*** HELPER ------------------------------------------- ***/
  function handleResize(event: Event) {
    windowWidth = (event.target as Window).innerWidth;
  }

  function toggleFeature(num: number, event: Event) {
    if ((event.target as HTMLElement)?.closest("details")?.open === true)
      event.preventDefault();

    switch(num) {
      case 1: {
        feature1open = true;
        feature2open = false;
        feature3open = false;
        feature4open = false;
        break;
      }

      case 2: {
        feature1open = false;
        feature2open = true;
        feature3open = false;
        feature4open = false;
        break;
      }

      case 3: {
        feature1open = false;
        feature2open = false;
        feature3open = true;
        feature4open = false;
        break;
      }

      case 4: {
        feature1open = false;
        feature2open = false;
        feature3open = false;
        feature4open = true;
        break;
      }
    }
  }
</script>

<style lang="scss">
  section {
    line-height: 1.55;
    padding: 2rem;

    @media (min-width: 601px) {
      font-size: 1.25rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }

    &.intro {
      @media (max-width: 900px) {
        u-grid:not(:last-of-type) {
          margin-bottom: 1rem;
        }

        u-cell {
          --grid-ce: 12;
          --grid-cs: 12;
          grid-column-end: span var(--grid-ce);
          grid-column-start: auto;
        }
      }
    }

    &.features {
      @media (min-width: 601px) {
        min-height: 350px;
      }

      @media (max-width: 600px) {
        min-height: 290px;
      }

      details:not([open]) {
        @media (max-width: 900px) {
          position: relative;

          summary {
            position: absolute;
            white-space: nowrap;
            width: 100%;
            writing-mode: vertical-rl;
          }
        }
      }

      summary {
        font-weight: 600;
        line-height: 1.55;
        list-style: none;
        user-select: none;
        -webkit-user-select: none;

        @media (min-width: 601px) {
          font-size: 1.25rem;
        }

        @media (max-width: 600px) {
          font-size: 1rem;
        }
      }
    }

    &.roadmap {
      @media (max-width: 600px) {
        u-cell {
          --grid-ce: 12;
          --grid-cs: 12;
        }
      }

      h3 {
        font-size: inherit;
      }
    }

    p {
      + p {
        margin-top: 1rem;
      }

      strong {
        font-weight: 600;
      }
    }

    a {
      position: relative;

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

  header {
    background-color: var(--uchu-yin);
    color: var(--uchu-yang);
    overflow: hidden;
    padding-bottom: 2rem;
    padding-top: 2rem;
    position: relative;

    @media (min-width: 1301px) {
      height: 225px;
    }

    &::after {
      width: 100%; height: 100%;
      top: 0; left: 0;

      background-image: url("/dotgrid.svg");
      background-repeat: repeat;
      background-size: 20px;
      content: "";
      position: absolute;

      @media (min-width: 601px) {
        background-position: bottom;
        filter: invert(1) opacity(0.5);
      }

      @media (max-width: 600px) {
        background-position: center;
        filter: invert(1) opacity(0.3);
      }
    }

    u-grid {
      position: relative;
      z-index: 1;

      @media (max-width: 1300px) {
        u-cell {
          --grid-ce: 12;
          --grid-cs: 12;
        }
      }
    }

    h1 {
      background-image: url("/logo.svg");
      width: 100%;

      @media (min-width: 1301px) {
        background-position: right;
      }

      @media (max-width: 1300px) {
        background-position: center;
      }

      @media (min-width: 601px) {
        height: 150px;
      }

      @media (max-width: 600px) {
        height: 75px;
      }
    }

    .h2-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 1300px) {
        align-items: center;
        text-align: center;
      }

      h2 {
        @media (min-width: 601px) {
          font-size: 2.75rem;
        }

        @media (max-width: 600px) {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>

<svelte:window on:resize={handleResize}/>

<section class="intro">
  <u-grid class="undershirt" columns=12>
    <u-cell span=6>
      <p><strong>the DNS is pretty damn good.</strong> after all, it’s how you got to this site, <a href="/">dap.sh</a>, in the first place. if you look close though, you can see cracks in the foundation; gatekeepers, centralization, security breaches, and censorship.</p>
    </u-cell>
  </u-grid>

  <u-grid class="undershirt" columns=12>
    <u-cell span=7-12>
      <p>many have tried to fix this. <strong>all have failed.</strong> we’re trying something different. introducing:</p>
    </u-cell>
  </u-grid>
</section>

<header>
  <u-grid columns=12>
    <u-cell span=6>
      <h1 class="hide-text">dap</h1>
    </u-cell>

    <u-cell class="h2-wrapper" span=4>
      <h2>a secure foundation for <br/>the neue internet</h2>
    </u-cell>
  </u-grid>
</header>

<section class="features">
  <u-grid class="undershirt" columns=12>
    <u-cell span={feature1open ? (windowWidth <= 900 ? 9 : 6) : (windowWidth <= 900 ? 1 : 2)}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <details bind:this={feature1} name="features" onclick={(e) => toggleFeature(1, e)} open>
        <summary>user-friendly</summary>

        <p>do you need to know blockchain to use this? initially, yes.</p>
        <p>in the future? <strong>no.</strong></p>

        <p>you may have no idea what <abbr title="Voice over Internet Protocol">voip</abbr> is but if you’ve ever skype’d or facetime’d, you’ve used it. our goal is to become so useful that grandma can dap you up without ever knowing wtf dap is.</p>
      </details>
    </u-cell>

    <u-cell span={feature2open ? (windowWidth <= 900 ? 9 : 6) : (windowWidth <= 900 ? 1 : 2)}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <details bind:this={feature2} name="features" onclick={(e) => toggleFeature(2, e)}>
        <summary>energy efficient</summary>
        <p>dap uses a holy trinity of goodness to be 90+% better than most blockchains; <strong>vdf, vrf, and blake3 proof‑of‑work.</strong></p>
        <p>basically, complex math and algortihms to be more secure <strong>and</strong> less wasteful.</p>
        <p>nerd out in our <a class="soon" href="/">documentation</a> and <a class="soon" href="/">source code</a>.</p>
      </details>
    </u-cell>

    <u-cell span={feature3open ? (windowWidth <= 900 ? 9 : 6) : (windowWidth <= 900 ? 1 : 2)}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <details bind:this={feature3} name="features" onclick={(e) => toggleFeature(3, e)}>
        <summary>anti-squat</summary>
        <p>to some extent, squatting is expected in any naming system&hellip;but it always gets out of hand.</p>
        <p>dap is a democratized naming system and as such, squatting mitigations are embedded in the protocol; <strong>progressive minimums</strong> when bidding and <strong>build requirements</strong> when auctions are won.</p>
        <p>legitimate utilization is rewarded.</p>
      </details>
    </u-cell>

    <u-cell span={feature4open ? (windowWidth <= 900 ? 9 : 6) : (windowWidth <= 900 ? 1 : 2)}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <details bind:this={feature4} name="features" onclick={(e) => toggleFeature(4, e)}>
        <summary>superb dx</summary>
        <p>building the neue internet is no small feat. we can supply the foundation but it’s up to designers, developers, and <del>degenerates</del> artists to make it the place to be.</p>
        <p>we’re committed to providing comprehensive <a class="soon" href="/">documentation</a>, <a class="soon" href="/">sdk</a>s, <a class="soon" href="/">api</a>s, and so on to ensure <strong>building on dap is smooth af</strong>.</p>
      </details>
    </u-cell>
  </u-grid>
</section>

<Navigation/>

<section class="roadmap">
  <u-grid class="undershirt" columns=12>
    <u-cell span=6>
      <h3>roadmap</h3>

      <p>our testnet is going to be <strong>busy</strong>; consensus, mining, auctions, wallet, dns, edge-cases, tutorials, &c. if you’re interested in participating or following along, our <a href="https://www.webb.page/index.php?board=5.0">forum</a> is the best place to do that.</p>
    </u-cell>

    <u-cell span=5>
      <h3>phase 0</h3>
      <p>finish node software &bull; internal testing &bull; all light tests passing &bull; all heavy tests (requiring powerful servers) passing</p>
    </u-cell>

    <u-cell span=4>
      <h3>phase 1</h3>
      <p>seed node setup &bull; early node operator documentation &bull; basic testnet faucet</p>
    </u-cell>

    <u-cell span=4>
      <h3>phase 2</h3>
      <p>private testnet &bull; seed node deployment &bull; test consensus and auctions &bull; verify dns updates &bull; testnet reset (if applicable)</p>
    </u-cell>

    <u-cell span=4>
      <h3>phase 3</h3>
      <p>public testnet &bull; enhanced testnet faucet &bull; block explorer &bull; lots of documentation &bull; network health monitoring</p>
    </u-cell>

    <u-cell span=4>
      <h3>phase 4</h3>
      <p>edge case fixes &bull; gui wallet &bull; resolvers for testnet tlds</p>
    </u-cell>

    <u-cell span=8>
      <h3>phase 5 &amp; beyond</h3>
      <p>mainnet launch &bull; sdk &bull; enhanced block explorer &bull; light clients &bull; registry/registrar software &bull; a more creative, beautiful, secure internet</p>
    </u-cell>
  </u-grid>
</section>
