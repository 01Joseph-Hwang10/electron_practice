<script lang="ts">
import inlineStyleProcessor from "src/functions/inline-style-processor";
import unitAppender from "src/functions/unit-appender";

export let size: number;

export let onClick: () => void;

const inlineButtonStyle: string = inlineStyleProcessor({
  width: unitAppender(size, 'rem'),
  height: unitAppender(size, 'rem'),
  "border-radius": unitAppender(size / 2, 'rem'),
});

</script>

<button on:click={onClick} class="text-secondary p-1.5 center" style={inlineButtonStyle}>
  <slot />
</button>
