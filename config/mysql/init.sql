-- 420 Nation Database Initialization
-- This script runs when the MariaDB container starts for the first time

-- Set charset and collation
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Create additional databases for different environments
CREATE DATABASE IF NOT EXISTS `nation_test_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS `nation_staging_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create application user with proper permissions
CREATE USER IF NOT EXISTS 'nation_app'@'%' IDENTIFIED BY 'nation_app_password_change_this';

-- Grant permissions for main database
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, INDEX, ALTER ON `nation_db`.* TO 'nation_app'@'%';

-- Grant permissions for test database
GRANT ALL PRIVILEGES ON `nation_test_db`.* TO 'nation_app'@'%';

-- Grant permissions for staging database
GRANT ALL PRIVILEGES ON `nation_staging_db`.* TO 'nation_app'@'%';

-- Create read-only user for reporting/analytics
CREATE USER IF NOT EXISTS 'nation_readonly'@'%' IDENTIFIED BY 'readonly_password_change_this';
GRANT SELECT ON `nation_db`.* TO 'nation_readonly'@'%';

-- Flush privileges to ensure changes take effect
FLUSH PRIVILEGES;

-- Create initial admin user data (will be managed by Prisma migrations later)
USE `nation_db`;

-- Basic system settings table (will be recreated by Prisma)
-- This is just a placeholder to ensure the database is ready
CREATE TABLE IF NOT EXISTS `_system_check` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `initialized_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `version` VARCHAR(50) DEFAULT '1.0.0-alpha'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `_system_check` (`version`) VALUES ('1.0.0-alpha');

-- Show confirmation
SELECT 'Database initialization completed successfully!' as message;