pipeline{
  agent any 
  stages{
    stage ('checkout'){
      steps{
        checkout scm
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