type LinkProps = {
    text: string;
    isActive?: boolean;
}

export default function NavbarLink(props: LinkProps) {
    return (
        <button className={`text-sm font-normal text-slate-600`}>
            {props.text}
        </button>
    )
}