#Dependencies

@types/express-session: Express oturumları için TypeScript tür tanımlamaları.
bcrypt: Şifreleme kütüphanesi.
body-parser: HTTP istek gövdesini ayrıştırmak için kullanılan middleware.
ejs: JavaScript ile gömülü şablon motoru.
express: Node.js için web uygulama çerçevesi.
express-session: Oturum yönetimi için middleware.
swagger-jsdoc: Swagger/OpenAPI belgeleri oluşturmak için kullanılan araç.
jsonwebtoken: JSON Web Token (JWT) oluşturma ve doğrulama kütüphanesi.

------------------

#DevDependencies

@types/bcrypt: Bcrypt için TypeScript tür tanımlamaları.
@types/bcryptjs: Bcryptjs için TypeScript tür tanımlamaları.
@types/jest: Jest için TypeScript tür tanımlamaları.
nodemon: Dosya değişikliklerini izleyip sunucuyu otomatik olarak yeniden başlatan araç.
ts-jest: Jest ile TypeScript testleri çalıştırmak için kullanılan araç.
ts-node: TypeScript dosyalarını doğrudan çalıştırmak için kullanılan araç.
typescript: TypeScript derleyicisi.
jest-html-reporter: Jest test sonuçlarını HTML raporuna dönüştüren araç.

Bu paketleri kurmak için terminalde aşağıdaki komutları çalıştırabilirsiniz:
```

npm install @types/express-session bcrypt body-parser ejs express express-session swagger-jsdoc jsonwebtoken
npm install --save-dev @types/bcrypt @types/bcryptjs @types/jest nodemon ts-jest ts-node typescript
npm install --save-dev jest-html-reporter

```