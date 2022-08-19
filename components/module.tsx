/** @jsx h */
/** @jsxFrag */
import { h, Fragment, JSX, VNode } from "preact"

export default function Module(props: {children?: JSX.Element[]|VNode<any>}) {
    return (
        <Fragment>
            <div class="module">
                {props.children}
            </div>
        </Fragment>
    )
}