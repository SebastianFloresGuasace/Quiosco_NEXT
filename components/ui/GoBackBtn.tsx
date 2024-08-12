"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function GoBackBtn() {
  
  const router = useRouter() 

  return (
      <button onClick = {() => router.back()} //te devuelve a la page anterior
        className="bg-amber-300 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
      >Cancelar</button>
  )
}
