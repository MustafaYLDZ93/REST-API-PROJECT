REST API PROJECT 

PROJE YAPISI
```
├── login-site/
│   ├── src/
│   │   ├── app.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   ├── cartController.ts
│   │   │   └── productController.ts
│   │   ├── public/
│   │   │   ├── css/
│   │   │   │   └── styles.css
│   │   │   └── js/
│   │   │       └── scripts.js
│   │   ├── routes/
│   │   │   └── authRoutes.ts
│   │   ├── services/
│   │   │   ├── authService.ts
│   │   │   ├── cartService.ts
│   │   │   └── productService.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── views/
│   │   │   ├── login.ejs
│   │   │   └── products-cart.ejs
│   │  
├── tests/
│   ├── authController.test.ts
│   ├── cartController.test.ts
│   ├── productController.test.ts
│   └── register-validasyon.test.ts
├── package.json
├── swagger.json
├── tsconfig.json
├── jest.config.js
└── users.json
```

![Ekran Resmi 2025-02-09 15 37 29](https://github.com/user-attachments/assets/8f9ba937-bf76-49c3-8190-e06f118da53a)






### Kullanılan Teknolojiler ve Araçlar

1. **Express.js**  
   - RESTful API sunucusunu oluşturmak için kullanılan popüler bir Node.js framework'üdür.
   - Hızlı, minimal ve genişletilebilir bir yapı sağlar.
   - Kaynakları yönetmek için CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerini uygular.
   - Ölçeklenebilirlik ve sürdürülebilirlik için modüler ve düzenli bir kod yapısına sahiptir.
   - JWT (JSON Web Token) ile beraber Password Hashing (bcryptjs) yöntemleri ile entegre edilmiştir.
  
     
       Express ve body-parser kurmak için
       ```
       npm install express body-parser
       ```
       JWT ve BCRYPT kurmak için
       ```
       npm install bcryptjs jsonwebtoken
       ```


   
     -------------------------------


2. **Jest & SuperTest**  
   - Jest: JavaScript test framework'ü.
   - API endpoint'lerini test etmek için kullanılır.
   - SuperTest: HTTP isteklerini simüle ederek endpoint'leri test eder.
   - Komut satırından testleri otomatize eder. (Postman'de koleksiyondaki testleri Run etme gibi) 
   - Ayrıntılı bir HTML test raporu oluşturur.
  
       Jest & SuperTest kurmak için
       ```
       npm install --save-dev jest supertest
       ```
  
       Test senaryolarını çalıştırın:
       ```
        npx jest
        ```
  

      <img width="371" alt="Ekran Resmi 2025-02-09 17 07 06" src="https://github.com/user-attachments/assets/1023f911-0796-42fe-a806-c36b6f51146b" />


      


       HTML REPORTER ile rapor almak için
       ```
       npm install --save-dev jest-html-reporter
       ```
     

        ![Ekran Resmi 2025-02-09 17 49 32](https://github.com/user-attachments/assets/9b83fb5c-128c-4aa1-a3d9-99178c072979)


     -------------------------------




4. **Swagger UI**  
   - Swagger UI kullanılarak oluşturulan etkileşimli API dokümantasyonu.
   - API dökümantasyonlarını görselleştirmek için kullanılır.
   - API'yi hem dökümante eder hem de kullanıcıların interaktif olarak test etmesine olanak sağlar.
  

       Swagger UI kurmak için
       ```
       npm install swagger-ui-express swagger-jsdoc
       ```
     
      
     ![Ekran Resmi 2025-02-09 17 02 48](https://github.com/user-attachments/assets/9e25a691-27f9-44b8-968a-c2761d114319)

   
   
     

---------------------------------

## Kurulum ve Çalıştırma ##

### Gerekli Bağımlılıkların Yüklenmesi
Projeyi klonladıktan sonra aşağıdaki komutları çalıştırarak bağımlılıkları yükleyebilirsiniz:
```
npm install
```
----------

### Sunucuyu Çalıştırma
Express sunucusunu başlatın (Nodemon ile):
```
npm run dev
```
Normal
```
npm start
```


Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

------------
### Testleri Çalıştırma
Test senaryolarını çalıştırın:
```
npx jest
```

Testlerin ardından (eğer yapılandırılmışsa) `test-report.html` dosyasında bir HTML raporu oluşturulacaktır.

------------

### API Dokümantasyonu
Swagger UI dokümantasyonuna aşağıdakine benzer bağlantıdan erişebilirsiniz:
```
http://localhost:3000/api-docs
```
-----------------

NOT:
Bu proje başlangıç seviyesinde temel RESTful API sunucusu oluşturma ve oluşturulan API leri Postman ve Jest ile test etme amacı ile yazılmıştır.Veritabanı (MySQL, PostgreSQL, MongoDB gibi) kullanılmamıştır.Veriler bi json dosyasından kullanılmaktadır.Proje'ye bunu göz önünde bulundurarak bakınız.Proje büyüdüğünde ve komplike hale geldiğinde .json dosyası yerine bi veritabanı ile (MySQL, PostgreSQL, MongoDB gibi) entegre edilip sunucu kullanılır.
