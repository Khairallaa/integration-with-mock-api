export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string; 
  running_time: string; 
  rt_score: string;     
  image?: string;       
  movie_banner?: string;
};

export async function getFilms(): Promise<Film[]> {
  const res = await fetch(`https://files.manuscdn.com/user_upload_by_module/session_file/310419663032203558/zXiuvWTcBXQQoKln.json`);
  if (!res.ok) throw new Error('Failed to fetch films');
  return res.json();
}

export async function getFilmById(id: string): Promise<Film> {
  const films = await getFilms();
  const film = films.find((f) => f.id === id);
  if (!film) throw new Error(\`Film with id ${id} not found\`);
  return film;
