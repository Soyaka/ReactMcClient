run:
	bun run dev


push:
	@read -p "commit : " msg; \
	git add .; \
	git commit -m "$$msg"; \
	git push origin master



.PHONY: push