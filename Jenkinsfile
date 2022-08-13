pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Build'){
            steps {
                sh 'npm instsall'
            }
        }
    }
}
