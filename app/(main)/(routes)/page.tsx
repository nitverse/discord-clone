import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='p-3 my-3 mx-4'>
      <UserButton afterSignOutUrl='/'/>
      <ModeToggle />
    </div>
  )
}
