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

    stage ('Deploy') {
      steps {
        script {
          def remote = [:]
          remote.name = "take-out web server"
          remote.host = "13.213.62.49"
          remote.allowAnyHosts = true
          withCredentials([sshUserPrivateKey(credentialsId: "jenkins-product", keyFileVariable: "identity", passphraseVariable: "", usernameVariable: "jenkins-product")]) {
              remote.user = userName
              remote.identityFile = identity
              sshCommand remote: remote, command: "mkdir test-123"
          }
        }
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