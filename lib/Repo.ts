export class Repo {
    public RepositoryUrl: string;
    static RepositoryUrl: RequestInfo;
    public constructor({ repoAuthor, repoName }: { repoAuthor: string; repoName: string; }) {
        this.RepositoryUrl = `https://api.github.com/repos/${repoAuthor}/${repoName}/`;
    }

    static async get() {
        let req = fetch(this.RepositoryUrl);
        let commits: any = (await req).json();
        return commits;
        /*commits.forEach(async ({
            id,
            node_id,
            name,
            full_name,
            private,
            owner,
            html_url,
            description,
            fork,
            url,
            forks_url,
            keys_url,
            teams_url,
            hook_url,
            issue_events_url,
            events_url
            assignees_url,
            branches_url,
            languages_url,
            created_at,
            updated_at,
            git_url,
            ssh_url,
            clone_url
            svn_url,
            size,
            stargerzs_count,
            watchers_count,
            language,
            has_issues,
            has_projects,
            has_downloads,
            has_pages,
            archived,
            forks_count,
            disabled,
            open_issues_count,
            license,
            visibility,
            forks,
            open_issues,
            watchers,
            default_branch
        }: {
            id: String,
            node_id: String,
            name: String,
            full_name: String,
            private: String,
            owner: String,
            html_url: String,
            description: String,
            fork: String,
            url: String,
            forks_url: String,
            keys_url: String,
            teams_url: String,
            hook_url: String,
            issue_events_url: String,
            events_url
            assignees_url,
            branches_url,
            languages_url,
            created_at,
            updated_at,
            git_url,
            ssh_url,
            clone_url
            svn_url,
            size,
            stargerzs_count,
            watchers_count,
            language,
            has_issues,
            has_projects,
            has_downloads,
            has_pages,
            archived,
            forks_count,
            disabled,
            open_issues_count,
            license,
            visibility,
            forks,
            open_issues,
            watchers,
            default_branch
        }))*/
    }
}