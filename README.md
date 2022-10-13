## Docker for Json Server

I want to build a fully mockup REST API server for product demo & frontend/backend separation development purposes. [Json server](https://github.com/typicode/json-server) is a pretty good tool for it.

Here're my needs:

- Docker image should be relatively small. Some existing json-server images are pretty big, like ~300 MB.
- The POST/PUT/DELETE requests should not change data source. Otherwise there could be too much memory usage for server, and unpredicatble data for product demo.
- Use [@faker-js/faker](https://github.com/faker-js/faker) to generate reasonable data for different scenarios.
- It should be flexible to add dynamic routes and customized response data.
- It should be easy to be deployed to aws EKS, and accessed via https domain.
- It should provide auth metric to block external requests.

It took me a while to configure the docker image for these needs. So this repo is shared with community to save others time.

This repo has borrowed ideas from [clue json server](https://github.com/clue/docker-json-server) and [vimagick json server](https://github.com/vimagick/dockerfiles/tree/master/json-server)

## Local Development

**For none docker development**

```
git clone git@github.com:smiletrl/json-server-docker.git

cd json-server-docker

npm install -g json-server

npm install

npm run dev
```

Then see some examples
```
curl http://localhost:3000/people
```

**For docker development**

```
git clone git@github.com:smiletrl/json-server-docker.git

cd json-server-docker

docker-compose up --build

```

If you use docker locally, you may want to add `--watch` to json-server inside Dockerfile, and add volume map in docker-compose.yml to get hotload change effect.

Then see some examples
```
curl http://localhost:3003/people
```

For me, local docker is primarily used to test the docker image once code is ready. It's up to you to choose the approach.

## Deploy online

Update `./deploy/Dockerfile` to suit your needs. Depending on your CI/CD strategy, build image from this Dockerfile. This image exposes port `3000`, so keep an eye with your port setting. 

You may want to remove below line if you are deploying out of China.
```
&& npm config set registry https://registry.npm.taobao.org \
```
