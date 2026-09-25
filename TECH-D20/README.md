<div align="center">

# 📘 Technical Session 20

**الفولدر:** `TECH-D20`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

- مقدمة عن مكتبة **jQuery** وإزاي بتسهّل التعامل مع الـ DOM
- الـ Selectors في jQuery ومقارنتها بالـ Vanilla JS:
  - الاختيار بالـ ID (`$("#id")`) مقابل `document.getElementById()`
  - الاختيار بالـ Class (`$(".class")`) مقابل `document.getElementsByClassName()`
  - الاختيار بالـ Tag Name (`$("div")`, `$("span")`)
  - دمج أكتر من Selector مع بعض (`$("#id, .class")`)
  - الـ Descendant Selectors (`$(".class span")`)
  - الفرق بين `querySelector()` و jQuery Object
- الـ `$(document).ready()` وتشغيل الكود بعد تحميل الصفحة
- التعامل مع الـ CSS باستخدام:
  - `.css("property", "value")`
  - `.css({...})` لتحديد أكتر من خاصية دفعة واحدة
- التعامل مع محتوى العناصر:
  - `.html()` لقراءة/تعديل الـ HTML جوه العنصر
  - `.text()` لقراءة/تعديل الـ Text بس
  - الفرق بين `.html()` و `.text()`
- التعامل مع الفورم:
  - `.val()` لقراءة وتعديل قيمة الـ Inputs
  - قراءة البيانات عند حدوث `click` مع `e.preventDefault()`
- التعامل مع الـ Attributes والـ Properties:
  - `.attr()` لقراءة/تعديل الـ Attributes
  - `.prop()` لقراءة/تعديل الـ Properties (زي `checked`, `disabled`)
  - الفرق بين `.attr()` و `.prop()`
  - `.removeAttr()` لحذف Attribute معين
- التعامل مع الـ Classes:
  - `.addClass()`
  - `.removeClass()`
  - `.toggleClass()`
- التعامل مع الـ Events في jQuery:
  - `.click()`
  - `.on()` لربط الأحداث بشكل عام (زي `mouseenter`)
  - الـ Event Delegation باستخدام `.on("event", "selector", handler)` للتعامل مع عناصر بتتضاف ديناميكيًا
- استخدام `this` جوه الـ Event Handler والتعامل معاه بـ `$(this)`
- التنقل بين العناصر باستخدام `.parent()`
- حذف عنصر من الصفحة باستخدام `.remove()`

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `TECH-D20`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 20 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
