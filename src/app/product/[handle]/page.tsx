"use client"
import { useParams, useSearchParams } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  console.log(params.handle)
  console.log(searchParams.get('id'))

  return (
    <h1>Product Page</h1>
  )
}