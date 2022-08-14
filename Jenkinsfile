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

        stage('Install dependency'){
            steps {
                sh 'npm ci'
            }
        }

        stage('Unit test'){
            steps {
                sh 'npm run test'
            }
        }

        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }
    }
}
