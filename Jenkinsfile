pipeline {
    agent none

    stages {
        stage('Build .NET') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
            }
            environment {
                DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
            }
            steps {
                echo 'Building .NET..'
                sh 'dotnet build'
                
            }
        }
        stage('Build Front End') {
            agent {
                docker { image 'node:14-alpine' }
            }
            steps {
                echo 'Building Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm install && npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}