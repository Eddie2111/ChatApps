const mongoose = require('mongoose');

/**
 * @return {Promise<void>}
 */
class MongooseSingleTon {
    /**
     * @params {string} url
     */
    constructor() {
        this.db = null;
    }
    /**
   * @params {string} url
   * @return {Promise<void>}
   */
    async connect() {
        if (this.db) {
            return this.db;
        }
        try {
            this.db = await mongoose.connect(process.env.DB_URL);
            console.log('Connected to DB');
            return this.db;
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}

module.exports = new MongooseSingleTon();
