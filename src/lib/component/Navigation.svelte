<script lang="ts"></script>

<style lang="scss">
  nav {
    background-color: var(--uchu-gray-1);
    overflow-y: auto;
    padding-bottom: 0.75rem;
    padding-top: 0.75rem;

    @media (max-width: 1300px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }

    > div {
      display: flex;
      flex-direction: row;
    }

    a {
      line-height: 1;
      position: relative;
      z-index: 1;

      @media (min-width: 601px) {
        font-size: 1.25rem;
      }

      @media (max-width: 600px) {
        font-size: 1rem;
      }

      &:not(:last-of-type) {
        margin-right: 1rem;
      }

      &:last-of-type {
        flex: 1;
        text-align: right;

        @media (max-width: 600px) {
          padding-right: 1rem;
        }
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

<nav>
  <div class="undershirt">
    <a href="https://whitepaper.dap.sh">whitepaper</a>
    <a href="https://github.com/dap-protocol">github</a>
    <a class="soon" href="https://explore.dap.sh">explorer</a>
    <a class="soon" href="https://chat.dap.sh">forum</a>
    <a class="soon" href="https://learn.dap.sh">documentation</a>
  </div>
</nav>
