import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='p-3 my-3'>
      This is a protected route
      <Button > <Link href='/sign-in'>Login</Link></Button>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}
