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
                sh '''sudo snap install dotnet-sdk --classic --channel=5.0
                    sudo snap alias dotnet-sdk.dotnet dotnet
                    sudo snap install dotnet-runtime-50 --classic
                    sudo snap alias dotnet-runtime-50.dotnet dotnet
                    export DOTNET_ROOT=/snap/dotnet-sdk/current'''
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