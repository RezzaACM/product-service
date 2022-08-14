pipeline{
  agent any 
  stages{
    stage ('checkout'){
      steps{
        sh '''
            checkout scm
            node --version
        '''
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm cache clean -f
          npm install
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