/** @jsx h */
/** @jsxFrag */
import { h, Fragment } from "preact"
import Root from "../components/root.tsx"
import Module from "../components/module.tsx"

export default function f() {
    return (
        <Fragment>
            <Root header="Welcome to my portfolio!" next={
                <Fragment>View the code on <a href="https://github.com/Oliver-makes-code/portfolio">GitHub</a>!</Fragment>
            }>
                <Module>
                    <h1 class="text-center">Hello! I'm Oliver</h1>
                    <h3 class="text-center">I'm a 18 year old programmer, and I have been programming since 2015</h3>
                    <h3 class="text-center">I mainly develop using JavaScript, TypeScript, Rust, Java, and Kotlin</h3>
                </Module>
                <Module>
                    <h1 class="text-center">Some <a href="/technologies">technologies</a> I know!</h1>
                    <h2 class="text-center">I know a bit more than just those, and I can learn new ones quickly.</h2>
                </Module>
                <Module>
                    <h1 class="text-center">Check out my <a href="/experience">work experience</a></h1>
                </Module>
                <Module>
                    <h1 class="text-center">Check out my <a href="/education">education history</a></h1>
                </Module>
                <Module>
                    <h1 class="text-center">Check out my <a href="/projects">projects</a>!</h1>
                    <h2 class="text-center">I have many personal projects, but these are my top picks</h2>
                </Module>
            </Root>
        </Fragment>
    )
}
