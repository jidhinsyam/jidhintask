const logger = (req, res, next) => {
    const now = new Date();
    const timestamp = now.toISOString();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; 
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    console.log(`date:${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds}`);
    next(); 
  };

  module.exports = logger