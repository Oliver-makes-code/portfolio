/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Root header="These are the main projects I'm working on">
            <Module>
                <h1 class="text-center">
                    <a href="https://github.com/QuiltMC/quilt-kotlin-libraries">Quilt Kotlin Libraries</a>
                </h1>
                <h2 class="text-center">
                    A set of libraries to ease Minecraft mod development
                </h2>
                <h3 class="text-center">
                    See <a href="https://quiltmc.org">https://quiltmc.org</a>
                </h3>
            </Module>
            <Module>
                <h1 class="text-center">
                    <a href="https://github.com/WispLang/Wisp">Wisp</a>
                </h1>
                <h2 class="text-center">
                    A programming language designed around the WASM ecosystem
                </h2>
            </Module>
            <Module>
                <h1 class="text-center">
                    <a href="https://github.com/Protogen-Labs/twisted-forces">Twisted Forces</a>
                </h1>
                <h2 class="text-center">
                    A video game where you control two players at once
                </h2>
            </Module>
            <Module>
                <h1 class="text-center">
                    <a href="https://github.com/ReMod-Software/ExDL">ExDL</a>
                </h1>
                <h2 class="text-center">
                    A more compact representation of XML with the same capabilities. Can transpile into XML
                </h2>
            </Module>
        </Root>
    )
}
