//npm init
require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000


const githubInfo = {
  "login": "Quartz1605",
  "id": 170308998,
  "node_id": "U_kgDOCia1hg",
  "avatar_url": "https://avatars.githubusercontent.com/u/170308998?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Quartz1605",
  "html_url": "https://github.com/Quartz1605",
  "followers_url": "https://api.github.com/users/Quartz1605/followers",
  "following_url": "https://api.github.com/users/Quartz1605/following{/other_user}",
  "gists_url": "https://api.github.com/users/Quartz1605/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Quartz1605/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Quartz1605/subscriptions",
  "organizations_url": "https://api.github.com/users/Quartz1605/orgs",
  "repos_url": "https://api.github.com/users/Quartz1605/repos",
  "events_url": "https://api.github.com/users/Quartz1605/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Quartz1605/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pratham",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Resting in peace.\r\n",
  "twitter_username": null,
  "public_repos": 23,
  "public_gists": 0,
  "followers": 7,
  "following": 7,
  "created_at": "2024-05-20T08:07:22Z",
  "updated_at": "2025-05-09T06:37:45Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {

  res.send('Quartz1605')

})

app.get('/login',(req,res) => {

  res.send(
    '<h1> Pls login at chai aur pratham </h1> '
  )
})


app.get('/chai',(req,res) => {

  res.send(
    '<h2>Learning from Chai aur code.</h2>'
  )
})

app.get('/github',(req,res) => {

  res.json(githubInfo);
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// Go to your http://localhost:3000/ to to see the code output.