pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDS = credentials('jenkins-docker-creds')
  }

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nuno3nes/event-planner-ui:0.1.1 --target runner .'
      }
    }

    stage('Publish') {
      when {
        branch 'main'
      }

      steps {
        script {
          def packageJson = readJSON file: 'package.json'
          def newVersion = packageJson['version']

          sh 'echo $DOCKER_HUB_CREDS_PSW | docker login --username $DOCKER_HUB_CREDS_USR --password-stdin'

          sh "docker image push nuno3nes/event-planner-ui:${newVersion}"

          sh 'docker logout'
        }
      }
    }
  }
}