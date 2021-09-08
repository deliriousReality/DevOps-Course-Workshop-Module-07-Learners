pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }

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
        stage('Test .NET') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
            }
            environment {
                DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
            }
            steps {
                echo 'Testing .NET..'
                sh 'dotnet test'
                
            }
        }
        stage('Build Front End') {
            // agent {
            //     docker { image 'node:14-alpine' }
            // }
            steps {
                echo 'Building Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm install && npm run build'
                }
            }
        }
        stage('Run Linter on Front End') {
            // agent {
            //     docker { image 'node:14-alpine' }
            // }
            steps {
                echo 'Linting Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm run lint'
                }
            }
        }
        stage('Test Front End') {
            // agent {
            //     docker { image 'node:14-alpine' }
            // }
            steps {
                echo 'Testing Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm run test-with-coverage'
                }
            }
        }
    }
    post {
        // agent {
        //         docker { image 'node:14-alpine' }
        //     }
        success {
            publishCoverage adapters: [istanbulCoberturaAdapter('target/site/cobertura-coverage.xml')]
        }
    }
}