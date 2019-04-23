import axios from 'axios'

export default class APIService{
  getUserRepositories(username) {
    return axios.create({
      baseURL: 'https://api.github.com/users/' + username + '/repos',
      headers: {
        "Accept": "application/vnd.github.inertia-preview+json"
      }
    }); 
  }

  getRepositoryReadMe(repo) {
    return axios.create({
      baseURL: 'https://api.github.com/repos/' + repo.full_name + '/readme',
      headers: {
        "Accept": "application/vnd.github.v3.raw"
      }
    }); 
  }
}