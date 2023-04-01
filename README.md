# AWS Starter Lambda

This starter project demonstrates how to use [Serverless Framework](https://www.serverless.com/framework) to deploy simple Lambda function exposed with the API Gateway REST endpoint.

## Deployment

In order to deploy the project, run the following command:

```
$ sls deploy
```

After running deploy, you should see output similar to:

```bash
Deploying aws-starter-lambda to stage dev (eu-central-1)

✔ Service deployed to stack aws-starter-lambda-dev (60s)

api keys:
  aws-starter-lambda-dev-1: ***
endpoints:
  ANY - https://***.execute-api.eu-central-1.amazonaws.com/dev/api/hello
functions:
  hello: aws-starter-lambda-dev-hello (2.6 kB)
```

Now you can use Postman to execute some requests against the above endpoint. Make sure to supply `X-API-Key` header with the provided API key value.

## Cleanup

In order to remove the deployed service, run the following command:

```
$ sls remove
```
