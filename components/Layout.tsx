import React from 'react'

interface layoutProps {
    children: React.ReactNode
}

const Layout: React.FunctionComponent<layoutProps> = ({ children }) => {
    return (
        <div className='max-w-6xl  mx-auto p-5 m-8 '>
            {children}
        </div>
    )
}

export default Layout