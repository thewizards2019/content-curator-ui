install: 
	npm install -g @angular/cli
	npm install --save @angular/material @angular/cdk @angular/animations
	ng add @angular/material

run:
	npm start

helm:
	helm package content-curator-ui
	helm install content-curator-ui-0.1.0.tgz

docker:
	docker build -t content-curator-ui:v0.0.1 .