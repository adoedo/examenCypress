pipeline{
    agent any

    tools {
        nodejs "Node"
    }

    stages{
        stage('Test Suite Cypress en paralelo'){
            parallel{
                stage('Slave 1'){
                    agent{
                        label 'WorkStation1'
                    }
                    steps{
                        bat 'npm install'
                        bat 'npx cypress run --browser firefox --record --key 2135d3be-05f8-4aff-9892-4a6f1a55f2e6 --parallel'
                    }
                }

                stage('Slave 2'){
                    agent{
                        label 'WorkStation2'
                    }
                    steps{
                        bat 'npm install'
                        bat 'npx cypress run --browser firefox --record --key 2135d3be-05f8-4aff-9892-4a6f1a55f2e6 --parallel'
                    }
                }

                stage('Slave 3'){
                    agent{
                        label 'WorkStation3'
                    }
                    steps{
                        bat 'npm install'
                        bat 'npx cypress run --browser firefox --record --key 2135d3be-05f8-4aff-9892-4a6f1a55f2e6 --parallel'
                    }
                }

                stage('Slave 4'){
                    agent{
                        label 'WorkStation4'
                    }
                    steps{
                        bat 'npm install'
                        bat 'npx cypress run --browser firefox --record --key 2135d3be-05f8-4aff-9892-4a6f1a55f2e6 --parallel'
                    }
                }

                stage('Slave 5'){
                    agent{
                        label 'WorkStation5'
                    }
                    steps{
                        bat 'npm install'
                        bat 'npx cypress run --browser firefox --record --key 2135d3be-05f8-4aff-9892-4a6f1a55f2e6 --parallel'
                    }
                }
            }
        }
    }
}