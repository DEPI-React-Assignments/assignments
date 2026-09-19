<div align="center">

# 📘 Technical Session 19

**الفولدر:** `TECH-D19`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

### 🎨 الجزء الأول: CSS Animations

- الـ CSS Variables (Custom Properties):
  - تعريفها جوه `:root` باستخدام `--variable-name`
  - استخدامها في أي مكان باستخدام `var(--variable-name)`
- دالة `calc()` لعمل عمليات حسابية بين القيم
- الـ `transform` وأنواعه المختلفة:
  - `translate()` / `translateX()` / `translateY()`
  - `scale()` / `scaleX()`
  - `rotate()`
  - `skew()`
- الـ Vendor Prefixes بتاعة الـ `transform` (`-webkit-`, `-moz-`, `-ms-`, `-o-`)
- الـ `:hover` pseudo-class واستخدامه مع الـ `transform`
- الـ `@keyframes` وعمل Animation مخصص:
  - تعريف الـ Keyframes باستخدام `from` / `to`
  - تعريف الـ Keyframes باستخدام نسب مئوية (`0%`, `30%`, `70%`, `100%`)
- خصائص الـ Animation:
  - `animation-name`
  - `animation-duration`
  - `animation-iteration-count`
  - `animation-delay`
  - `animation-timing-function`

### 🚀 الجزء الثاني: ES6 والـ OOP

- الفرق بين `var` و `let` و `const` (Scope و Reassignment)
- الـ Arrow Functions وإزاي بتقصر كتابة الدوال
- الـ Template Literals لعمل Strings ديناميكية
- الـ Destructuring:
  - Array Destructuring
  - Object Destructuring
  - تغيير اسم المتغير أثناء الـ Destructuring (Aliasing)
- الـ Spread Operator:
  - نسخ الـ Arrays والـ Objects
  - دمج أو تحديث خصائص Object باستخدام `...`
- الـ Default Parameters في الدوال
- الـ Modules في JavaScript:
  - `export` / `export default`
  - `import` واستخدام `as` لتغيير الاسم عند الاستيراد
- الـ Classes في ES6:
  - الـ `constructor`
  - الـ Methods جوه الـ Class
  - الوراثة (`extends`) واستخدام `super()`
  - الـ Private Fields (`#field`) وإزاي بتحمي البيانات
  - عمل Getter/Setter Methods (زي `getSalary()` و `setSalary()`)
  - استخدام `throw new Error()` للتحقق من صحة البيانات
- التعامل مع الـ APIs باستخدام:
  - `fetch()` مع `.then()`
  - `async` / `await` بدل الـ Promises Chaining
  - التحقق من نجاح الـ Request باستخدام `response.ok`
  - عمل GET Request وقراءة البيانات بـ `response.json()`
  - عمل POST Request باستخدام `method`, `headers`, و `body: JSON.stringify(...)`

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `TECH-D19`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 19 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
