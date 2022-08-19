/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { InnerRenderFunction, RenderContext, start } from "$fresh/server.ts"
import manifest from "./fresh.gen.ts"

async function render(ctx: RenderContext, render: InnerRenderFunction) {
    render()
    ctx.styles.splice(0, ctx.styles.length, await Deno.readTextFile("./static/style.css"))
}

await start(manifest, { render })
