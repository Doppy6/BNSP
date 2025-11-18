def remote=[:]
remote.name = 'bnsp9'
remote.host = '157.10.160.114'
remote.allowAnyHosts = true

pipeline{
	agent any
	environment{
		IMAGE = "doppy6/bnsp"
		TAG = "latest"
		BNSP_CREDS=credentials('ssh-vps')
	}
	stages {
		stage('Checkout Source') {
			steps {
				git branch: 'main', url: 'https://github.com/Doppy6/BNSP.git'
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
					echo "Setting Up SSH connection to VPS..."
					remote.user=env.BNSP_CREDS_USR
					remote.password=env.BNSP_CREDS_PSW
				}
				sshCommand(remote: remote, command: "docker pull ${IMAGE}:${TAG}")
			}
		}

		stage('Pulling Docker Image'){
			steps{
				script{
					echo "Pulling Docker Image..."
				
					
				}
			}
		}

		 stage('Running Docker Container'){
                        steps{
                                script{
                                        echo "Running Docker Image..."
                                        
				                    	sshCommand(remote: remote, command: "docker rm -f porto")
                                        sshCommand(remote: remote, command: "docker run -d -p 9200:80 --name porto ${IMAGE}", )
                                        
                                }
                        }
                }

		stage('Exiting VPS'){
                        steps{
                                script{
                                        echo "Exiting VPS..."
                                        
                                        
                                        
                                }
                        }
                }
	}
}

