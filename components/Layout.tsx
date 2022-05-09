import React, { useState } from 'react'

interface layoutProps {
    children: React.ReactNode
}


const Layout: React.FunctionComponent<layoutProps> = ({ children }) => {
    const [DarkMode, setDarkMode] = useState(false);

    return (
        <div className={DarkMode ? "dark" : "" }>
            <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-900 black max-w mx-auto px-12 py-6 '>    <button
                type="button"
                onClick={() => setDarkMode(!DarkMode)}
                className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-3 py-1 hover:shadow-lg m-1"
            >
                {DarkMode ? "💡 Light" : "🌙 Dark"}
            </button>
            {children}
            </div>
         
        </div>
    )
}

export default Layout