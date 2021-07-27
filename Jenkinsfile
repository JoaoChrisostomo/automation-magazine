pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
        stage('Teste') {
            steps {
                sh "npm run cucumber TAGS=$tags"
            }
        }    
    }
}

//run cucumber TAGS=$tags