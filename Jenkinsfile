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
      def remote = [:]
      remote.name = "take-out-web-server"
      remote.host = "13.213.62.49"
      remote.allowAnyHosts = true

    node {
      withCredentials([usernamePassword(credentialsId: 'jenkins-product', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'userName')]) {
        remote.user = userName
        remote.identityFile = identity

        stage("SSH Steps Rocks!") {
            writeFile file: 'test.sh', text: 'ls'
            sshCommand remote: remote, command: 'for i in {1..5}; do echo -n \"Loop \$i \"; date ; sleep 1; done'
            sshScript remote: remote, script: 'test.sh'
            sshPut remote: remote, from: 'test.sh', into: '.'
            sshGet remote: remote, from: 'test.sh', into: 'test_new.sh', override: true
            sshRemove remote: remote, path: 'test.sh'
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