generate-client-typescript:
	openapi-generator generate -i openapi.yaml -o gen/client/ts -g typescript-fetch

generate-client-dart:
	openapi-generator generate -i openapi.yaml -o gen/client/dart -g dart

generate-server-go-gin:
	openapi-generator generate -i openapi.yaml -o gen/server/go -g go-gin-server

generate-proto:
	openapi-generator generate -i openapi.yaml -o gen/proto -g protobuf-schema

generate-mysql:
	openapi-generator generate -i openapi.yaml -o gen/mysql -g mysql-schema

generate-docs:
	openapi-generator generate -i openapi.yaml -o gen/docs/html2 -g html2
