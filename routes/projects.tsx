/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"
import Footer from "../components/nav.tsx"

export default function f() {
    return (
        <Fragment>
            <Root header="These are the main projects I'm working on">
                <Module>
                    <h1 class="text-center">
                        <a href="https://github.com/QuiltMC/quilt-kotlin-libraries">Quilt Kotlin Libraries</a>
                    </h1>
                    <h2 class="text-center">
                        A set of libraries to ease Minecraft mod development
                    </h2>
                    <h3 class="text-center">
                        See <a href="https://quiltmc.org">the QuiltMC website</a>
                    </h3>
                </Module>
                <Module>
                    <h1 class="text-center">
                        <a href="https://github.com/The-ProxyFox-Group/ProxyFox">ProxyFox</a>
                    </h1>
                    <h2 class="text-center">
                        A Discord bot used for managing members of a plural system
                    </h2>
                    <h3 class="text-center">
                        See <a href="https://proxyfox.dev">ProxyFox's website</a> and <a href="https://morethanone.info">morethanone.info</a>
                    </h3>
                </Module>
                <Module>
                    <h1 class="text-center">
                        <a href="https://github.com/The-ProxyFox-Group/ProxyFox-Command">ProxyFox Command</a>
                    </h1>
                    <h2 class="text-center">
                        A standalone command parsing library written in Kotlin, for use in ProxyFox
                    </h2>
                    <h3 class="text-center">
                        It's designed to be as lightweight and extensible as possible.
                    </h3>
                </Module>
            </Root>
            <Footer>Head back <a href="/">home</a>!</Footer>
        </Fragment>
        
    )
}
