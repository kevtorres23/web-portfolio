"use client";

export default function Button({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <button className={`${className} bg-main text-sm hover:bg-main/90 cursor-pointer text-white px-5 py-2.5 rounded-full`}>
            {children}
        </button>
    )
}