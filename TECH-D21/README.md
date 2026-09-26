<div align="center">

# 📘 Technical Session 21

**الفولدر:** `TECH-D21`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

### 🔄 الجزء الأول: تكملة jQuery والـ AJAX

- إضافة وحذف عناصر من الـ DOM باستخدام jQuery:
  - `.append()` لإضافة عنصر جوه العنصر (في الآخر)
  - `.prepend()` لإضافة عنصر جوه العنصر (في الأول)
  - `.after()` لإضافة عنصر بعد العنصر المختار
  - `.before()` لإضافة عنصر قبل العنصر المختار
  - `.remove()` لحذف العنصر بالكامل
  - `.empty()` لتفريغ محتوى العنصر بس
- الـ Looping على مجموعة عناصر باستخدام `.each()` والفرق بينها وبين `forEach()` العادية
- الـ DOM Traversal في jQuery:
  - `.parent()` للوصول للعنصر الأب
  - `.children()` للوصول للعناصر الأبناء المباشرين
  - `.find()` للبحث جوه العنصر عن عناصر تانية
  - `.siblings()` للوصول للعناصر الشقيقة
  - `.next()` / `.prev()` للعنصر اللي بعد/قبل
  - `.first()` / `.last()` / `.eq(index)` لاختيار عنصر معين من مجموعة
  - `.filter()` / `.not()` لتصفية العناصر حسب شرط أو Selector معين
- مقدمة عن الـ CRUD Operations وربطها بالـ HTTP Methods:
  - Create → `POST`
  - Read → `GET`
  - Update → `PATCH` (تعديل جزئي) / `PUT` (استبدال كامل)
  - Delete → `DELETE`
- التعامل مع الـ AJAX في jQuery:
  - `$.get()` لعمل GET Request بسرعة
  - `$.ajax()` وإعداداتها (`url`, `method`, `data`)
  - الفرق بين استخدام `success` / `fail` جوه الإعدادات واستخدام `.done()` / `.fail()`
  - عمل الـ CRUD كامل باستخدام `$.ajax()` (GET, POST, PATCH, PUT, DELETE)
  - التعامل مع الأخطاء والتحقق من status code (زي `404`)
- مقارنة بين `fetch()` مع `async/await` و `$.ajax()` في jQuery

### 📱 الجزء الثاني: Responsive Design والـ Media Queries

- مفهوم الـ Responsive Web Design وأهميته لدعم كل أحجام الشاشات
- استخدام الـ Flexbox في تصميم الـ Layout:
  - `display: flex`
  - `justify-content` (زي `space-evenly`)
  - `gap` بين العناصر
- الـ `@media` Queries وإزاي بتغيّر الـ Styling حسب حجم الشاشة:
  - استخدام `max-width` لتحديد نقطة التوقف (Breakpoint)
  - تغيير اتجاه الـ Flexbox جوه الميديا كويري (`flex-direction: column`)
- عمل قائمة تنقل متجاوبة (Responsive Navbar):
  - إخفاء أيقونة القائمة (`#icon`) في الشاشات الكبيرة وإظهارها في الصغيرة
  - إخفاء القائمة الأساسية (`#nav`) في الشاشات الصغيرة والاعتماد على الأيقونة بدلها

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `TECH-D21`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 21 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
