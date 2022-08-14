pipeline {
    agent any

    tools {
        nodejs 'node-16.*'
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('checkout'){
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'nodejs --version'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'nodejs --version'
                sh './jenkins/scripts/test.sh'
            }
        }

        // stage('Install dependency'){
        //     steps {
        //         sh 'npm ci'
        //     }
        // }

        // stage('Build'){
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        // stage('Unit test'){
        //     steps {
        //         sh 'npm run test'
        //     }
        // }
    }
}
