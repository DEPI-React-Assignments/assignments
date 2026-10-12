<div align="center">

# 📘 Technical Session 25

**الفولدر:** `TECH-D25`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

- مقدمة عن **TypeScript** وإزاي بتضيف الـ Static Typing للـ JavaScript وبتكتشف الأخطاء وقت الكتابة قبل التشغيل
- تحديد نوع المتغير (Type Annotation):
    - `number`
    - `string`
    - `boolean`
- الـ Type Inference: إزاي TypeScript بتستنتج نوع المتغير تلقائيًا من القيمة الأولية، ومنع تغيير النوع بعد كده
- النوع `any` ومخاطره لأنه بيلغي التحقق من النوع
- الـ Union Types باستخدام `|` للسماح بأكتر من نوع للمتغير (زي `number | string`)
- التعامل مع الـ Arrays:
    - تحديد نوع عناصر الـ Array (`number[]`)
    - الـ Array من أي نوع (`any[]`)
    - الـ Tuples لتحديد عدد وأنواع العناصر بالترتيب (`[number, string, boolean]`)
    - الفرق بين التعريفات المختلفة للـ Union مع الـ Arrays:
        - `number | string[]` (إما رقم أو Array من Strings)
        - `number[] | string[]` (إما Array من أرقام أو Array من Strings)
        - `(number | string)[]` (Array فيها أرقام وStrings مختلطة)
- تحديد شكل الـ Objects:
    - تحديد أنواع الخصائص جوه الـ Object
    - الخصائص الاختيارية (Optional Properties) باستخدام `?`
- التعامل مع الدوال في TypeScript:
    - تحديد أنواع الـ Parameters
    - الـ Default Parameters
    - تحديد نوع القيمة المرجعة (Return Type)
    - الـ Rest Parameters (`...args`)
- الـ Classes في TypeScript:
    - تعريف الخصائص مع تحديد أنواعها
    - الـ Access Modifiers: `public` / `protected` / `private`
    - الـ Parameter Properties: تعريف الخصائص مباشرة من الـ `constructor` بدل ما نكتبها مرتين
    - تعريف الـ Methods كخصائص من النوع `Function`

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `TECH-D25`.
بالإضافة لتكملة تاسك السيشن اللي فاتت، تاسك سايت المنبر.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 25 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية، ورفع الأسينمنت على منصة شركة التكنيكال

</div>
