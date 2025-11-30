import { useState } from 'react';
// Reusable Dropdown Component

interface DropDownProps {
    title: string,
    content: string
}

export function InfoDropdown({title, content}: DropDownProps) {
const [open, setOpen] = useState(false);

    return (
        <div className="w-full max-w-2xl mb-6">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left text-xl font-semibold py-3 px-4 rounded-2xl shadow transition-all bg-white hover:bg-gray-100"
                >
                {title}
            </button>


            {open && (
                <div className="mt-2 p-4 bg-white rounded-2xl shadow text-base leading-relaxed">
                    {content}
                </div>
            )}
        </div>
    );
}