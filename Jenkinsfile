pipeline{
  agent { label 'nodejs8' }
  

  stages{
    stage ('checkout'){
      steps{
        checkout scm
        sh 'node --version'
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm ci
        '''
      }
    }
    stage ('test'){
      steps{
        sh '''
          npm run test
        '''
      }
    }
    stage ('build') {
      steps{
        sh 'npm run build'
      }
    }
  }
}