export const config = () => ({
   port: Number(process.env.PORT),
   jwtSecret: process.env.JWT_SECRET,
   ldapUrl: process.env.LDAP_URL,
   database: {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: ['dist/models/**/*.entity{.ts,.js}'],
      synchronize: true,
   },
});
