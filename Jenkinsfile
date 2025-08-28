pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "🔨 Building the project..."
            }
        }

        stage('Test') {
            parallel {
                stage('Service-A Tests') {
                    steps {
                        echo "🧪 Running Service-A Tests..."
                    }
                }
                stage('Service-B Tests') {
                    steps {
                        echo "🧪 Running Service-B Tests..."                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploying application..."
                }
        }
    }

    post {
        success {
            echo "✅ Pipeline executed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
