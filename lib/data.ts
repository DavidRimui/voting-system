export type Candidate = {
  id: string
  name: string
  party: string
  position: string
  votes: number
  imageUrl: string
}

// Generate 100 mock candidates
export function generateCandidates(): Candidate[] {
  const positions = ["President", "Vice President", "Senator", "Representative", "Governor", "Mayor"]

  const parties = ["Progressive Party", "Conservative Alliance", "Centrist Coalition", "Green Future", "Liberty Union"]

  const firstNames = [
    "James",
    "Mary",
    "John",
    "Patricia",
    "Robert",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Charles",
    "Karen",
    "Christopher",
    "Nancy",
    "Daniel",
    "Lisa",
    "Matthew",
    "Margaret",
    "Anthony",
    "Betty",
    "Mark",
    "Sandra",
    "Donald",
    "Ashley",
    "Steven",
    "Dorothy",
    "Paul",
    "Kimberly",
    "Andrew",
    "Emily",
    "Joshua",
    "Donna",
    "Kenneth",
    "Michelle",
    "Kevin",
    "Carol",
    "Brian",
    "Amanda",
    "George",
    "Melissa",
    "Edward",
    "Deborah",
    "Ronald",
    "Stephanie",
    "Timothy",
    "Rebecca",
    "Jason",
    "Sharon",
  ]

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
    "Clark",
    "Rodriguez",
    "Lewis",
    "Lee",
    "Walker",
    "Hall",
    "Allen",
    "Young",
    "Hernandez",
    "King",
    "Wright",
    "Lopez",
    "Hill",
    "Scott",
    "Green",
    "Adams",
    "Baker",
    "Gonzalez",
    "Nelson",
    "Carter",
    "Mitchell",
    "Perez",
    "Roberts",
    "Turner",
    "Phillips",
    "Campbell",
    "Parker",
    "Evans",
    "Edwards",
    "Collins",
    "Stewart",
    "Sanchez",
    "Morris",
    "Rogers",
    "Reed",
    "Cook",
  ]

  return Array.from({ length: 100 }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]

    return {
      id: (i + 1).toString(),
      name: `${firstName} ${lastName}`,
      party: parties[Math.floor(Math.random() * parties.length)],
      position: positions[Math.floor(Math.random() * positions.length)],
      votes: Math.floor(Math.random() * 100), // Initial random votes
      imageUrl: `/placeholder.svg?height=200&width=200&text=${firstName[0]}${lastName[0]}`,
    }
  })
}

// Create a singleton instance of candidates
let candidates: Candidate[] | null = null

export function getCandidates(): Candidate[] {
  if (!candidates) {
    candidates = generateCandidates()
  }
  return candidates
}

// Function to vote for a candidate
export function voteForCandidate(candidateId: string): boolean {
  const allCandidates = getCandidates()
  const candidate = allCandidates.find((c) => c.id === candidateId)

  if (candidate) {
    candidate.votes += 1
    return true
  }

  return false
}

