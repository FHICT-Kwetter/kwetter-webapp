docker rmi -f kwetter-web-app:latest
docker build -t kwetter-web-app .
kubectl delete deployment kwetter-web-app
kubectl apply -f deployment.yaml
