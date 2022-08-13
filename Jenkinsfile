pipeline{
  agent any 
  
  tools {
    nodejs '18.7.0'
  }

  stages{

    stage ('Check npm version'){
        steps {
            sh 'npm version'
        }
    }

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