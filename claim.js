'use client'
import { useState } from 'react'

export default function Claim() {
  const [loading, setLoading] = useState(false)

  const handleClaim = async () => {
    setLoading(true)
    alert("Vault claim logic goes here.")
    setLoading(false)
  }

  return (
    <main style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>Claim Your Vault</h1>
      <button onClick={handleClaim} disabled={loading}>
        {loading ? 'Processing…' : 'Claim Now'}
      </button>
    </main>
  )
}