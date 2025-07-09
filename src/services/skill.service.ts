import axios from 'axios';

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  languages_url: string;
  fork: boolean;
}

export const fetchUserRepos = async (): Promise<Repo[] | undefined> => {
  try {
    const response = await axios.get<Repo[]>(
      'https://api.github.com/users/rezaaditama/repos'
    );
    console.log(response);
    const nonFork = response.data.filter((repo) => !repo.fork);
    return nonFork;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getLanguagePercentage = async (): Promise<
  Record<string, number>
> => {
  const dataRepos = await fetchUserRepos();
  const languageTotals: Record<string, number> = {};

  if (!dataRepos) return {};

  await Promise.all(
    dataRepos.map(async (repo) => {
      try {
        const response = await axios.get<Record<string, number>>(
          repo.languages_url
        );
        const data = response.data;

        for (const [lang, bytes] of Object.entries(data)) {
          languageTotals[lang] = (languageTotals[lang] || 0) + bytes;
        }
      } catch (error) {
        console.log(`Gagal mengambil bahasa dari ${repo.name}`, error);
      }
    })
  );

  const totalBytes = Object.values(languageTotals).reduce(
    (acc, values) => acc + values,
    0
  );
  const percentages: Record<string, number> = {};

  for (const [lang, bytes] of Object.entries(languageTotals)) {
    percentages[lang] = parseFloat(((bytes / totalBytes) * 100).toFixed(2));
  }
  console.log(percentages);
  return percentages;
};
