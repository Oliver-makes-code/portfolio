/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Fragment>
            <Root header="Education" next={
                <Fragment>Head back <a href="/">home</a>!</Fragment>
            }>
                <Module>
                    <h1 class="text-center">High School</h1>
                    <h2 class="text-center">I'm newly out of High School and am looking for something to take up free-time</h2>
                </Module>
            </Root>
        </Fragment>
    )
}
