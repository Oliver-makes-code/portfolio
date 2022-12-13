/** @jsx h */
/** @jsxFrag */
import { h, Fragment, JSX, VNode } from "preact"

export default function Root(props: {children?: JSX.Element[]|VNode<any>, header: string, next: JSX.Element[]|VNode<any>}) {
    return (
        <Fragment>
            <title>Oliver's Portfolio</title>
            <div class="header">
                <h1 class="text-center">{props.header}</h1>
                <hr></hr>
                <h2 class="text-center">{props.next}</h2>
            </div>
            <div class="content_container">
                <div class="content">
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}