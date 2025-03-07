"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Candidate, voteForCandidate } from "@/lib/data"
import { useToast } from "@/components/ui/use-toast"
import { Check } from "lucide-react"

interface CandidateCardProps {
  candidate: Candidate
  showVotes?: boolean
  onVote?: (candidateId: string) => void
}

export function CandidateCard({ candidate, showVotes = false, onVote }: CandidateCardProps) {
  const [isVoting, setIsVoting] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const { toast } = useToast()

  const handleVote = () => {
    setIsVoting(true)

    // Simulate API call
    setTimeout(() => {
      const success = voteForCandidate(candidate.id)

      if (success) {
        setHasVoted(true)
        toast({
          title: "Vote Recorded",
          description: `You have successfully voted for ${candidate.name}`,
        })

        if (onVote) {
          onVote(candidate.id)
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to record your vote. Please try again.",
          variant: "destructive",
        })
      }

      setIsVoting(false)
    }, 1000)
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="relative w-full aspect-square mb-2 bg-muted rounded-md overflow-hidden">
          <Image src={candidate.imageUrl || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
        </div>
        <h3 className="font-semibold text-lg">{candidate.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="outline">{candidate.position}</Badge>
          <Badge variant="secondary">{candidate.party}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {showVotes && (
          <p className="text-sm text-muted-foreground">
            Current votes: <span className="font-semibold">{candidate.votes}</span>
          </p>
        )}
      </CardContent>
      <CardFooter>
        {!showVotes && (
          <Button className="w-full" onClick={handleVote} disabled={isVoting || hasVoted}>
            {isVoting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-background"></span>
                Voting...
              </span>
            ) : hasVoted ? (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                Voted
              </span>
            ) : (
              "Vote"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

