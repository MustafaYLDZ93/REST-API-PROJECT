Bu REST API sunucu yapısında kullanılan altyapı paketler, frameworkler, API testi ve dökümantasyon için kullanılan yöntemler ve paketler aşağıda listelenmiştir:

Altyapı Paketler ve Frameworkler

Express: Node.js için web uygulama çerçevesi. (Dosya: src/app.ts)
TypeScript: JavaScript'in statik tipli bir üst kümesi. (Dosya: tsconfig.json)
EJS: JavaScript ile gömülü şablon motoru. (Dosyalar: src/views/login.ejs, src/views/profile.ejs)
bcrypt: Şifreleme kütüphanesi. (Dosya: src/services/authService.ts)
jsonwebtoken: JSON Web Token (JWT) oluşturma ve doğrulama kütüphanesi. (Dosya: src/services/authService.ts)
body-parser: HTTP istek gövdesini ayrıştırmak için kullanılan middleware. (Dosya: src/app.ts)


#API Testi

Jest: JavaScript test framework'ü. (Dosya: jest.config.js)
supertest: HTTP assertion kütüphanesi. (Dosyalar: tests/authController.test.ts, tests/register-validasyon.test.ts, tests/cartController.test.ts)

#API Dökümantasyonu

swagger-jsdoc: Swagger/OpenAPI belgeleri oluşturmak için kullanılan araç. (Dosya: swagger.json)
swagger-ui-express: Swagger UI'yi Express uygulamasına entegre etmek için kullanılan middleware. (Dosya: src/app.ts)

#Kurulum ve Çalıştırma
nodemon: Dosya değişikliklerini izleyip sunucuyu otomatik olarak yeniden başlatan araç. (Dosya: package.json)
ts-node: TypeScript dosyalarını doğrudan çalıştırmak için kullanılan araç. (Dosya: package.json)

