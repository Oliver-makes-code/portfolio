/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Root header="Education">
            <Module>
                <h1 class="text-center">High School</h1>
                <h2 class="text-center">I am currently on my fourth year of high school.</h2>
            </Module>
        </Root>
    )
}