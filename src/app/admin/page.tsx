'use client'

import { signIn } from "next-auth/react"
import "../(app)/globals.css"
import { Button } from "@nextui-org/react"

export default function Component() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col">
        <h1>Admin</h1>
        <Button
          onClick={() => signIn()}
          color="secondary"
          variant="flat"
        >
          Sign in
        </Button>
      </div>
    </>
  )
}