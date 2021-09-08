pipeline {
    agent {
        docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
    }

    environment {
    DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'dotnet build'
                // dir('DotnetTemplate.Web') {
                //     sh 'npm install && npm run build'
                // }
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