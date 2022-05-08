import React from 'react'

interface CategoryEmojiProps {
    emoji: string,
    group: string,
    handleFilter: (group: string) => void
}

const CategoryEmoji: React.FunctionComponent<CategoryEmojiProps> = ({
    emoji, group, handleFilter
}) => {
    return (
        <React.Fragment>
            <button     onClick={() => handleFilter(group)} className='flex items-baseline justify-start py-2 pl-7 bg-gray-50 rounded-md hover:bg-gray-100 shadow-sm'>
                <span className='text-xl mr-4' role={"img"} aria-label={emoji} >{emoji}</span>
                <p>
                    {group}
                </p>
            </button>
        </React.Fragment>
    )
}

export default CategoryEmoji