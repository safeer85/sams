pipeline {
    agent {
        docker {
            image 'node:20' // Use Node.js version 20 Docker image
        }
    }
    environment {
        FRONTEND_DIR = './client'
        BACKEND_DIR = './server'
    }
    stages {
        stage('Checkout Code') {
            steps {
                // Pull code from your repository
                git branch: 'master', url: 'https://github.com/your-repo/project.git'
            }
        }
        stage('Install Frontend Dependencies') {
            steps {
                dir("$FRONTEND_DIR") {
                    sh 'npm install'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir("$FRONTEND_DIR") {
                    sh 'npm run build'
                }
            }
        }
        stage('Install Backend Dependencies') {
            steps {
                dir("$BACKEND_DIR") {
                    sh 'npm install'
                }
            }
        }
        stage('Test Backend') {
            steps {
                dir("$BACKEND_DIR") {
                    sh 'npm test'
                }
            }
        }
        stage('Build Docker Containers') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        success {
            echo 'Build and Deployment Successful!'
        }
        failure {
            echo 'Build or Deployment Failed!'
        }
    }
}
