pipeline{
  agent any

  nodejs('nodejs-dependency') {
    // some block
    steps {
        sh '''
          npm install
        '''
    }
  }

  stages{

    stage ('checkout'){
      steps{
        checkout scm
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