compile-ts:
	mkdir -p out/ts
	protoc \
	--plugin=./node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=out/ts \
	client.proto \
	product.proto