export class User {

    protected UserUrl: string;

    public UserRepos: string;

    protected constructor({ username }: { username: string }) {
        this.UserUrl = `https://api.github.com/${username}`;
        this.UserRepos = `https://api.github.com/users/${username}/repos`;
    }

    async get() {
        fetch(this.UserUrl).then(async (response) => {
            return response.json();
        })
    }

    async getAllRepos() {
        fetch(this.UserRepos).then(async (response) => {
            return response.json();
        })
    }

    async getRepo({ RepoName }, { RepoName: string }) {
        try {
            fetch(`${this.UserRepos}/${RepoName}`).then(async (response) => {
                return response.json();
            })
        } catch (error) {
            throw new Error('Something went wrong');
        }
    }
}
