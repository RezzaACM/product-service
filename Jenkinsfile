pipeline {
    agent any

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
                sh 'npm run test'
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
