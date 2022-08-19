/** @jsx h */
/** @jsxFrag */
import { h, Fragment, JSX, VNode } from "preact"

export default function Root(props: {children?: JSX.Element[]|VNode<any>, header: string}) {
    return (
        <Fragment>
            <div class="header">
                <h1 class="text-center">{props.header}</h1>
            </div>
            <div class="content">
                {props.children}
            </div>
            <div class="footer">
                <h2 class="text-center">
                    View the code on <a href="https://github.com/Oliver-makes-code/resume">GitHub</a>!
                </h2>
            </div>
        </Fragment>
    )
}