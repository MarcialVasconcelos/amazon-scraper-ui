interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    type?: string
    children: any
    onClick?: (body: object) => Promise<void>
}

export default function Button(props:ButtonProps) {    
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${props.color}-700 to-${props.color}-800
            text-white px-2 py-1 mt-5 rounded-md
            ${props.className}`}
        >
            {props.children}
        </button>
    )
}