/** @jsx h */
/** @jsxFrag */
import { h, Fragment, JSX, VNode } from "preact"

export default function Footer(props: {children?: JSX.Element[]|VNode<any>, header: string}) {
    return (
        <Fragment>
            <div class="footer_container">
                <div class="footer">
                    <h2 class="text-center">{props.children}</h2>
                </div>
            </div>
        </Fragment>
    )
}