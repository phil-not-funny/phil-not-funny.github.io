"use client"

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, LinkProps {}

const DecoratedLink: React.FC<Props> = ({children, ...props}) => {
    return <Link {...props} className="underline text-pink-600" >{children}</Link>
}

export default DecoratedLink;