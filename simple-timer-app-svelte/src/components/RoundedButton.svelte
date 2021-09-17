<script lang="ts">
import { classNameConcatenator, inlineStyleProcessor } from "src/functions/inline-processor";
import unitAppender from "src/functions/unit-appender";

export let size: number;
export let color: string;

export let onClick: () => void;

const unit = 'rem';

const inlineButtonStyle: string = size ? inlineStyleProcessor({
  width: unitAppender(size, unit),
  height: unitAppender(size, unit),
  "border-radius": unitAppender(size / 2, unit),
}) : "";

</script>

<button on:click={onClick} class={classNameConcatenator("p-1.5 center", color ?? "transparent")} style={inlineButtonStyle}>
  <slot />
</button>
