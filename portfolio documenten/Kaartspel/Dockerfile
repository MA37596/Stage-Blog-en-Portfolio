FROM php:8.2-apache

# Installeer benodigde extensies
RUN docker-php-ext-install pdo pdo_mysql

# Installeer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Schakel Apache rewrite module in
RUN a2enmod rewrite

# Stel de werkdirectory in
WORKDIR /var/www/html

# Kopieer de applicatie bestanden
COPY . /var/www/html/

# Stel de juiste permissies in
RUN chown -R www-data:www-data /var/www/html

# Configureer Apache
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Start Apache in de foreground
CMD ["apache2-foreground"] 