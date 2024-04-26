import { FC } from 'react'

interface layoutProps {
  children:React.ReactNode
}

const Authlayout: FC<layoutProps> = ({children}) => {
  return (
    <div className='bg-red-500 h-full'>
        {children}
    </div>
  )
}

export default Authlayout