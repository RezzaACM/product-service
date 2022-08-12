pipeline {
    agent any

    stages {
        stage('Install dependency') {
            step {
                sh "npm ci"
            }
        }
    }
}