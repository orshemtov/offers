CLIENT_TYPE = typescript-fetch
SERVER_TYPE = go-gin-server

generate-client:
	openapi-generator generate -i openapi.yaml -o gen/client -g $(CLIENT_TYPE)

generate-server:
	openapi-generator generate -i openapi.yaml -o gen/server -g $(SERVER_TYPE)

generate-proto:
	openapi-generator generate -i openapi.yaml -o gen/proto -g protobuf-schema

generate-mysql:
	openapi-generator generate -i openapi.yaml -o gen/mysql -g mysql-schema

generate-docs:
	openapi-generator generate -i openapi.yaml -o gen/docs/html2 -g html2
