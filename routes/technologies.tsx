/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Fragment>
            <Root header="These are the main technologies I know and commonly use" next={
                <Fragment>Head back <a href="/">home</a>!</Fragment>
            }>
                <Module>
                    <h1 class="text-center">
                        <a href="https://reactjs.com/">React</a>
                    </h1>
                    <h2 class="text-center">
                        "A JavaScript library for building user interfaces" - React
                    </h2>
                    <h3 class="text-center">
                        This website is programmed with Preact, a smaller, faster reimplementation of React
                    </h3>
                </Module>
                <Module>
                    <h1 class="text-center">
                        <a href="https://kotlinlang.org/">Kotlin</a>
                    </h1>
                    <h2 class="text-center">
                        "A modern programming language that makes developers happier." - JetBrains (Kotlin maintainers)
                    </h2>
                </Module>
                <Module>
                    <h1 class="text-center">
                        <a href="https://mongodb.com/">MongoDB</a>
                    </h1>
                    <h2 class="text-center">
                        A modern document-based database
                    </h2>
                </Module>
            </Root>
        </Fragment>
        
    )
}
