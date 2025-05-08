# Voting System Front-End

A Next.js application designed for deployment on Vercel that serves as a voting system with admin functionality.

## Features

- **Voting Platform**
  - Display of candidates organized by categories
  - Ability to vote for candidates
  - Filtering and searching capabilities

- **Admin Dashboard**
  - Secure login for administrators
  - Real-time vote counts and statistics
  - Table and grid views of candidate data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context API
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Client-side authentication (simulated)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/voting-system.git
   cd voting-system
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   \`\`\`
   DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}?schema=public"
   DB_NAME=voting_system
   DB_USER=postgres
   DB_PASSWORD=Shazrivas2025!
   DB_HOST=localhost
   \`\`\`

4. Initialize the database:
   \`\`\`bash
   npx prisma migrate dev --name init
   npm run init-db
   \`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js App Router pages
- `/components`: Reusable React components
  - `/admin`: Admin-specific components
  - `/auth`: Authentication components
  - `/layout`: Layout components like header
  - `/ui`: UI components from shadcn/ui
  - `/voting`: Voting-related components
- `/lib`: Utility functions and context providers
- `/prisma`: Database schema and migrations

## Deployment on Vercel

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up or log in.
3. Click "New Project" and import your GitHub repository.
4. Add the environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `DB_NAME`: Your database name
   - `DB_USER`: Your database username
   - `DB_PASSWORD`: Your database password
   - `DB_HOST`: Your database host
5. Click "Deploy".

## Usage

### Voting Flow

1. Visit the home page and click "Vote Now".
2. Browse the list of candidates organized by categories.
3. Use filters and search to find specific candidates.
4. Click the "Vote" button on a candidate card to cast your vote.
5. Receive confirmation of your vote.

### Admin Flow

1. Log in through the admin login page (default credentials: admin@example.com / password).
2. Access the admin dashboard to view voting statistics.
3. Monitor vote counts for all candidates.
4. Use filters and search to analyze specific candidate data.
5. Toggle between table and grid views for different data visualization.

## Database Schema

The application uses PostgreSQL with Prisma ORM. The schema includes:

- `Candidate`: Stores candidate information and vote counts
- `Admin`: Stores admin user credentials

## Authentication

For demonstration purposes, this application uses client-side authentication with localStorage. In a production environment, you would implement:

- Server-side authentication
- JWT or session-based auth
- Secure password hashing
- CSRF protection

## Customization

### Styling

The application uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file and the CSS variables in `app/globals.css`.

### Adding Features

To extend the application:

1. Add new components in the appropriate directories
2. Update the authentication context if needed
3. Create new routes in the `/app` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Lucide Icons](https://lucide.dev/)
\`\`\`

Let's update the package.json file to include the database initialization script:
