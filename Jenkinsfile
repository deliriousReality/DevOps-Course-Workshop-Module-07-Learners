pipeline {
    agent any

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
        stage('Run Linter on Front End') {
            agent {
                docker { image 'node:14-alpine' }
            }
            steps {
                echo 'Linting Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm run lint'
                }
            }
        }
        stage('Test Front End') {
            agent {
                docker { image 'node:14-alpine' }
            }
            steps {
                echo 'Testing Front End...'
                dir('DotnetTemplate.Web') {
                    sh 'npm run test-with-coverage'
                }
            }
        }
    }
    post {
        success {
            publishCoverage (
                enableNewApi: true,
                autoUpdateHealth: true,
                autoUpdateStability: true,
                failUnstable: true,
                failUnhealthy: true,
                failNoReports: true,
                onlyStable: false
                conditionalCoverageTargets: '90, 0, 0',
                fileCoverageTargets: '90, 0, 0',
                lineCoverageTargets: '90, 0, 0',
                methodCoverageTargets: '90, 0, 0',
                packageCoverageTargets: '90, 0, 0',
                adapters: [istanbulCoberturaAdapter('DotnetTemplate.Web/coverage/cobertura-coverage.xml')]
            )
        }
    }
}