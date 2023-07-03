pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nuno3nes/event-planner-ui:0.0.1 --target runner .'
      }
    }
  }
}