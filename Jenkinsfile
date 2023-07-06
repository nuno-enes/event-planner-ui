pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nuno3nes/event-planner-ui:0.0.1 --target runner .'
      }
    }

    stage('Publish') {
      when {
        branch 'develop'
      }
      steps {
        sh 'docker login --username nuno3nes --password dckr_pat_cO6Tpe6Q1Cc2X0yQYVFmjvW1QSs'
        sh 'docker image push nuno3nes/event-planner-ui:0.0.1'
        sh 'docker logout'
      }
    }
  }
}