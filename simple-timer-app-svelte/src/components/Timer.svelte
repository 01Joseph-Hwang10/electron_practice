<script lang="ts">
import formatIntToTime from "src/functions/format-int-to-time";

import { TimerStore } from "src/store/timer";

    let _elapsed: number;

    TimerStore.elapsed.subscribe((elapsed) => _elapsed = elapsed);

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"> 
</svelte:head>

<section id="timer-section" class="center">
    <span class="font-bold text-highlight">{formatIntToTime(_elapsed)}</span>
</section>

<style lang="scss">
    #timer-section {
        span {
            font-size: 5rem;
            font-family: 'Oswald', sans-serif;
        }
    }
</style>