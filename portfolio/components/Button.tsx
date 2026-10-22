"use client";

export default function Button({children, className}: {children: React.ReactNode, className?: Text}) {
    return (
        <button className={`${className} bg-main text-sm hover:bg-main/90 cursor-pointer text-white px-5 py-2 rounded-full`}>
            {children}
        </button>
    )
}