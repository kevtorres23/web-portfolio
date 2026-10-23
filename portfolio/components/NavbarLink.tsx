"use client"

type LinkProps = {
    text: string;
    isActive?: boolean;
}

export default function NavbarLink(props: LinkProps) {
    return (
        <button className={`text-sm font-normal text-slate-700 cursor-pointer`}>
            {props.text}
        </button>
    )
}