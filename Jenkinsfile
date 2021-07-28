pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    stages {
        stage ('Setup') {
            steps {
                sh "npm ci"
            }
        }
        stage ('Tests') {
            steps {
                sh "npm run cucumber TAGS=$tags"
            }
        }
    }
    post {
        always {
            script {
                cucumber failedFeaturesNumber: -1, failedScenariosNumber: -1, failedStepsNumber: -1, fileIncludePattern: '**/*.json', jsonReportDirectory: 'report/cucumber-json', pendingStepsNumber: -1, skippedStepsNumber: -1, sortingMethod: 'ALPHABETICAL', undefinedStepsNumber: -1
            }
        }
    }
}