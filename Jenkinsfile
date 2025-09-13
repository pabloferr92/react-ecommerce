pipeline {
    agent any

    tools {
        nodejs "node" // nome configurado no Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/pabloferr92/react-ecommerce.git',
                    credentialsId: '5aeac2b9-cc45-4ca0-a4a1-83076370436f'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Archive build artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }
}
