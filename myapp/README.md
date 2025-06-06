# NestJS CD/CD

- ECS fargate로 NestJS를 배포하기 위한 Repo

## CI/CD를 위한 배포 흐름 정리

- 프로젝트를 Docker Image로 만들 수 있게 Dockerfile을 생성한다.
- 프로젝트에 .github/workflows 디렉토리를 생성하고 Github Action을 동작할 절차들을 yml 파일에 기술한다.
- main 브랜치에 push 할 때, Github Action의 절차를 통해 ECR에 이미지를 업로드한다.
