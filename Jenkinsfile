pipeline{
    agent any
    tools {
        nodejs '17.3.1'
    }
  

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


// pipeline {
//     agent any
//     tools {
//         nodejs '16.16.0'
//     }

//     stages {
//         stage ('Example'){
//             steps {
//                 sh 'npm version'
//             }
//         }
//     }
// }