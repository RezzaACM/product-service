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
              remote.user = jenkins-product
              remote.identityFile = identity

              writeFile file: 'abc.sh', text: 'ls'
              sshCommand remote: remote, command: 'for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done'
              sshPut remote: remote, from: 'abc.sh', into: '.'
              sshGet remote: remote, from: 'abc.sh', into: 'bac.sh', override: true
              sshScript remote: remote, script: 'abc.sh'
              sshRemove remote: remote, path: 'abc.sh'
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