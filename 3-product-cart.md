Product-Cart Modülü
Bu proje, ürünlerin yönetimi için bir web uygulaması geliştirmeyi amaçlamaktadır. Uygulama, Express.js kullanılarak oluşturulmuş bir REST API ile desteklenmektedir.

Proje Yapısı

`src/app.ts`: 

Uygulamanın giriş noktasıdır. Express uygulamasını oluşturur, middleware ve rotaları ayarlar.

----
`src/controllers/productController.ts`: 

Ürün yönetimi işlemlerini yöneten ProductController sınıfını içerir. createProduct, getProducts, updateProduct, deleteProduct gibi yöntemleri barındırır.

`src/controllers/cartController.ts`: 

Sepet yönetimi işlemlerini yöneten CartController sınıfını içerir
-----

`src/routes/productRoutes.ts`: 

Ürün yönetimi ile ilgili rotaları ayarlayan setProductRoutes fonksiyonunu içerir. ProductController sınıfının yöntemlerini kullanarak gerekli rotaları tanımlar.

`src/routes/cartRoutes.ts`: 

Sepet yönetimi ile ilgili rotaları ayarlayan setCartRoutes fonksiyonunu içerir. CartController sınıfının yöntemlerini kullanarak gerekli rotaları tanımlar.
-------

`src/services/productService.ts`: 

Ürün yönetimi işlemlerini gerçekleştiren ProductService sınıfını içerir. addProduct, fetchProducts, modifyProduct, removeProduct gibi yöntemler ile ürün yönetimi işlemlerini yönetir.

`src/services/cartService.ts`: 

Sepet yönetimi işlemlerini gerçekleştiren CartService sınıfını içerir. 

--------
`src/views/product.ejs`: 

Ürün yönetim formunu içeren dosyadır.


`src/public/js/scripts.js`: 

Uygulamanın JavaScript dosyasıdır. Ürün yönetim formunun işlevselliğini sağlar.

------------------

Kullanım
Tarayıcıda http://localhost:3000/products adresine giderek ürün yönetim sayfasına ulaşabilirsiniz.

TEST

-Postman veya benzeri bir araç kullanarak API uç noktalarını test edebilirsiniz.

-Hangi endpointleri kullanarak nasıl test yapılacağı http://localhost:3000/api-docs/   adresinden bakabilirsiniz
