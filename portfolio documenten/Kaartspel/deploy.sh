#!/bin/bash

# Update system
sudo apt update && sudo apt upgrade -y

# Install required packages
sudo apt install -y docker.io docker-compose nginx certbot python3-certbot-nginx

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Create necessary directories
sudo mkdir -p /var/www/html
sudo mkdir -p /etc/nginx/ssl

# Copy application files
sudo cp -r . /var/www/html/
cd /var/www/html

# Build and start Docker containers
sudo docker-compose build
sudo docker-compose up -d

# Configure Nginx
sudo cp nginx.conf /etc/nginx/sites-available/casino
sudo ln -s /etc/nginx/sites-available/casino /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Restart Nginx
sudo systemctl restart nginx

# Set up automatic renewal for SSL
echo "0 0 * * * root certbot renew --quiet" | sudo tee -a /etc/cron.d/certbot-renew

# Set up automatic backups
sudo mkdir -p /backup
echo "0 0 * * * root mysqldump -h localhost -u root -p'${DB_PASSWORD}' casino_db > /backup/casino_db_\$(date +\%Y\%m\%d).sql" | sudo tee -a /etc/cron.d/database-backup

# Set proper permissions
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

echo "Deployment completed successfully!" 