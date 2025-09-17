#!/bin/bash

# SFTP server details
SFTP_SERVER="mediacollege-hosts-st1.cust.webslice.eu"
SFTP_USER="c9828Admin"
SFTP_PASSWORD="mPWh_omQ7W"
SFTP_PORT="22"
REMOTE_DIR="/public_html"

# Local directory
LOCAL_DIR="."

# Install required packages
sudo apt update && sudo apt install -y lftp

# Upload files using lftp
lftp -u ${SFTP_USER},${SFTP_PASSWORD} -p ${SFTP_PORT} sftp://${SFTP_SERVER} << EOF
mirror -R ${LOCAL_DIR} ${REMOTE_DIR}
quit
EOF

echo "Files uploaded successfully to SFTP server!"

# Create database setup instructions
cat > DATABASE_SETUP.md << EOL
# Database Setup Instructions

1. Log in to phpMyAdmin: https://mediacollege-hosts-st1.cust.webslice.eu/ma-pma/
2. Use these credentials:
   - Username: c9828Admin
   - Password: mPWh_omQ7W
3. Import the database.sql file:
   - Click on "Import" tab
   - Choose the database.sql file
   - Click "Go" to import
4. Verify the tables are created:
   - games
   - users
   - game_sessions

Note: The database is already configured in .env with your credentials.
EOL

echo "Database setup instructions created in DATABASE_SETUP.md" 