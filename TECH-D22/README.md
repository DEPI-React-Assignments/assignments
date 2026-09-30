<div align="center">

# 📘 Technical Session 22

**الفولدر:** `TECH-D22`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

### 🧩 الجزء الأول: CSS Grid

- تفعيل الـ Grid Layout باستخدام `display: grid`
- تحديد أعمدة الـ Grid باستخدام `grid-template-columns`:
  - تحديد أحجام ثابتة (`300px`) أو تلقائية (`auto`)
  - استخدام وحدة `fr` لتوزيع المساحة بالنسبة (`1fr`, `2fr`)
  - اختصار التكرار باستخدام `repeat()`
- تحديد صفوف الـ Grid باستخدام `grid-template-rows`
- الـ `gap` للتحكم في المسافة بين عناصر الـ Grid
- تحديد مناطق الـ Grid باستخدام `grid-template-areas` وتسمية كل منطقة
- ربط كل عنصر بمنطقته باستخدام `grid-area`
- التحكم اليدوي في موضع العنصر جوه الـ Grid:
  - `grid-column-start` / `grid-column-end`
  - `grid-row-start` / `grid-row-end`
  - الصيغة المختصرة `grid-column: start / end` و `grid-row: start / end`
- عمل عنصر بياخد أكتر من عمود أو صف (Spanning) باستخدام نفس الخصائص

### 🅱️ الجزء الثاني: Bootstrap

- إضافة Bootstrap للمشروع عن طريق CDN (`link` للـ CSS و `script` للـ JS)
- استخدام الـ Utility Classes الجاهزة بدل كتابة CSS يدوي:
  - الـ Spacing (`p-`, `p-md-`, `pe-lg-`) للـ Padding بمقاسات مختلفة حسب حجم الشاشة
  - الـ Sizing (`w-100`) للتحكم في العرض
  - الألوان والخلفيات (`bg-info`, `text-danger`) ودرجة الشفافية (`bg-opacity-10`, `text-opacity-50`)
  - الحدود (`border`, `border-4`, `border-warning`, `rounded-pill`)
- نظام الـ Flexbox في Bootstrap:
  - `d-flex`
  - `flex-column` / `flex-md-row` لتغيير الاتجاه حسب حجم الشاشة
  - `justify-content-start` / `justify-content-md-evenly`
- نظام الـ Display المتجاوب:
  - `d-block` / `d-md-inline-block` لإظهار العنصر بشكل مختلف حسب حجم الشاشة (Responsive Breakpoints زي `md`, `lg`)
- عمل Utility Class مخصصة والتحكم في الأولوية باستخدام `!important` (زي `.w-30`)
- الفرق بين الاعتماد على Bootstrap الجاهز وكتابة CSS مخصص فوقه

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `day22`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 22 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
