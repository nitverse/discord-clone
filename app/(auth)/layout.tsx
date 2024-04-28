import { FC } from 'react'

interface layoutProps {
  children:React.ReactNode
}

const Authlayout: FC<layoutProps> = ({children}) => {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
        {children}
    </div>
  )
}

export default Authlayout