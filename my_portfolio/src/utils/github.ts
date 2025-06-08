interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  homepage: string | null;
  created_at: string;
  default_branch: string;
  visibility: string;
}

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Filter and sort repositories
    const filteredRepos = repos
      .filter(repo => {
        // Filter out forks and archived repositories
        return !repo.name.includes('fork') && 
               repo.visibility === 'public' &&
               !repo.name.includes('test') &&
               !repo.name.includes('demo');
      })
      .sort((a, b) => {
        // Prioritize repos with more stars, then by last updated
        if (a.stargazers_count !== b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 6); // Get top 6 projects
    
    return filteredRepos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const sanitizeHTML = (str: string): string => {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

export const getLanguageColor = (language: string | null): string => {
  const colors: { [key: string]: string } = {
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    Java: 'bg-red-500',
    'C++': 'bg-purple-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-400',
    Vue: 'bg-green-400',
    React: 'bg-cyan-500',
    Node: 'bg-green-600',
    PHP: 'bg-indigo-500',
    'C#': 'bg-purple-600',
    Ruby: 'bg-red-600',
    Go: 'bg-blue-600',
    Rust: 'bg-orange-600',
    Swift: 'bg-orange-500',
    Kotlin: 'bg-purple-500',
    Dart: 'bg-blue-400',
    Shell: 'bg-gray-500',
    'Objective-C': 'bg-blue-600',
    Scala: 'bg-red-500',
    Perl: 'bg-blue-400',
    R: 'bg-blue-500',
    MATLAB: 'bg-orange-500',
    Lua: 'bg-blue-400',
    PowerShell: 'bg-blue-500',
    Groovy: 'bg-green-500',
    Elixir: 'bg-purple-500',
    Clojure: 'bg-green-600',
    Haskell: 'bg-purple-400',
    Erlang: 'bg-red-400',
    'F#': 'bg-blue-500',
    OCaml: 'bg-yellow-500',
    Crystal: 'bg-gray-500',
    Nim: 'bg-yellow-600',
    Zig: 'bg-yellow-500',
    V: 'bg-blue-500',
    D: 'bg-red-500',
    'Jupyter Notebook': 'bg-orange-500',
    TeX: 'bg-gray-500',
    Markdown: 'bg-gray-400',
    'Visual Basic': 'bg-blue-500',
    Assembly: 'bg-gray-600',
    'Common Lisp': 'bg-purple-500',
    Scheme: 'bg-red-500',
    Prolog: 'bg-blue-500',
    Fortran: 'bg-orange-500',
    COBOL: 'bg-blue-500',
    Ada: 'bg-blue-500',
    Pascal: 'bg-blue-500',
    'Smalltalk': 'bg-blue-500',
    'ABAP': 'bg-blue-500',
    'PL/SQL': 'bg-blue-500',
    'T-SQL': 'bg-blue-500',
    'PL/pgSQL': 'bg-blue-500',
    'PL/I': 'bg-blue-500',
    'PL/S': 'bg-blue-500',
    'PL/1': 'bg-blue-500',
    'PL/0': 'bg-blue-500',
    'PL/360': 'bg-blue-500',
    'PL/8': 'bg-blue-500',
    'PL/9': 'bg-blue-500',
    'PL/10': 'bg-blue-500',
    'PL/11': 'bg-blue-500',
    'PL/12': 'bg-blue-500',
    'PL/13': 'bg-blue-500',
    'PL/14': 'bg-blue-500',
    'PL/15': 'bg-blue-500',
    'PL/16': 'bg-blue-500',
    'PL/17': 'bg-blue-500',
    'PL/18': 'bg-blue-500',
    'PL/19': 'bg-blue-500',
    'PL/20': 'bg-blue-500'
  };
  return colors[language || ''] || 'bg-gray-500';
};