"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type Candidate, voteForCandidate } from "@/lib/data"
import { useToast } from "@/components/ui/use-toast"
import { Check, Minus, Plus } from "lucide-react"

interface CandidateCardProps {
  candidate: Candidate
  showVotes?: boolean
  onVote?: (candidateId: string, voteCount: number) => void
  categoryName?: string
}

const VOTE_PRICE = 10 // KES per vote

export function CandidateCard({ candidate, showVotes = false, onVote, categoryName }: CandidateCardProps) {
  const [isVoting, setIsVoting] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const [voteCount, setVoteCount] = useState(1)
  const { toast } = useToast()

  const handleVote = () => {
    setIsVoting(true)

    // Simulate API call
    setTimeout(() => {
      let success = true

      // Apply multiple votes
      for (let i = 0; i < voteCount; i++) {
        const voteSuccess = voteForCandidate(candidate.id)
        if (!voteSuccess) {
          success = false
          break
        }
      }

      if (success) {
        setHasVoted(true)
        toast({
          title: "Votes Recorded",
          description: `You have successfully voted for ${candidate.name} with ${voteCount} vote${voteCount > 1 ? "s" : ""}`,
        })

        if (onVote) {
          onVote(candidate.id, voteCount)
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to record your votes. Please try again.",
          variant: "destructive",
        })
      }

      setIsVoting(false)
    }, 1000)
  }

  const incrementVotes = () => {
    setVoteCount((prev) => prev + 1)
  }

  const decrementVotes = () => {
    setVoteCount((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="relative w-32 h-32 mx-auto mb-2 rounded-full overflow-hidden border-4 border-primary/20">
          <Image src={candidate.imageUrl || "/placeholder.svg"} alt={candidate.name} fill className="object-cover" />
        </div>
        <h3 className="font-semibold text-lg text-center">{candidate.name}</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
          <Badge variant="outline">{categoryName || `Category ${candidate.category}`}</Badge>
          <Badge variant="secondary">{candidate.description}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-center">
        <p className="text-sm text-muted-foreground">{candidate.description}</p>
        {showVotes && (
          <p className="text-sm mt-2">
            Current votes: <span className="font-semibold text-primary">{candidate.votes}</span>
          </p>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {!showVotes && !hasVoted && (
          <>
            <div className="w-full flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={decrementVotes}
                  disabled={voteCount <= 1 || isVoting}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-medium text-lg w-8 text-center">{voteCount}</span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={incrementVotes} disabled={isVoting}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm font-medium">
                Total: <span className="text-primary">{voteCount * VOTE_PRICE} KES</span>
              </div>
            </div>
            <Button className="w-full" onClick={handleVote} disabled={isVoting}>
              {isVoting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-background"></span>
                  Processing...
                </span>
              ) : (
                `Vote Now (${voteCount * VOTE_PRICE} KES)`
              )}
            </Button>
          </>
        )}

        {!showVotes && hasVoted && (
          <div className="w-full text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              <span className="font-medium">Voted Successfully</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Thank you for your {voteCount} vote{voteCount > 1 ? "s" : ""}!
            </p>
          </div>
        )}

        {showVotes && (
          <div className="w-full text-center">
            <span className="text-sm font-medium">
              Votes: <span className="text-primary font-bold">{candidate.votes}</span>
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
