up:
	docker compose up -d

down:
	docker compose down

update:
	git add .
	git commit -m "Update"
	git push

amend:
	git add .
	git commit --amend --no-edit
	git push -f