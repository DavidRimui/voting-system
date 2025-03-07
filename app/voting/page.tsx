"use client"

import { ProtectedRoute } from "@/components/auth/protected-route"
import { VotingPlatform } from "@/components/voting/voting-platform"

export default function VotingPage() {
  return (
    <ProtectedRoute>
      <VotingPlatform />
    </ProtectedRoute>
  )
}

