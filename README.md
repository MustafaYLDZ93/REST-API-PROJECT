# REST-API-PROJECT #

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
│   │   └── swagger.json
├── tests/
│   ├── authController.test.ts
│   ├── cartController.test.ts
│   └── register-validasyon.test.ts
├── package.json
└── tsconfig.json


----------------

Ana Dosyalar ve Yapı
- src/app.ts:

Express.js uygulamasının ana giriş noktasıdır.
Sunucunun yapılandırılması, middleware'lerin eklenmesi ve rotaların ayarlanması burada yapılır.
Swagger dokümantasyonu için gerekli ayarları içerir.
Sunucu belirtilen portta dinlemeye başlar.


- src/routes/authRoutes.ts:
Kimlik doğrulama ve diğer rotaları ayarlayan fonksiyonu içerir.
İsteklerin hangi kontrolcü metoduna yönlendirileceği burada belirlenir.


- src/controllers/authController.ts:
Kullanıcı kimlik doğrulama işlemlerini yöneten kontrolcü sınıfını içerir.
Kullanıcı giriş işlemi, kullanıcı ekleme, kullanıcı güncelleme ve silme işlemleri burada tanımlanır.


-src/controllers/cartController.ts:
Sepet işlemlerini yöneten kontrolcü sınıfını içerir.
Ürün ekleme ve sepeti getirme işlemleri burada tanımlanır.


-src/controllers/productController.ts:
Ürün işlemlerini yöneten kontrolcü sınıfını içerir.
Ürünleri getirme işlemi burada tanımlanır.


-src/services/authService.ts:
Kullanıcı kimlik doğrulama işlemlerini gerçekleştiren servis sınıfını içerir.
Veritabanı veya dosya sistemi ile etkileşim burada gerçekleştirilir.
Kullanıcı doğrulama, kullanıcı ekleme, güncelleme ve silme işlemleri burada tanımlanır.

-src/services/cartService.ts:
Sepet işlemlerini gerçekleştiren servis sınıfını içerir.
Sepete ürün ekleme ve sepeti getirme işlemleri burada tanımlanır.


-src/services/productService.ts:
Ürün işlemlerini gerçekleştiren servis sınıfını içerir.
Ürünleri getirme işlemi burada tanımlanır.


-src/types/index.ts:
Uygulama genelinde kullanılacak olan türleri ve arayüzleri tanımlar.

-src/views/login.ejs:
Kullanıcı giriş formunu içeren EJS (Embedded JavaScript) şablon dosyasıdır.
Kullanıcıdan kullanıcı adı ve şifre bilgilerini toplar.


-src/views/products-cart.ejs:
Kullanıcı profil sayfasını içeren EJS şablon dosyasıdır.
Ürünleri ve sepeti görüntüler.


-src/public/js/scripts.js:
Giriş formunun işlevselliğini sağlayan JavaScript dosyasıdır.
Form gönderildiğinde, JavaScript ile POST isteği yapılır ve sunucudan gelen yanıt işlenir.

-src/public/css/styles.css:
Uygulamanın stil dosyasıdır.
Giriş sayfasının görünümünü düzenler.


--Test Dosyaları--
tests/authController.test.ts:

AuthController sınıfının testlerini içerir.
Kullanıcı giriş işlemi ve kullanıcı bilgilerini getirme işlemlerini test eder.


tests/cartController.test.ts:
CartController sınıfının testlerini içerir.
Sepete ürün ekleme ve sepeti getirme işlemlerini test eder.


tests/register-validasyon.test.ts:
Kullanıcı kayıt işlemlerinin validasyon testlerini içerir.
Kullanıcı adı ve şifre validasyonlarını test eder.


--Diğer Dosyalar--
-swagger.json:

API dokümantasyonunu içeren Swagger dosyasıdır.
API uç noktalarını ve istek/yanıt yapılarını tanımlar.


-package.json:
Projenin bağımlılıklarını ve script'lerini listeler.
Proje bilgilerini içerir.


-tsconfig.json:
TypeScript için yapılandırma dosyasıdır.
Derleyici seçeneklerini ve derleme için dahil edilecek dosyaları belirtir.


-users.json:
Kullanıcı verilerini içeren JSON dosyasıdır.
Kullanıcı bilgilerini saklar.

-------------

#nodemon, dosya değişikliklerini izler ve sunucuyu otomatik olarak yeniden başlatır.

npm install --save-dev nodemon

package.json dosyanızda scripts bölümünü güncelleyin:

{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  }
}

--

Projenizde ts-node kullanarak TypeScript dosyalarını çalıştırdığımız için, 
nodemon komutunu ts-node ile birlikte kullanmanız gerekecek. src/app.ts dosyasını
kullanarak nodemon komutunu güncelleyebilirsiniz.

"scripts": {
    "start": "ts-node src/app.ts",
    "dev": "nodemon --exec ts-node src/app.ts",
    "test": "jest"
  },

-
Sunucuyu geliştirme modunda başlatmak için şu komutu kullanın:

npm run dev

---------
