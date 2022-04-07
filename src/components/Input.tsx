interface InputProps {
    name: string
    type?: 'text' | 'number'
    text: string
    value: any
    placeholder?: string
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col mr-5">
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                name={props.name}
                type={props.type ?? "text"}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-black rounded-lg text-black
                    w-80
                    foucus:outline-none bg-gray-100 px-4 py-2}
                `}
            />
        </div>
    )
} 