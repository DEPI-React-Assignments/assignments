<div align="center">

# 📘 Technical Session 26

**الفولدر:** `TECH-D26`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

### 🔷 الجزء الأول: تكملة TypeScript

- تحديد نوع الـ Array اللي فيها أنواع مختلفة باستخدام `(boolean | number | string)[]`
- تحديد نوع القيمة المرجعة من الدوال مع Default Parameters
- الـ Type Aliases باستخدام `type` لتعريف شكل الـ Object وإعادة استخدامه (زي `type user`)
- الـ Optional Properties (`address?`) وإزاي بنتعامل معاها
- ملاحظة إن TypeScript بتمنع إضافة خصائص مش معرّفة في النوع، أو نسيان خصائص مطلوبة
- تحويل ملف الـ TypeScript (`main.ts`) لملف JavaScript (`main.js`) عن طريق الـ Compiler

### 🏛️ الجزء التاني: الـ OOP في TypeScript

- الـ Classes وتعريف الخصائص والـ Methods
- الـ Access Modifiers: `public` / `protected` / `private`
- الـ Parameter Properties لتعريف الخصائص مباشرة من الـ `constructor`
- الـ Static Members:
  - تعريف خاصية `static` (زي `counter`) بتتبع الـ Class نفسه مش الـ Object
  - الوصول ليها باستخدام اسم الـ Class (`Person.counter`)
  - استخدام `this.constructor` للتحقق من نوع الـ Class اللي اتعمل منه الـ Object
- الـ Getters و Setters باستخدام `get` و `set` للتحكم في قراءة وتعديل الخصائص الخاصة (`private`)
- الوراثة (Inheritance) باستخدام `extends` واستدعاء الـ `constructor` الأب بـ `super()`
- الـ Abstract Classes:
  - تعريف Class مجرد باستخدام `abstract`
  - الـ Abstract Methods اللي لازم الـ Class الابن يعملها Implementation
  - عدم إمكانية عمل Object مباشر من Abstract Class
- الـ Interfaces:
  - تعريف العقد (Contract) للـ Class باستخدام `interface`
  - تطبيق الـ Interface باستخدام `implements`
  - تطبيق أكتر من Interface في نفس الـ Class
  - الجمع بين الوراثة والـ Interfaces (`extends` مع `implements`)
  - إجبار الـ Class على تنفيذ كل الخصائص والـ Methods المعرّفة في الـ Interface

### 🧱 الجزء التالت: تطبيق عملي بالـ JavaScript Classes

- عمل Class (`Developer`) بيمثل بيانات المطور
- Method اسمها `render()` بتعرض البيانات في الصفحة كـ Card
- استخدام `insertAdjacentHTML()` مع `"beforeend"` لإضافة HTML جوه عنصر موجود
- استخدام الـ Template Literals لدمج البيانات جوه الـ HTML
- إنشاء أكتر من Object واستدعاء `render()` لكل واحد

---

## 📝 الأسينمنت بتاع السيشن

التاسكات موجودة في فايل السيشن `TECH-D26`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 26 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
