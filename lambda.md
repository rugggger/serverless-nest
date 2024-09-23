This project is deployed on lambda using the SAM CLI.

Commands:
`npm run build` builds the project
`sam build` builds it for lambda
`sam local start-api` starts local server
`sam deploy --config-env production` deploys it to lambda aws

docker:

`docker build -t local-nest:latest .`

build local
`sam build --template ./template-local.yml --cached  &&  sam local start-api --template ./template-local.yml`