pipeline{
	agent any
	environment{
		IMAGE = "doppy6/BNSP"
		TAG = "latest"

	}
	stages {
		stage('Checkout Source') {
			steps {
				git branch: 'main', url: ''
			}
		}

		stage('Build Dockerfile') {
			steps { 
				script {
					echo "🛠️ Building image ${IMAGE}:${TAG}..."
					def builtImage = docker.build("${IMAGE}:${TAG}")
				}
			}
		}

		stage('Push Docker Image') {
			steps {
        			withCredentials([usernamePassword(
          			credentialsId: "dockerhub-credentials",
          			usernameVariable: 'USER',
          			passwordVariable: 'PASS')]) {
          				script {
            					echo "📦 Pushing image to DockerHub..."
            					sh """
              					echo "$PASS" | docker login -u "$USER" --password-stdin
              					docker push ${IMAGE}:${TAG}
           	 				"""
          				}
        			}
      			}
		}
	
		stage('Connecting to VPS') {
			steps{
				script{
					echo "Connecting to VPS..."
					sh """
					ssh bnsp9@157.10.160.114
					"""
				}
			}
		}

		stage('Pulling Docker Image'){
			steps{
				script{
					echo "Pulling Docker Image..."
					sh """
					docker pull doppy6/BNSP
					"""
				}
			}
		}

		 stage('Building Docker Container'){
                        steps{
                                script{
                                        echo "Building Docker Image..."
                                        sh """
					docker rm -f porto
                                        docker run -d -p 80:80 --name porto doppy6/BNSP
                                        """
                                }
                        }
                }

		stage('Exiting VPS'){
                        steps{
                                script{
                                        echo "Exiting VPS..."
                                        sh """
                                        exit
                                        """
                                }
                        }
                }
	}
}

