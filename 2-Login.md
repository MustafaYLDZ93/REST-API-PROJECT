# Login Modülü 

Bu proje, kullanıcıların giriş yapabilmesi için bir web uygulaması geliştirmeyi amaçlamaktadır. Uygulama, Express.js kullanılarak oluşturulmuş bir REST API ile desteklenmektedir.

## Proje Yapısı

- `src/app.ts`: Uygulamanın giriş noktasıdır. Express uygulamasını oluşturur, middleware ve rotaları ayarlar.
- `src/controllers/authController.ts`: Kullanıcı kimlik doğrulama işlemlerini yöneten `AuthController` sınıfını içerir. `login` gibi yöntemi barındırır.
- `src/routes/authRoutes.ts`: Kimlik doğrulama ile ilgili rotaları ayarlayan `setAuthRoutes` fonksiyonunu içerir. `AuthController` sınıfının yöntemlerini kullanarak gerekli rotaları tanımlar.
- `src/services/authService.ts`: Kullanıcı kimlik doğrulama işlemlerini gerçekleştiren `AuthService` sınıfını içerir. `validateUser` gibi yöntemler ile kullanıcı doğrulama işlemlerini yönetir.
- `src/types/index.ts`: Uygulama genelinde kullanılacak olan türleri ve arayüzleri tanımlar.
- `src/views/login.ejs`: Kullanıcı giriş formunu içeren dosyadır. Kullanıcıdan e-posta ve şifre bilgilerini alır.
- `src/public/css/styles.css`: Uygulamanın stil dosyasıdır. Giriş sayfasının görünümünü düzenler.
- `src/public/js/scripts.js`: Uygulamanın JavaScript dosyasıdır. Giriş formunun işlevselliğini sağlar.
- `tsconfig.json`: TypeScript için yapılandırma dosyasıdır. Derleyici seçeneklerini ve derleme için dahil edilecek dosyaları belirtir.
- `package.json`: npm için yapılandırma dosyasıdır. Projenin bağımlılıklarını ve script'lerini listeler.

## Kurulum

1. Projeyi klonlayın veya indirin.
2. Terminalde proje dizinine gidin.
3. `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
4. `npm start` veya `npm run dev` komutunu çalıştırarak uygulamayı başlatın.

## Kullanım

- Tarayıcıda `http://localhost:3000/login` adresine giderek giriş sayfasına ulaşabilirsiniz.
- Giriş formunu doldurarak kullanıcı kimlik doğrulama işlemini gerçekleştirebilirsiniz.

## Test

- Postman veya benzeri bir araç kullanarak API uç noktalarını test edebilirsiniz.
- Giriş işlemi için `POST /login` endpoint'ini kullanın.
- Komut satırı testi için `npm jest`
-Hangi endpointleri kullanarak nasıl test yapılacağı http://localhost:3000/api-docs/   adresinden bakabilirsiniz


## API Dökümantasyonu
- http://localhost:3000/api-docs/
