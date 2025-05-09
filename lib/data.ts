export type Candidate = {
  id: string
  name: string
  category: string
  description: string
  votes: number
  imageUrl: string
}

export type Category = {
  id: string
  name: string
}

// Define categories
export const categories: Category[] = [
  { id: "1", name: "Media" },
  { id: "2", name: "Social Media Influence" },
  { id: "3", name: "Politics & Governance" },
  { id: "4", name: "Human Rights & Social Justice" },
  { id: "5", name: "Corporate" },
  { id: "6", name: "Healthcare" },
  { id: "7", name: "Education, Training & Development" },
  { id: "8", name: "Youth & Innovation" },
  { id: "9", name: "Gender Equality" },
  { id: "10", name: "Money & Business" },
  { id: "11", name: "Manufacturing & Industrialization" },
  { id: "12", name: "Hospitality & Tourism" },
  { id: "13", name: "Agriculture & Climate Change" },
  { id: "14", name: "Sports" },
  { id: "15", name: "Tech and Entrepreneurship" },
  { id: "16", name: "Real Estate & Development" },
  { id: "17", name: "People With Disability & Minority" },
  { id: "18", name: "Entertainment & Creative Arts" },
  { id: "19", name: "Diaspora Impact" },
  { id: "20", name: "Lifetime Achievement" },
]

// Generate candidates based on the provided list
export function generateCandidates(): Candidate[] {
  return [
    // 1. Media
    {
      id: "1-1",
      name: "Lynne Ngugi",
      category: "1",
      description: "LN Media",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LN`,
    },
    {
      id: "1-2",
      name: "Yvonne Okwara",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=YO`,
    },
    {
      id: "1-3",
      name: "Mashirima Kapombe",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MK`,
    },
    {
      id: "1-4",
      name: "Adelle Onyango",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/adele-onyango.png`,
    },
    {
      id: "1-5",
      name: "Pamela Sittoni",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=PS`,
    },
    {
      id: "1-6",
      name: "Zubeida Koome",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=ZK`,
    },
    {
      id: "1-7",
      name: "Victoria Rubadiri",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=VR`,
    },
    {
      id: "1-8",
      name: "Mwende Macharia",
      category: "1",
      description: "Media Personality",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MM`,
    },

    // 2. Social Media Influence
    {
      id: "2-1",
      name: "Ajib Gathoni",
      category: "2",
      description: "Social Media Influencer",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/ajib-gathoni.png`,
    },
    {
      id: "2-2",
      name: "Diana Bahati",
      category: "2",
      description: "Social Media Influencer",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DB`,
    },
    {
      id: "2-3",
      name: "Eve Mungai",
      category: "2",
      description: "Social Media Influencer",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EM`,
    },
    {
      id: "2-4",
      name: "Esther Akoth (Akothee)",
      category: "2",
      description: "Social Media Influencer",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EA`,
    },
    {
      id: "2-5",
      name: "Debby Rono",
      category: "2",
      description: "Comedian and Mental Health Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DR`,
    },
    {
      id: "2-6",
      name: "Hanifa Farsafi",
      category: "2",
      description: "Social Media Influencer",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=HF`,
    },
    {
      id: "2-7",
      name: "Miss Muthoni",
      category: "2",
      description: "The LinkedIn Lionness",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MM`,
    },

    // 3. Politics & Governance
    {
      id: "3-1",
      name: "Anne Waiguru",
      category: "3",
      description: "Politician",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/anne-waiguru.png`,
    },
    {
      id: "3-2",
      name: "Fatuma Achani",
      category: "3",
      description: "Governor Kwale County",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=FA`,
    },
    {
      id: "3-3",
      name: "Gladys Wanga",
      category: "3",
      description: "Politician",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=GW`,
    },
    {
      id: "3-4",
      name: "Margaret Nyakango",
      category: "3",
      description: "Budget Controller: Courage",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MN`,
    },
    {
      id: "3-5",
      name: "Gathoni wa Muchomba",
      category: "3",
      description: "Politician",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=GM`,
    },
    {
      id: "3-6",
      name: "Jane Njeri Maina",
      category: "3",
      description: "Politician",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JM`,
    },
    {
      id: "3-7",
      name: "Millie Odhiambo",
      category: "3",
      description: "Politician",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MO`,
    },
    {
      id: "3-8",
      name: "CJ Martha Koome",
      category: "3",
      description: "Chief Justice",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/cj-martha-koome.png`,
    },

    // 4. Human Rights & Social Justice
    {
      id: "4-1",
      name: "Gloria Orwoba",
      category: "4",
      description: "Period Poverty Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=GO`,
    },
    {
      id: "4-2",
      name: "Nerima Wako Ojiwa",
      category: "4",
      description: "Cost of living Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NW`,
    },
    {
      id: "4-3",
      name: "Faith Odhiambo",
      category: "4",
      description: "LSK",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=FO`,
    },
    {
      id: "4-4",
      name: "Njeri wa Migwi",
      category: "4",
      description: "Feminist Human Rights Defender",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NM`,
    },
    {
      id: "4-5",
      name: "Mercy Odondo",
      category: "4",
      description: "SRHR/SGBV Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MO`,
    },

    // 5. Corporate
    {
      id: "5-1",
      name: "Jane Karuku",
      category: "5",
      description: "CEO EABL",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JK`,
    },
    {
      id: "5-2",
      name: "Rita Kavashe",
      category: "5",
      description: "Isuzu",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=RK`,
    },
    {
      id: "5-3",
      name: "Laila Macharia",
      category: "5",
      description: "CENTUM",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LM`,
    },
    {
      id: "5-4",
      name: "Dorothy Ghettuba Pala",
      category: "5",
      description: "Netflix Manager International Originals",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DG`,
    },
    {
      id: "5-5",
      name: "Eva Muraya",
      category: "5",
      description: "BSD Group",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EM`,
    },
    {
      id: "5-6",
      name: "Mary Mulili",
      category: "5",
      description: "UBA Kenya Designate Managing Director and CEO",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MM`,
    },
    {
      id: "5-7",
      name: "Joan the Career Coach",
      category: "5",
      description: "Career Coach",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JC`,
    },
    {
      id: "5-8",
      name: "Lucia Musau",
      category: "5",
      description: "Corporate Leader",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LM`,
    },

    // 6. Healthcare
    {
      id: "6-1",
      name: "Dr. Lizzie Itotia",
      category: "6",
      description: "Healthcare Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LI`,
    },
    {
      id: "6-2",
      name: "Anna Qabale Duba",
      category: "6",
      description: "Global Nursing Award",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/anne-qabale-duba.png`,
    },
    {
      id: "6-3",
      name: "Stella Wairimu Bosire",
      category: "6",
      description: "CEO Kenya Medical Association",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SW`,
    },

    // 7. Education, Training & Development
    {
      id: "7-1",
      name: "Mumbi Ndung'u",
      category: "7",
      description: "Executive Director Power Learn Project",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MN`,
    },
    {
      id: "7-2",
      name: "Prof. Nancy Booker",
      category: "7",
      description: "Education Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NB`,
    },
    {
      id: "7-3",
      name: "Rosalia Mkanjala",
      category: "7",
      description: "KNUT",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=RM`,
    },
    {
      id: "7-4",
      name: "Wawira Njiru",
      category: "7",
      description: "Food for education",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=WN`,
    },
    {
      id: "7-5",
      name: "Nelly Cheboi",
      category: "7",
      description: "CNN Person of the Year",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NC`,
    },

    // 8. Youth & Innovation
    {
      id: "8-1",
      name: "Caren Wakoli",
      category: "8",
      description: "Founder and Executive Director of Emerging Leaders",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/caren-wakoli.png`,
    },
    {
      id: "8-2",
      name: "Nancy Maina",
      category: "8",
      description: "Founder Lugha Ishara",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NM`,
    },
    {
      id: "8-3",
      name: "Angela Oduor Lungati",
      category: "8",
      description: "Youth & Innovation Leader",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/angela-oduor-langat.png`,
    },
    {
      id: "8-4",
      name: "Esther Ndeti",
      category: "8",
      description: "Youth & Innovation Leader",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EN`,
    },
    {
      id: "8-5",
      name: "Beth Koigi",
      category: "8",
      description: "Majik Water",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/beth-koigi.png`,
    },
    {
      id: "8-6",
      name: "Sheryl Mboya",
      category: "8",
      description: "Edible Plate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SM`,
    },

    // 9. Gender Equality
    {
      id: "9-1",
      name: "Anne Ireri",
      category: "9",
      description: "CEO of FIDA",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/anne-ireri.png`,
    },
    {
      id: "9-2",
      name: "Dorcas Gachagua",
      category: "9",
      description: "Mama Boys: Second Lady",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DG`,
    },
    {
      id: "9-3",
      name: "PS Wangombe",
      category: "9",
      description: "Gender Equality Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=PW`,
    },

    // 10. Money & Business
    {
      id: "10-1",
      name: "Dr. Joyce Gikunda",
      category: "10",
      description: "Linton's Beauty",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JG`,
    },
    {
      id: "10-2",
      name: "Mary Muthoni Jason",
      category: "10",
      description: "Women in Business (WIB) Kenya CEO, PS Prisons and Correctional Services",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MM`,
    },
    {
      id: "10-3",
      name: "Ann Mathu",
      category: "10",
      description: "NACADA",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/ann-mathu.png`,
    },
    {
      id: "10-4",
      name: "Dr Susan Onyancha",
      category: "10",
      description: "BF Suma",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SO`,
    },
    {
      id: "10-5",
      name: "Just Ivy Africa",
      category: "10",
      description: "Business Leader",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JI`,
    },

    // 11. Manufacturing & Industrialization
    {
      id: "11-1",
      name: "Flora Mutahi",
      category: "11",
      description: "Association of Manufacturing",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=FM`,
    },
    {
      id: "11-2",
      name: "Caroline Kariuki",
      category: "11",
      description: "KEPSA",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/caroline-kariuki.png`,
    },
    {
      id: "11-3",
      name: "Mary Ngechu",
      category: "11",
      description: "Founder Plast Packaging Industries Limited",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MN`,
    },

    // 12. Hospitality & Tourism
    {
      id: "12-1",
      name: "Sarah Kabu",
      category: "12",
      description: "Bonfire",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SK`,
    },
    {
      id: "12-2",
      name: "Captain Ruth Karauri",
      category: "12",
      description: "Hospitality & Tourism Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/captain-ruth-karauri.png`,
    },
    {
      id: "12-3",
      name: "Dr. Betty Adero Radier",
      category: "12",
      description: "Kenya Tourism Board CEO",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=BR`,
    },

    // 13. Agriculture & Climate Change
    {
      id: "13-1",
      name: "Jamila Abbas",
      category: "13",
      description: "Poptech 2012",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JA`,
    },
    {
      id: "13-2",
      name: "Judy Matu",
      category: "13",
      description: "Association of Women in Agriculture (AWAK)",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JM`,
    },
    {
      id: "13-3",
      name: "Daphne Muchai",
      category: "13",
      description: "Executive Director - Women Farmers Association of Kenya- WoFaAK",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DM`,
    },
    {
      id: "13-4",
      name: "Elizabeth Wanjiru Wathuti",
      category: "13",
      description: "Founder of the Green Generation Initiative",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EW`,
    },

    // 14. Sports
    {
      id: "14-1",
      name: "Faith Kipyegon",
      category: "14",
      description: "Athletics",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=FK`,
    },
    {
      id: "14-2",
      name: "Angela Okutoyi",
      category: "14",
      description: "Tennis",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/angela-otukoyi.png`,
    },
    {
      id: "14-3",
      name: "Mwanalima Adam Jereko",
      category: "14",
      description: "Football: Harambee Starlets",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MA`,
    },
    {
      id: "14-4",
      name: "Alexandra Ndolo",
      category: "14",
      description: "Fencing",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/alexandra-ndolo.png`,
    },
    {
      id: "14-5",
      name: "Paula Munyi",
      category: "14",
      description: "Sharpshooter",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=PM`,
    },
    {
      id: "14-6",
      name: "Janet Wanja",
      category: "14",
      description: "Volleyball",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JW`,
    },
    {
      id: "14-7",
      name: "Slyvia Gathoni",
      category: "14",
      description: "E-Games: Arrow Queen",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SG`,
    },
    {
      id: "14-8",
      name: "Lorna Abiero",
      category: "14",
      description: "Martial Arts",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LA`,
    },

    // 15. Tech and Entrepreneurship
    {
      id: "15-1",
      name: "Dr. Chao Mbogho",
      category: "15",
      description: "Tech and Entrepreneurship Leader",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=CM`,
    },
    {
      id: "15-2",
      name: "Susan Odhiambo",
      category: "15",
      description: "Tech leadership Group head, Digital transformation Equity Bank",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SO`,
    },
    {
      id: "15-3",
      name: "Dorothy Ooko",
      category: "15",
      description: "Google Head Of Communications & Public Affairs, Africa",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=DO`,
    },
    {
      id: "15-4",
      name: "Janet C. Kemboi",
      category: "15",
      description: "Communications Manager, Eastern Africa · Meta",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JK`,
    },

    // 16. Real Estate & Development
    {
      id: "16-1",
      name: "Leah Wambui",
      category: "16",
      description: "Cherriez Property",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LW`,
    },
    {
      id: "16-2",
      name: "Liz Njuguna",
      category: "16",
      description: "Risiih Investments",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LN`,
    },
    {
      id: "16-3",
      name: "Robyn Emerson",
      category: "16",
      description: "Women in Real Estate President",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=RE`,
    },

    // 17. People With Disability & Minority
    {
      id: "17-1",
      name: "Crystal Asige",
      category: "17",
      description: "Disability Rights Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/crystal-asige.png`,
    },
    {
      id: "17-2",
      name: "Naisula Lesuuda",
      category: "17",
      description: "Minority Rights Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NL`,
    },
    {
      id: "17-3",
      name: "Wanja Maina",
      category: "17",
      description: "Disability Rights Advocate",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=WM`,
    },

    // 18. Entertainment & Creative Arts
    {
      id: "18-1",
      name: "Nikita Kering",
      category: "18",
      description: "Entertainment & Creative Arts Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NK`,
    },
    {
      id: "18-2",
      name: "Jacky Vike",
      category: "18",
      description: "Entertainment & Creative Arts Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=JV`,
    },
    {
      id: "18-3",
      name: "Nadia Mukami",
      category: "18",
      description: "Entertainment & Creative Arts Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=NM`,
    },
    {
      id: "18-4",
      name: "Catherine Kamau",
      category: "18",
      description: "Actress",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/catherine-kamau.png`,
    },
    {
      id: "18-5",
      name: "Angela Ndambuki",
      category: "18",
      description: "Entertainment & Creative Arts Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/images/angela-ndambuki.png`,
    },
    {
      id: "18-6",
      name: "Sofiya Nzau",
      category: "18",
      description: "Mwaki song",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=SN`,
    },
    {
      id: "18-7",
      name: "Wixx Mangutha",
      category: "18",
      description: "Entertainment & Creative Arts Professional",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=WM`,
    },

    // 19. Diaspora Impact
    {
      id: "19-1",
      name: "Lupita Nyong'o",
      category: "19",
      description: "Actress",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LN`,
    },
    {
      id: "19-2",
      name: "Lilian Seenoi-Barr",
      category: "19",
      description: "Council Woman in Northern Ireland",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=LS`,
    },
    {
      id: "19-3",
      name: "Winfred Yavi",
      category: "19",
      description: "Bahrain Athlete",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=WY`,
    },

    // 20. Lifetime Achievement
    {
      id: "20-1",
      name: "Eunice Mathu",
      category: "20",
      description: "Parents Africa",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EM`,
    },
    {
      id: "20-2",
      name: "Dr. Ida Odinga",
      category: "20",
      description: "Lifetime Achievement",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=IO`,
    },
    {
      id: "20-3",
      name: "Hon. Martha Karua",
      category: "20",
      description: "Lifetime Achievement",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=MK`,
    },
    {
      id: "20-4",
      name: "Prof. Eddah Gachukia",
      category: "20",
      description: "Riara Group of Schools",
      votes: Math.floor(Math.random() * 100),
      imageUrl: `/placeholder.svg?height=200&width=200&text=EG`,
    },
  ]
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
