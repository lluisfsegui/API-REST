#!/bin/bash
set -e

echo "Configurant Produccio: API + Caddy (HTTPS intern amb certificat intern)"
echo "--------------------------------------------------------"

# 1. Preguntar dades
read -p "Host de No-IP (ex: lluisfseguif.ddns.net): " NOIP_HOST
read -p "Usuari de DockerHub (ex: lluisfsegui): " DOCKER_USER
read -p "Tag de la imatge (ex: v1): " IMAGE_TAG

# 2. Instal  laci   Docker + Docker Compose
echo "Instal  lant Docker Engine i Docker Compose..."
sudo apt update -y
sudo apt install -y curl apt-transport-https ca-certificates software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update -y

sudo apt install -y docker-ce docker-compose

# 3. Preparar fitxers
mkdir -p ~/api-production
cd ~/api-production

# ---- CADDYFILE AMB HTTPS INTERN ----
cat > Caddyfile << EOF
${NOIP_HOST} {
    tls internal
    reverse_proxy api-service:8080
}
EOF

# ---- DOCKER COMPOSE ----
cat > docker-compose.yml << EOF
version: "3.8"

services:
  api-service:
    image: ${DOCKER_USER}/ifc31c-iaw-segui-lluis4:${IMAGE_TAG}
    container_name: api_rest
    restart: always
    networks:
      - prod_network

  caddy:
    image: caddy:latest
    container_name: proxy_caddy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - prod_network

networks:
  prod_network:
    driver: bridge

volumes:
  caddy_data:
  caddy_config:
EOF

# 4. Arrencar contenidors
echo "Llan  ant serveis..."
sudo docker-compose down || true
sudo docker-compose pull
sudo docker-compose up -d

echo "--------------------------------------------------------"
echo "API disponible a:"
echo "    https://${NOIP_HOST}/api/videojuegos"
echo "--------------------------------------------------------"
