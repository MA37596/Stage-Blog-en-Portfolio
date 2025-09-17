-- Database aanmaken
CREATE DATABASE IF NOT EXISTS casino_db;
USE casino_db;

-- Users tabel
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    points INT DEFAULT 1000,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Games tabel
CREATE TABLE IF NOT EXISTS games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    icon VARCHAR(10) NOT NULL,
    rtp DECIMAL(5,2) NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Game sessions tabel
CREATE TABLE IF NOT EXISTS game_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT NOT NULL,
    points_won INT DEFAULT 0,
    points_lost INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);

-- Voorbeeld data voor games
INSERT INTO games (name, description, category, icon, rtp, rating) VALUES
('Blackjack', 'Test je geluk tegen de dealer', 'Tafelspellen', '♠️', 98.00, 4.8),
('Poker', 'Laat je pokerface zien', 'Tafelspellen', '🃏', 97.00, 4.7),
('Roulette', 'Draai aan het rad van fortuin', 'Tafelspellen', '🎲', 97.00, 4.7),
('Baccarat', 'Het favoriete spel van James Bond', 'Tafelspellen', '🎴', 98.00, 4.6),
('Gokkasten', 'Draai aan de rollen voor grote prijzen', 'Gokkasten', '🎰', 96.00, 4.9),
('Mega Fortune', 'Win de jackpot van je leven', 'Gokkasten', '💰', 96.00, 4.8),
('Live Blackjack', 'Speel met echte dealers', 'Live Casino', '🎥', 98.00, 4.9),
('Live Roulette', 'Echte casino ervaring', 'Live Casino', '🎥', 97.00, 4.8),
('Plink', 'Laat vallen en win', 'Overige', '🎯', 95.00, 4.5),
('Mijnen', 'Vind de schat, vermijd de mijnen', 'Overige', '💣', 96.00, 4.6),
('Craps', 'Gooi de dobbelstenen voor spanning', 'Overige', '🎲', 98.00, 4.7),
('Keno', 'Kies je nummers en win', 'Overige', '🎱', 95.00, 4.4);

-- Voorbeeld admin gebruiker
INSERT INTO users (username, email, password, points) VALUES
('admin', 'admin@luckybet.nl', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 10000); 