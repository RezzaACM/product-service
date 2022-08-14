pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Install dependency'){
            steps {
                sh 'npm ci'
            }
        }

        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }

        stage('Unit test'){
            steps {
                sh 'npm run test'
            }
        }
    }
}
