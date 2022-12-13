/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Fragment>
            <Root header="Current work experience" next={
                <Fragment>Head back <a href="/">home</a>!</Fragment>
            }>
                <Module>
                    <h1 class="text-center">2020-Current</h1>
                    <h2 class="text-center">Freelance Programming</h2>
                    <h3 class="text-center">I develop software for people that commission me</h3>
                </Module>
            </Root>
        </Fragment>
    )
}
