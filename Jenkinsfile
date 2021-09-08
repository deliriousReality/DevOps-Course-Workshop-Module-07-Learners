pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }

    // environment {
    // DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
    // }

    stages {
        stage('.NET Install') {
            steps {
                sh '''wget https://dot.net/v1/dotnet-install.sh
                    ./dotnet-install.sh -c 5.0'''
            }
        }
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