const mongoose = require('mongoose');
const {Schema} = mongoose;
const mongoosastic = require('mongoosastic');
const {Client} = require('@elastic/elasticsearch');
const fs = require('fs');

const profileSchema = new Schema({
    id: {
        type: String,
        required: true, unique: true,
    },
    name: {
        type: String,
        required: true, es_indexed: true,
    },
    dob: {
        type: String, default: '',
    },
    about: {
        type: String,
        maxlength: 500, minLength: 10,
        default: '',
    },
    workplaces: {
        type: Array,
        maxlength: 20, default: [],
        es_indexed: true,
    },
    location: {
        type: String,
        maxlength: 50,
        default: '',
    },
    education: {
        type: Array,
        maxlength: 20, default: [],
        es_indexed: true,
    },
    contact: {
        type: Array,
        maxlength: 10, default: [],
    },
    friends: {
        type: Array,
        maxlength: 5000, default: [],
        es_indexed: true,
    },
}, {collection: 'profiles'});

const elasticsearchHost = process.env.ELASTICSEARCH_HOST || 'http://localhost:9200';
const elasticsearchUsername = process.env.ELASTICSEARCH_USERNAME || 'elastic';
const elasticsearchPassword = process.env.ELASTICSEARCH_PASSWORD || 'VYn7N-2p+P9C3iHg-h98';

/**
 * @function createIndex
 * @description creates the index in elasticsearch
 * @param {String} indexName
 * @param {Object} settings
 * @param {Object} mappings
 * @return {Object} response
 */
profileSchema.plugin(mongoosastic, {
    esClient: new Client({
        node: elasticsearchHost,
        auth: {
            username: elasticsearchUsername,
            password: elasticsearchPassword,
        },
        tls: {
            ca: fs.readFileSync('./http_ca.crt'),
            rejectUnauthorized: false,
        },
    }),
    populate: [{
        path: 'org',
        select: 'name',
    }],
    index: 'profiles', // Change the index name to something meaningful
    mappings: {
        properties: {
            name: {
                type: 'text',
                fields: {
                    keyword: {
                        type: 'keyword',
                        ignore_above: 256,
                    },
                },
            },
            workplaces: {
                type: 'text',
                fields: {
                    keyword: {
                        type: 'keyword',
                        ignore_above: 256,
                    },
                },
            },
            education: {
                type: 'text',
                fields: {
                    keyword: {
                        type: 'keyword',
                        ignore_above: 256,
                    },
                },
            },
            friends: {
                type: 'text',
                fields: {
                    keyword: {
                        type: 'keyword',
                        ignore_above: 256,
                    },
                },
            },
        },
    },
    // index: 'profiles',
    // type: 'profile',
    // Define custom Elasticsearch index settings and mappings if needed
    // See https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html
    // and https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html
    // Example:
    // settings: {
    //     number_of_shards: 1,
    //     number_of_replicas: 1,
    // },
    // mappings: {
    //     properties: {
    //         name: { type: 'text' },
    //         workplaces: { type: 'keyword' },
    //         // Add mappings for other fields as needed
    //     },
    // },
});
const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;
