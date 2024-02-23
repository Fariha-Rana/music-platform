# Music Platform

This project is a music platform built using Next.js, Appwrite, and React. It allows users to create playlists, view new albums, and listen to music.

## Project Structure

- `src/app/myplaylist/page.js`: Manages user playlists and displays saved songs.
- `src/app/playlist/[playlistid]/page.js`: Displays individual playlists with song details.
- `src/app/newalbums/[albumid]/page.js`: Shows details of new albums.
- `src/components/Navbar.js`: Navigation bar with links for search and home.

## Installation

1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Configure environment variables as per `.env.example`.
4. Start the development server with `pnpm run dev`.