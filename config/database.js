module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'stampy.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_blog_backend_udemy'),
      user: env('DATABASE_USERNAME', 'npcpqqlx'),
      password: env('DATABASE_PASSWORD', 'VE0Mbc0hjZ_Xte70u1kPbviojVxOwFdz'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
      min: 0,
      max: 5,
    }
  },
});
